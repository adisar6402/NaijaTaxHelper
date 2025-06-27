import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { generateEmployerLetter, generateLandlordLetter } from "@/lib/pdf-generator";
import { FileText, Download, Building } from "lucide-react";

export default function LetterGenerator() {
  const [employerForm, setEmployerForm] = useState({
    employeeName: "",
    employeeId: "",
    companyName: "",
    hrManager: "",
  });

  const [landlordForm, setLandlordForm] = useState({
    tenantName: "",
    landlordName: "",
    propertyAddress: "",
    annualRent: "",
  });

  const { toast } = useToast();

  const generateLetter = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/generate-letter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Letter generated successfully!",
      });
    },
  });

  const handleEmployerLetter = () => {
    if (!employerForm.employeeName || !employerForm.companyName) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Generate PDF
    generateEmployerLetter(employerForm);

    // Save to backend
    generateLetter.mutate({
      letterType: "employer",
      applicantName: employerForm.employeeName,
      recipientName: employerForm.hrManager || "HR Manager",
      companyName: employerForm.companyName,
      employeeId: employerForm.employeeId,
    });
  };

  const handleLandlordLetter = () => {
    if (!landlordForm.tenantName || !landlordForm.landlordName) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Generate PDF
    generateLandlordLetter(landlordForm);

    // Save to backend
    generateLetter.mutate({
      letterType: "landlord",
      applicantName: landlordForm.tenantName,
      recipientName: landlordForm.landlordName,
      propertyAddress: landlordForm.propertyAddress,
      annualRent: landlordForm.annualRent,
    });
  };

  return (
    <section id="letters" className="py-16 bg-[var(--nigeria-gray)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Download Tax Exemption Letters</h2>
          <p className="text-xl text-gray-600">Generate official letters for your employer or landlord</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Letter for Employer */}
          <Card className="card-shadow card-hover">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">PAYE Exemption Letter</h3>
                <p className="text-gray-600 mb-6">Official letter informing your employer about your tax exemption status</p>
              </div>
              
              <form className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="employee-name">Your Full Name *</Label>
                  <Input
                    id="employee-name"
                    placeholder="e.g., Adebayo Adewale"
                    value={employerForm.employeeName}
                    onChange={(e) => setEmployerForm({ ...employerForm, employeeName: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="employee-id">Employee ID</Label>
                  <Input
                    id="employee-id"
                    placeholder="e.g., EMP001234"
                    value={employerForm.employeeId}
                    onChange={(e) => setEmployerForm({ ...employerForm, employeeId: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="company-name">Company Name *</Label>
                  <Input
                    id="company-name"
                    placeholder="e.g., ABC Technologies Ltd"
                    value={employerForm.companyName}
                    onChange={(e) => setEmployerForm({ ...employerForm, companyName: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="hr-manager">HR Manager Name</Label>
                  <Input
                    id="hr-manager"
                    placeholder="e.g., Mrs. Sarah Johnson"
                    value={employerForm.hrManager}
                    onChange={(e) => setEmployerForm({ ...employerForm, hrManager: e.target.value })}
                  />
                </div>
              </form>
              
              <Button
                onClick={handleEmployerLetter}
                className="w-full btn-primary"
                disabled={generateLetter.isPending}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Letter for Employer
              </Button>
            </CardContent>
          </Card>
          
          {/* Letter for Landlord */}
          <Card className="card-shadow card-hover">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Stamp Duty Exemption Letter</h3>
                <p className="text-gray-600 mb-6">Official letter informing your landlord about stamp duty exemption</p>
              </div>
              
              <form className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="tenant-name">Your Full Name *</Label>
                  <Input
                    id="tenant-name"
                    placeholder="e.g., Adebayo Adewale"
                    value={landlordForm.tenantName}
                    onChange={(e) => setLandlordForm({ ...landlordForm, tenantName: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="landlord-name">Landlord Name *</Label>
                  <Input
                    id="landlord-name"
                    placeholder="e.g., Mr. Emeka Okafor"
                    value={landlordForm.landlordName}
                    onChange={(e) => setLandlordForm({ ...landlordForm, landlordName: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="property-address">Property Address</Label>
                  <Textarea
                    id="property-address"
                    rows={3}
                    placeholder="e.g., 15 Ademola Street, Victoria Island, Lagos"
                    value={landlordForm.propertyAddress}
                    onChange={(e) => setLandlordForm({ ...landlordForm, propertyAddress: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="annual-rent-amount">Annual Rent (₦)</Label>
                  <Input
                    id="annual-rent-amount"
                    type="number"
                    placeholder="e.g., 1200000"
                    value={landlordForm.annualRent}
                    onChange={(e) => setLandlordForm({ ...landlordForm, annualRent: e.target.value })}
                  />
                </div>
              </form>
              
              <Button
                onClick={handleLandlordLetter}
                className="w-full btn-primary"
                disabled={generateLetter.isPending}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Letter for Landlord
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
