import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import EligibilityChecker from "@/components/eligibility-checker";
import PayeCalculator from "@/components/paye-calculator";
import LetterGenerator from "@/components/letter-generator";
import VatFreeItems from "@/components/vat-free-items";
import RemoteWorkerGuide from "@/components/remote-worker-guide";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      
      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Use NaijaTaxAssist?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to understand and benefit from Nigeria's new tax reforms</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 card-shadow rounded-xl bg-white card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-gray-600">Discover if you qualify for PAYE exemptions up to ₦1,000,000 annually</p>
            </div>
            
            <div className="text-center p-6 card-shadow rounded-xl bg-white card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Official Letters</h3>
              <p className="text-gray-600">Generate downloadable exemption letters for employers and landlords</p>
            </div>
            
            <div className="text-center p-6 card-shadow rounded-xl bg-white card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Clear, actionable advice tailored for Nigerian workers and businesses</p>
            </div>
          </div>
        </div>
      </section>

      <EligibilityChecker />
      <PayeCalculator />
      <LetterGenerator />
      <VatFreeItems />
      <RemoteWorkerGuide />
      <Footer />
    </div>
  );
}
