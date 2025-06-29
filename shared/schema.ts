import { pgTable, text, serial, integer, boolean, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ✅ TABLE DEFINITIONS

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const taxCalculations = pgTable("tax_calculations", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  annualIncome: decimal("annual_income", { precision: 15, scale: 2 }).notNull(),
  employmentType: text("employment_type").notNull(),
  annualRent: decimal("annual_rent", { precision: 15, scale: 2 }),
  location: text("location"),
  isRemoteWorker: boolean("is_remote_worker").default(false),
  payeExempt: boolean("paye_exempt").notNull(),
  stampDutyExempt: boolean("stamp_duty_exempt").notNull(),
  estimatedSavings: decimal("estimated_savings", { precision: 15, scale: 2 }),
  createdAt: text("created_at").notNull(),
});

export const letterRequests = pgTable("letter_requests", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  letterType: text("letter_type").notNull(), // 'employer' or 'landlord'
  recipientName: text("recipient_name").notNull(),
  applicantName: text("applicant_name").notNull(),
  companyName: text("company_name"),
  employeeId: text("employee_id"),
  propertyAddress: text("property_address"),
  annualRent: decimal("annual_rent", { precision: 15, scale: 2 }),
  createdAt: text("created_at").notNull(),
});

export const usageStats = pgTable("usage_stats", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  eligibilityChecks: integer("eligibility_checks").default(0),
  payeCalculations: integer("paye_calculations").default(0),
  lettersGenerated: integer("letters_generated").default(0),
  vatSearches: integer("vat_searches").default(0),
});

// ✅ FIXED INSERT SCHEMAS

export const insertTaxCalculationSchema = createInsertSchema(taxCalculations, {
  annualIncome: z.number().min(0, "Annual income is required"),
  employmentType: z.enum(["employee", "freelancer", "business_owner", "remote_worker"]),
  annualRent: z.number().min(0).optional(),
  location: z.string().min(2),
  isRemoteWorker: z.boolean().optional(),

  // ✅ Backend-calculated fields should be optional for Zod parsing
  payeExempt: z.boolean().optional(),
  stampDutyExempt: z.boolean().optional(),
  estimatedSavings: z.union([z.string(), z.number()]).optional(),

  sessionId: z.string().min(5),
}).omit({
  id: true,
  createdAt: true,
});

export const insertLetterRequestSchema = createInsertSchema(letterRequests, {
  sessionId: z.string().min(5),
  letterType: z.enum(["employer", "landlord"]),
  recipientName: z.string().min(2),
  applicantName: z.string().min(2),
  companyName: z.string().optional(),
  employeeId: z.string().optional(),
  propertyAddress: z.string().optional(),
  annualRent: z.number().optional(),
}).omit({
  id: true,
  createdAt: true,
});

export const insertUsageStatsSchema = createInsertSchema(usageStats).omit({
  id: true,
});

// ✅ TYPES

export type InsertTaxCalculation = z.infer<typeof insertTaxCalculationSchema>;
export type TaxCalculation = typeof taxCalculations.$inferSelect;

export type InsertLetterRequest = z.infer<typeof insertLetterRequestSchema>;
export type LetterRequest = typeof letterRequests.$inferSelect;

export type InsertUsageStats = z.infer<typeof insertUsageStatsSchema>;
export type UsageStats = typeof usageStats.$inferSelect;

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
