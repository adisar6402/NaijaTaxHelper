import { Card, CardContent } from "@/components/ui/card";
import { Info, CheckCircle, AlertCircle, DollarSign, FileText, CreditCard } from "lucide-react";

export default function RemoteWorkerGuide() {
  return (
    <section id="remote-guide" className="py-16 bg-[var(--nigeria-gray)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Remote Worker Tax Guide</h2>
          <p className="text-xl text-gray-600">Essential tax information for digital nomads and remote workers in Nigeria</p>
        </div>
        
        <Card className="card-shadow">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Dollar Earners</h4>
                      <p className="text-blue-700 text-sm">If you earn in foreign currency, you may qualify for special tax considerations. Convert earnings to Naira using CBN rates.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">BVN Requirements</h4>
                      <p className="text-green-700 text-sm">Ensure your Bank Verification Number (BVN) is linked to all accounts receiving international payments.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Tax Tips for Remote Workers</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-[var(--nigeria-green)]" />
                      Income Thresholds
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Annual income ≤ ₦1,000,000: Exempt from PAYE</li>
                      <li>• Keep detailed records of all earnings</li>
                      <li>• Consider quarterly tax planning</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-[var(--nigeria-green)]" />
                      Documentation
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Maintain contracts and invoices</li>
                      <li>• Track business expenses</li>
                      <li>• Document client communications</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-[var(--nigeria-green)]" />
                      Banking & Compliance
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Use domiciliary accounts for USD earnings</li>
                      <li>• Report foreign income accurately</li>
                      <li>• Consider professional tax advice</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Pro Tip
                  </h4>
                  <p className="text-yellow-700 text-sm">Join the NaijaTechTax WhatsApp group for real-time updates on remote work taxation and compliance requirements.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
