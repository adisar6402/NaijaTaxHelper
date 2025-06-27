import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTaxCalculationSchema, insertLetterRequestSchema } from "@shared/schema";
import { nanoid } from "nanoid";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Tax eligibility checker
  app.post("/api/check-eligibility", async (req, res) => {
    try {
      const data = insertTaxCalculationSchema.parse({
        ...req.body,
        sessionId: req.body.sessionId || nanoid(),
      });

      // Calculate eligibility
      const annualIncomeNum = parseFloat(data.annualIncome);
      const annualRentNum = data.annualRent ? parseFloat(data.annualRent) : 0;
      
      const payeExempt = annualIncomeNum <= 1000000;
      const stampDutyExempt = annualRentNum <= 10000000;
      
      // Calculate estimated PAYE savings
      let estimatedSavings = "0";
      if (payeExempt && annualIncomeNum > 0) {
        // Simplified calculation - assuming previous tax rate of 12%
        const previousTax = annualIncomeNum * 0.12;
        const newTax = annualIncomeNum > 1000000 ? (annualIncomeNum - 1000000) * 0.075 : 0;
        estimatedSavings = Math.max(0, previousTax - newTax).toString();
      }

      const calculation = await storage.createTaxCalculation({
        ...data,
        payeExempt,
        stampDutyExempt,
        estimatedSavings,
      });

      // Update usage stats
      const today = new Date().toISOString().split('T')[0];
      await storage.updateUsageStats(today, { eligibilityChecks: 1 });

      res.json({
        success: true,
        data: {
          payeExempt,
          stampDutyExempt,
          estimatedSavings: parseFloat(estimatedSavings),
          sessionId: data.sessionId,
        }
      });
    } catch (error) {
      console.error("Eligibility check error:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid request data" 
      });
    }
  });

  // PAYE calculator
  app.post("/api/calculate-paye", async (req, res) => {
    try {
      const { monthlySalary, additionalIncome, currentTaxRate } = req.body;
      
      if (!monthlySalary || monthlySalary <= 0) {
        return res.status(400).json({ 
          success: false, 
          error: "Valid monthly salary is required" 
        });
      }

      const monthlyTotal = parseFloat(monthlySalary) + (parseFloat(additionalIncome) || 0);
      const annualIncome = monthlyTotal * 12;
      const taxRate = parseFloat(currentTaxRate) || 7.5;
      
      // Current tax calculation
      const currentAnnualTax = annualIncome * (taxRate / 100);
      
      // New tax calculation (2025 reforms)
      let newAnnualTax = 0;
      if (annualIncome > 1000000) {
        newAnnualTax = (annualIncome - 1000000) * 0.075; // 7.5% on amount above ₦1M
      }
      
      const annualSavings = Math.max(0, currentAnnualTax - newAnnualTax);

      // Update usage stats
      const today = new Date().toISOString().split('T')[0];
      await storage.updateUsageStats(today, { payeCalculations: 1 });

      res.json({
        success: true,
        data: {
          annualIncome,
          currentAnnualTax,
          newAnnualTax,
          annualSavings,
          monthlySavings: annualSavings / 12,
        }
      });
    } catch (error) {
      console.error("PAYE calculation error:", error);
      res.status(400).json({ 
        success: false, 
        error: "Error calculating PAYE savings" 
      });
    }
  });

  // Generate tax letter
  app.post("/api/generate-letter", async (req, res) => {
    try {
      const data = insertLetterRequestSchema.parse({
        ...req.body,
        sessionId: req.body.sessionId || nanoid(),
      });

      const letterRequest = await storage.createLetterRequest(data);

      // Update usage stats
      const today = new Date().toISOString().split('T')[0];
      await storage.updateUsageStats(today, { lettersGenerated: 1 });

      res.json({
        success: true,
        data: letterRequest,
      });
    } catch (error) {
      console.error("Letter generation error:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid letter request data" 
      });
    }
  });

  // VAT items search
  app.get("/api/vat-items", async (req, res) => {
    try {
      const { search, category } = req.query;
      
      // This would normally come from a database
      // For now, we'll return the search parameters to be handled on frontend
      const today = new Date().toISOString().split('T')[0];
      await storage.updateUsageStats(today, { vatSearches: 1 });

      res.json({
        success: true,
        data: {
          search: search || '',
          category: category || 'all',
          // Frontend will handle the actual filtering of VAT items
        }
      });
    } catch (error) {
      console.error("VAT search error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Error processing VAT search" 
      });
    }
  });

  // Usage statistics (for admin dashboard)
  app.get("/api/usage-stats", async (req, res) => {
    try {
      const stats = await storage.getAllUsageStats();
      
      // Calculate totals
      const totals = stats.reduce((acc, stat) => ({
        eligibilityChecks: acc.eligibilityChecks + (stat.eligibilityChecks || 0),
        payeCalculations: acc.payeCalculations + (stat.payeCalculations || 0),
        lettersGenerated: acc.lettersGenerated + (stat.lettersGenerated || 0),
        vatSearches: acc.vatSearches + (stat.vatSearches || 0),
      }), {
        eligibilityChecks: 0,
        payeCalculations: 0,
        lettersGenerated: 0,
        vatSearches: 0,
      });

      res.json({
        success: true,
        data: {
          totals,
          daily: stats.slice(-30), // Last 30 days
        }
      });
    } catch (error) {
      console.error("Usage stats error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Error fetching usage statistics" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
