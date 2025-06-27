export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[var(--nigeria-green)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">₦</span>
              </div>
              <span className="ml-3 text-xl font-bold">NaijaTaxAssist</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Free tools to help Nigerians understand and benefit from the 2025 tax reforms. 
              Built with ❤️ for the Nigerian people.
            </p>
            <p className="text-sm text-gray-500">
              Built by <strong>Abdulrahman Adisa Amuda</strong> 🇳🇬
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => document.getElementById('checker')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Eligibility Checker</button></li>
              <li><button onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">PAYE Calculator</button></li>
              <li><button onClick={() => document.getElementById('letters')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Download Letters</button></li>
              <li><button onClick={() => document.getElementById('vat-free')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">VAT-Free Items</button></li>
              <li><button onClick={() => document.getElementById('remote-guide')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Remote Work Guide</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://firs.gov.ng" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FIRS Official Website</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Reform FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 NaijaTaxAssist. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-sm text-gray-400 mr-4">Made with</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <span className="text-gray-400 text-sm">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
