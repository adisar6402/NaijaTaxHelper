import { useTranslation } from "@/lib/translation-context";

export default function Footer() {
  const { t } = useTranslation();
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

            {/* ✅ WhatsApp Support Group CTA */}
            <a
              href="https://chat.whatsapp.com/GI6FtFrf7hNCWKuAPJLK3R?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-200 font-medium mb-4"
            >
              📱 Join our WhatsApp Support Group
            </a>

            <p className="text-gray-400 mb-4 max-w-md">{t.footer.description}</p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                <span className="inline-flex items-center gap-2">
                  {t.footer.builtBy}
                  <a
                    href="https://www.linkedin.com/in/abdulrahman--engineering-ai-ml/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <svg className="w-4 h-4 fill-blue-500" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/adisar6402"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <svg className="w-4 h-4 fill-gray-400" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </span>
              </p>
              <p className="text-xs text-gray-600">{t.footer.languageSupport}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => document.getElementById("checker")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Eligibility Checker</button>
              </li>
              <li>
                <button onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">PAYE Calculator</button>
              </li>
              <li>
                <button onClick={() => document.getElementById("letters")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Download Letters</button>
              </li>
              <li>
                <button onClick={() => document.getElementById("vat-free")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">VAT-Free Items</button>
              </li>
              <li>
                <button onClick={() => document.getElementById("remote-guide")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Remote Work Guide</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://firs.gov.ng" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FIRS Official Website</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Reform FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
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
