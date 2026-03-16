import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { translations } from '../utils/translations';

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Glow Hair Center Logo" className="h-12 w-auto object-contain" />
              <div>
                <h3 className="text-xl font-bold">Glow Hair Center</h3>
                <p className="text-xs text-slate-400">{t.tagline}</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.quickLinks.title}</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  {t.nav.testimonials}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.services.title}</h4>
            <ul className="space-y-3 text-slate-400">
              <li>{t.services.items.hairTransplant.title}</li>
              <li>{t.services.items.beardTransplant.title}</li>
              <li>{t.services.items.prpStemCell.title}</li>
              <li>{t.services.items.womensHair.title}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.contact.title}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-slate-400">Tirana, Albania</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <a href="tel:+355697764801" className="text-slate-400 hover:text-teal-400 transition-colors">
                  +355 697 764 801
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <a href="mailto:info@glowhaircenter.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                  glowhaircenter@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Glow Hair Center. {t.footer.rights}
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-slate-400 hover:text-teal-400 transition-colors">
                {t.footer.privacy}
              </button>
              <button className="text-slate-400 hover:text-teal-400 transition-colors">
                {t.footer.terms}
              </button>
              <button className="text-slate-400 hover:text-teal-400 transition-colors">
                {t.footer.cookies}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
