import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [language, setLanguage] = useState("en");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#checker", label: "Eligibility Checker", id: "checker" },
    { href: "#calculator", label: "PAYE Calculator", id: "calculator" },
    { href: "#letters", label: "Tax Letters", id: "letters" },
    { href: "#vat-free", label: "VAT-Free Items", id: "vat-free" },
    { href: "#remote-guide", label: "Remote Work", id: "remote-guide" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-[var(--nigeria-green)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">₦</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">NaijaTaxAssist</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="nav-link px-3 py-2 text-sm font-medium text-gray-600 hover:text-[var(--nigeria-green)] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-24 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="yo">Yoruba</SelectItem>
                    <SelectItem value="ha">Hausa</SelectItem>
                    <SelectItem value="ig">Igbo</SelectItem>
                    <SelectItem value="pi">Pidgin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-[var(--nigeria-green)] focus:outline-none focus:text-[var(--nigeria-green)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-[var(--nigeria-green)]"
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="flex items-center space-x-2 px-3 py-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="yo">Yoruba</SelectItem>
                  <SelectItem value="ha">Hausa</SelectItem>
                  <SelectItem value="ig">Igbo</SelectItem>
                  <SelectItem value="pi">Pidgin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
