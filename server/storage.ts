import { 
  users, 
  taxCalculations, 
  letterRequests, 
  usageStats,
  type User, 
  type InsertUser,
  type TaxCalculation,
  type InsertTaxCalculation,
  type LetterRequest,
  type InsertLetterRequest,
  type UsageStats,
  type InsertUsageStats
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Tax calculations
  createTaxCalculation(calculation: InsertTaxCalculation): Promise<TaxCalculation>;
  getTaxCalculationsBySession(sessionId: string): Promise<TaxCalculation[]>;
  
  // Letter requests
  createLetterRequest(request: InsertLetterRequest): Promise<LetterRequest>;
  getLetterRequestsBySession(sessionId: string): Promise<LetterRequest[]>;
  
  // Usage statistics
  updateUsageStats(date: string, stats: Partial<InsertUsageStats>): Promise<UsageStats>;
  getUsageStats(date: string): Promise<UsageStats | undefined>;
  getAllUsageStats(): Promise<UsageStats[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private taxCalculations: Map<number, TaxCalculation>;
  private letterRequests: Map<number, LetterRequest>;
  private usageStats: Map<string, UsageStats>;
  private currentUserId: number;
  private currentTaxCalcId: number;
  private currentLetterId: number;

  constructor() {
    this.users = new Map();
    this.taxCalculations = new Map();
    this.letterRequests = new Map();
    this.usageStats = new Map();
    this.currentUserId = 1;
    this.currentTaxCalcId = 1;
    this.currentLetterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createTaxCalculation(calculation: InsertTaxCalculation): Promise<TaxCalculation> {
    const id = this.currentTaxCalcId++;
    const taxCalc: TaxCalculation = { 
      ...calculation, 
      id,
      createdAt: new Date().toISOString()
    };
    this.taxCalculations.set(id, taxCalc);
    return taxCalc;
  }

  async getTaxCalculationsBySession(sessionId: string): Promise<TaxCalculation[]> {
    return Array.from(this.taxCalculations.values()).filter(
      calc => calc.sessionId === sessionId
    );
  }

  async createLetterRequest(request: InsertLetterRequest): Promise<LetterRequest> {
    const id = this.currentLetterId++;
    const letterReq: LetterRequest = { 
      ...request, 
      id,
      createdAt: new Date().toISOString()
    };
    this.letterRequests.set(id, letterReq);
    return letterReq;
  }

  async getLetterRequestsBySession(sessionId: string): Promise<LetterRequest[]> {
    return Array.from(this.letterRequests.values()).filter(
      req => req.sessionId === sessionId
    );
  }

  async updateUsageStats(date: string, stats: Partial<InsertUsageStats>): Promise<UsageStats> {
    const existing = this.usageStats.get(date);
    
    if (existing) {
      const updated: UsageStats = {
        ...existing,
        eligibilityChecks: (existing.eligibilityChecks || 0) + (stats.eligibilityChecks || 0),
        payeCalculations: (existing.payeCalculations || 0) + (stats.payeCalculations || 0),
        lettersGenerated: (existing.lettersGenerated || 0) + (stats.lettersGenerated || 0),
        vatSearches: (existing.vatSearches || 0) + (stats.vatSearches || 0),
      };
      this.usageStats.set(date, updated);
      return updated;
    } else {
      const newStats: UsageStats = {
        id: Date.now(),
        date,
        eligibilityChecks: stats.eligibilityChecks || 0,
        payeCalculations: stats.payeCalculations || 0,
        lettersGenerated: stats.lettersGenerated || 0,
        vatSearches: stats.vatSearches || 0,
      };
      this.usageStats.set(date, newStats);
      return newStats;
    }
  }

  async getUsageStats(date: string): Promise<UsageStats | undefined> {
    return this.usageStats.get(date);
  }

  async getAllUsageStats(): Promise<UsageStats[]> {
    return Array.from(this.usageStats.values());
  }
}

export const storage = new MemStorage();
