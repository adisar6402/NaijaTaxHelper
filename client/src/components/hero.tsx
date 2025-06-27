export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Navigate Nigeria's<br />
            <span className="text-green-200 inline-block slide-up" style={{animationDelay: '0.3s'}}>2025 Tax Reforms</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-green-100 max-w-4xl mx-auto leading-relaxed slide-up" style={{animationDelay: '0.5s'}}>
            Free tools to check your tax exemptions, calculate savings, and generate official letters. 
            <br className="hidden md:block" />
            <span className="font-semibold">Built for everyday Nigerians.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-up" style={{animationDelay: '0.7s'}}>
            <button
              onClick={() => scrollToSection('checker')}
              className="bg-white text-[var(--nigeria-green)] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Check My Eligibility
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[var(--nigeria-green)] transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              Calculate Savings
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 slide-up" style={{animationDelay: '0.9s'}}>
            <p className="text-green-200 text-sm mb-4">Trusted by thousands of Nigerians</p>
            <div className="flex justify-center items-center space-x-8 text-green-200">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Official Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
