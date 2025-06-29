import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

// ✅ Optional helper to persist session ID
const getSessionId = () => {
  const key = "naijatax_session";
  let sid = sessionStorage.getItem(key);
  if (!sid) {
    sid = crypto.randomUUID();
    sessionStorage.setItem(key, sid);
  }
  return sid;
};

interface EligibilityResult {
  payeExempt: boolean;
  stampDutyExempt: boolean;
  estimatedSavings: number;
  sessionId: string;
}

export default function EligibilityChecker() {
  const [formData, setFormData] = useState({
    annualIncome: "",
    employmentType: "",
    annualRent: "",
    location: "",
    isRemoteWorker: false,
  });

  const [results, setResults] = useState<EligibilityResult | null>(null);
  const { toast } = useToast();

  const checkEligibility = useMutation({
    mutationFn: async () => {
      const parsedData = {
        annualIncome: Number(formData.annualIncome || 0),
        employmentType: formData.employmentType,
        annualRent: Number(formData.annualRent || 0),
        location: formData.location,
        isRemoteWorker: Boolean(formData.isRemoteWorker),
        sessionId: getSessionId(), // ✅ FIXED: Send session ID
      };

      const response = await apiRequest("POST", "/api/check-eligibility", parsedData);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setResults(data.data);
        console.log("✅ Eligibility result:", data.data);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to check eligibility",
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Server error. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.annualIncome || !formData.employmentType || !formData.location) {
      toast({
        title: "Missing Info",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }

    checkEligibility.mutate();
  };

  const scrollToLetters = () => {
    const el = document.getElementById("letters");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="checker" className="py-16 bg-[var(--nigeria-gray)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tax Eligibility Checker
          </h2>
          <p className="text-xl text-gray-600">
            Find out which tax exemptions you qualify for in under 2 minutes
          </p>
        </div>

        <Card className="card-shadow">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="annual-income">Annual Income (₦)</Label>
                  <Input
                    id="annual-income"
                    type="number"
                    placeholder="e.g., 800000"
                    value={formData.annualIncome}
                    onChange={(e) =>
                      setFormData({ ...formData, annualIncome: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="employment-type">Employment Type</Label>
                  <Select
                    value={formData.employmentType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, employmentType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select employment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee">Employee</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="business_owner">Business Owner</SelectItem>
                      <SelectItem value="remote_worker">Remote Worker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="annual-rent">Annual Rent Paid (₦)</Label>
                  <Input
                    id="annual-rent"
                    type="number"
                    placeholder="e.g., 1200000"
                    value={formData.annualRent}
                    onChange={(e) =>
                      setFormData({ ...formData, annualRent: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) =>
                      setFormData({ ...formData, location: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos">Lagos</SelectItem>
                      <SelectItem value="abuja">FCT Abuja</SelectItem>
                      <SelectItem value="kano">Kano</SelectItem>
                      <SelectItem value="rivers">Rivers</SelectItem>
                      <SelectItem value="kaduna">Kaduna</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remote-work"
                  checked={formData.isRemoteWorker}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, isRemoteWorker: !!checked })
                  }
                />
                <Label htmlFor="remote-work" className="text-sm">
                  I work remotely for international clients or companies
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={checkEligibility.isPending}
              >
                {checkEligibility.isPending ? "Checking..." : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Check My Eligibility
                  </>
                )}
              </Button>
            </form>

            {results && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Your Tax Exemption Status
                </h3>

                <div className="space-y-4">
                  <div
                    className={`flex items-center p-4 border rounded-lg ${
                      results.payeExempt
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                        results.payeExempt ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4
                        className={`font-semibold ${
                          results.payeExempt ? "text-green-800" : "text-red-800"
                        }`}
                      >
                        PAYE Tax Exemption
                      </h4>
                      <p
                        className={
                          results.payeExempt ? "text-green-700" : "text-red-700"
                        }
                      >
                        {results.payeExempt
                          ? "You qualify for PAYE exemption"
                          : "You do not qualify for PAYE exemption"}
                      </p>
                      {results.payeExempt && results.estimatedSavings > 0 && (
                        <p className="text-sm text-green-600 mt-1">
                          Estimated savings: ₦
                          {results.estimatedSavings.toLocaleString()}/year
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`flex items-center p-4 border rounded-lg ${
                      results.stampDutyExempt
                        ? "bg-blue-50 border-blue-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                        results.stampDutyExempt ? "bg-blue-500" : "bg-red-500"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4
                        className={`font-semibold ${
                          results.stampDutyExempt ? "text-blue-800" : "text-red-800"
                        }`}
                      >
                        Stamp Duty Exemption
                      </h4>
                      <p
                        className={
                          results.stampDutyExempt
                            ? "text-blue-700"
                            : "text-red-700"
                        }
                      >
                        {results.stampDutyExempt
                          ? "You qualify for stamp duty exemption on rent"
                          : "You do not qualify for stamp duty exemption"}
                      </p>
                    </div>
                  </div>

                  {(results.payeExempt || results.stampDutyExempt) && (
                    <div className="flex justify-center mt-6">
                      <Button onClick={scrollToLetters} className="btn-primary">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                        Generate Official Letter
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
