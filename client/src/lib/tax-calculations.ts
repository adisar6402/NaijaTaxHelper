export interface TaxEligibilityInput {
  annualIncome: number;
  annualRent?: number;
  employmentType: string;
  isRemoteWorker: boolean;
}

export interface TaxEligibilityResult {
  payeExempt: boolean;
  stampDutyExempt: boolean;
  estimatedSavings: number;
}

export interface PayeCalculationInput {
  monthlySalary: number;
  additionalIncome?: number;
  currentTaxRate: number;
}

export interface PayeCalculationResult {
  annualIncome: number;
  currentAnnualTax: number;
  newAnnualTax: number;
  annualSavings: number;
  monthlySavings: number;
}

// Tax thresholds as per 2025 reforms
export const TAX_THRESHOLDS = {
  PAYE_EXEMPTION_LIMIT: 1000000, // ₦1,000,000 annually
  STAMP_DUTY_EXEMPTION_LIMIT: 10000000, // ₦10,000,000 annually for rent
  NEW_TAX_RATE: 0.075, // 7.5% for income above exemption limit
};

export const calculateTaxEligibility = (input: TaxEligibilityInput): TaxEligibilityResult => {
  const payeExempt = input.annualIncome <= TAX_THRESHOLDS.PAYE_EXEMPTION_LIMIT;
  const stampDutyExempt = (input.annualRent || 0) <= TAX_THRESHOLDS.STAMP_DUTY_EXEMPTION_LIMIT;
  
  // Calculate estimated PAYE savings
  let estimatedSavings = 0;
  if (payeExempt && input.annualIncome > 0) {
    // Assume previous average tax rate of 12% for estimation
    const previousTax = input.annualIncome * 0.12;
    const newTax = input.annualIncome > TAX_THRESHOLDS.PAYE_EXEMPTION_LIMIT 
      ? (input.annualIncome - TAX_THRESHOLDS.PAYE_EXEMPTION_LIMIT) * TAX_THRESHOLDS.NEW_TAX_RATE 
      : 0;
    estimatedSavings = Math.max(0, previousTax - newTax);
  }

  return {
    payeExempt,
    stampDutyExempt,
    estimatedSavings,
  };
};

export const calculatePayeSavings = (input: PayeCalculationInput): PayeCalculationResult => {
  const monthlyTotal = input.monthlySalary + (input.additionalIncome || 0);
  const annualIncome = monthlyTotal * 12;
  
  // Current tax calculation
  const currentAnnualTax = annualIncome * (input.currentTaxRate / 100);
  
  // New tax calculation (2025 reforms)
  let newAnnualTax = 0;
  if (annualIncome > TAX_THRESHOLDS.PAYE_EXEMPTION_LIMIT) {
    newAnnualTax = (annualIncome - TAX_THRESHOLDS.PAYE_EXEMPTION_LIMIT) * TAX_THRESHOLDS.NEW_TAX_RATE;
  }
  
  const annualSavings = Math.max(0, currentAnnualTax - newAnnualTax);
  const monthlySavings = annualSavings / 12;

  return {
    annualIncome,
    currentAnnualTax,
    newAnnualTax,
    annualSavings,
    monthlySavings,
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (amount: number): string => {
  return new Intl.NumberFormat('en-NG').format(amount);
};
