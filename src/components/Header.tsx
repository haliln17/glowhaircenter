import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { translations } from '../utils/translations';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2">
        <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+355697764801" className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
                <Phone size={14} />
                <span className="hidden sm:inline">+355 697 764 801</span>
              </a>
              <a href="mailto:info@glowhaircenter.com" className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
                <Mail size={14} />
                <span className="hidden md:inline">glowhaircenter@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Globe size={14} />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border-none text-white text-sm focus:outline-none cursor-pointer hover:text-teal-400 transition-colors"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-slate-800">
                    {lang.flag} {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Glow Hair Center Logo" className="h-12 w-auto object-contain" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Glow Hair Center
                </h1>
                <p className="text-xs text-slate-600">{t.tagline}</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.gallery}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.testimonials}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.contact}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {t.nav.bookConsultation}
              </button>
            </div>

            <button
              className="lg:hidden text-slate-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors">
                {t.nav.gallery}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors">
                {t.nav.testimonials}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors">
                {t.nav.contact}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                {t.nav.bookConsultation}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
