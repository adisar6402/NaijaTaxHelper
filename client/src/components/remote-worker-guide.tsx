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
            {/* Remote Worker Illustration */}
            <div className="text-center mb-8">
              <div className="inline-block p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                <svg className="w-32 h-32 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Laptop */}
                  <rect x="50" y="120" width="100" height="60" rx="4" fill="#374151" />
                  <rect x="55" y="125" width="90" height="50" rx="2" fill="#1f2937" />
                  <rect x="60" y="130" width="80" height="40" rx="2" fill="#059669" opacity="0.8" />
                  
                  {/* Person */}
                  <circle cx="100" cy="80" r="20" fill="#fbbf24" />
                  <rect x="85" y="100" width="30" height="40" rx="15" fill="#3b82f6" />
                  
                  {/* Arms */}
                  <rect x="70" y="110" width="15" height="25" rx="7" fill="#fbbf24" />
                  <rect x="115" y="110" width="15" height="25" rx="7" fill="#fbbf24" />
                  
                  {/* WiFi Symbol */}
                  <path d="M30 50 Q50 30 70 50" stroke="#059669" strokeWidth="3" fill="none" />
                  <path d="M35 55 Q50 45 65 55" stroke="#059669" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="60" r="2" fill="#059669" />
                  
                  {/* Dollar Signs */}
                  <text x="130" y="45" fontSize="16" fill="#059669" fontWeight="bold">$</text>
                  <text x="145" y="35" fontSize="14" fill="#10b981" fontWeight="bold">₦</text>
                  <text x="160" y="50" fontSize="12" fill="#34d399" fontWeight="bold">€</text>
                  
                  {/* Nigeria Flag Colors */}
                  <rect x="20" y="20" width="8" height="12" fill="#008751" />
                  <rect x="28" y="20" width="8" height="12" fill="white" />
                  <rect x="36" y="20" width="8" height="12" fill="#008751" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mt-2 italic">Digital Nomad • Remote Worker • Global Income</p>
            </div>
            
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
