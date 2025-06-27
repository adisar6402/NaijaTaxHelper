import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Calculator } from "lucide-react";

interface PayeResult {
  annualIncome: number;
  currentAnnualTax: number;
  newAnnualTax: number;
  annualSavings: number;
  monthlySavings: number;
}

export default function PayeCalculator() {
  const [formData, setFormData] = useState({
    monthlySalary: "",
    additionalIncome: "",
    currentTaxRate: "7.5",
  });
  const [results, setResults] = useState<PayeResult | null>(null);

  const calculatePaye = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/calculate-paye", formData);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setResults(data.data);
      }
    },
  });

  // Auto-calculate when form data changes
  useEffect(() => {
    if (formData.monthlySalary && parseFloat(formData.monthlySalary) > 0) {
      const timer = setTimeout(() => {
        calculatePaye.mutate();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [formData]);

  return (
    <section id="calculator" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">PAYE Savings Calculator</h2>
          <p className="text-xl text-gray-600">Calculate exactly how much you'll save with the new tax reforms</p>
        </div>
        
        <Card className="card-shadow border">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Enter Your Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="monthly-salary">Monthly Salary (₦)</Label>
                    <Input
                      id="monthly-salary"
                      type="number"
                      placeholder="e.g., 80000"
                      value={formData.monthlySalary}
                      onChange={(e) => setFormData({ ...formData, monthlySalary: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="additional-income">Additional Monthly Income (₦)</Label>
                    <Input
                      id="additional-income"
                      type="number"
                      placeholder="e.g., 20000"
                      value={formData.additionalIncome}
                      onChange={(e) => setFormData({ ...formData, additionalIncome: e.target.value })}
                    />
                    <p className="text-sm text-gray-500 mt-1">Freelance, business, or other income</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="tax-rate">Current Tax Rate</Label>
                    <Select
                      value={formData.currentTaxRate}
                      onValueChange={(value) => setFormData({ ...formData, currentTaxRate: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7.5">7.5% (Lower income)</SelectItem>
                        <SelectItem value="11">11% (Medium income)</SelectItem>
                        <SelectItem value="15">15% (Higher income)</SelectItem>
                        <SelectItem value="19">19% (High income)</SelectItem>
                        <SelectItem value="21">21% (Very high income)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Savings</h3>
                
                {results ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-[var(--nigeria-gray)] rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Annual Income:</span>
                        <span className="font-semibold">₦{results.annualIncome.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Current Annual Tax:</span>
                        <span className="font-semibold text-red-600">₦{results.currentAnnualTax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">New Annual Tax:</span>
                        <span className="font-semibold text-[var(--nigeria-green)]">₦{results.newAnnualTax.toLocaleString()}</span>
                      </div>
                      <hr className="my-3" />
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Annual Savings:</span>
                        <span className="text-xl font-bold text-[var(--nigeria-green)]">₦{results.annualSavings.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">What You Can Do With Your Savings:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Start an emergency fund</li>
                        <li>• Invest in mutual funds or stocks</li>
                        <li>• Save for home down payment</li>
                        <li>• Fund children's education</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Enter your monthly salary to see your potential savings</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
