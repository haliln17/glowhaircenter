import { Scissors, Sparkles, Droplet, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../utils/translations';

interface ServicesProps {
  language: string;
}

export default function Services({ language }: ServicesProps) {
  const t = translations[language] || translations['it'];

  const services = [
    {
      icon: Scissors,
      title: t.services.items.hairTransplant.title,
      description: t.services.items.hairTransplant.description,
      techniques: t.services.items.hairTransplant.techniques,
      image: '/images/services/hairtrans.jpg',
      link: `/${language}/hair-transplant`,
    },
    {
      icon: Sparkles,
      title: t.services.items.beardTransplant.title,
      description: t.services.items.beardTransplant.description,
      techniques: t.services.items.beardTransplant.techniques,
      image: '/images/services/beard.jpg',
      link: `/${language}/beard-transplant`,
    },
    {
      icon: Droplet,
      title: t.services.items.prpStemCell.title,
      description: t.services.items.prpStemCell.description,
      techniques: t.services.items.prpStemCell.techniques,
      image: '/images/services/prp.jpg',
      link: `/${language}/prp-treatment`,
    },
    {
      icon: Users,
      title: t.services.items.womensHair.title,
      description: t.services.items.womensHair.description,
      techniques: t.services.items.womensHair.techniques,
      image: '/images/services/women.png',
      link: `/${language}/womens-hair-transplant`,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase">
              {t.services.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {t.services.headline}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.services.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to={`/${language}/dhi-hair-transplant`} className="bg-white border-2 border-teal-500 text-teal-600 px-6 py-2 rounded-full font-medium hover:bg-teal-50 transition">
              {language === 'tr' ? 'DHI Saç Ekimi' : language === 'en' ? 'DHI Hair Transplant' : language === 'it' ? 'Trapianto DHI' : 'زراعة DHI'}
            </Link>
            <Link to={`/${language}/sapphire-hair-transplant`} className="bg-white border-2 border-teal-500 text-teal-600 px-6 py-2 rounded-full font-medium hover:bg-teal-50 transition">
              {language === 'tr' ? 'Safir FUE Saç Ekimi' : language === 'en' ? 'Sapphire FUE' : language === 'it' ? 'FUE Zaffiro' : 'زراعة السفير FUE'}
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                to={service.link}
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex space-x-4 items-center w-full pr-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div>
                        <span className="inline-block bg-teal-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          {language === 'tr' ? 'Detayları İncele →' : language === 'en' ? 'View Details →' : language === 'it' ? 'Vedi Dettagli →' : 'عرض التفاصيل ←'}
                        </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.techniques.map((technique: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-200"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
