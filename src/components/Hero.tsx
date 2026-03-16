import { MessageCircle, Calendar } from 'lucide-react';
import { translations } from '../utils/translations';

interface HeroProps {
  language: string;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/355697764801', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      ></div>

      <div className="relative z-20 max-w-full mx-auto px-4 sm:px-8 lg:px-12 py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-sm font-semibold border border-teal-500/30 backdrop-blur-sm">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.headline}
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 mb-4 leading-relaxed">
            {t.hero.subheadline}
          </p>

          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar size={22} />
              <span>{t.hero.cta.consultation}</span>
            </button>

            <button
              onClick={openWhatsApp}
              className="group bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle size={22} className="text-green-600" />
              <span>{t.hero.cta.whatsapp}</span>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">10K+</div>
              <div className="text-slate-300 text-sm">{t.hero.stats.patients}</div>
            </div>
            <div className="text-center border-l border-r border-slate-700">
              <div className="text-4xl font-bold text-teal-400 mb-2">98%</div>
              <div className="text-slate-300 text-sm">{t.hero.stats.satisfaction}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">15+</div>
              <div className="text-slate-300 text-sm">{t.hero.stats.experience}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
