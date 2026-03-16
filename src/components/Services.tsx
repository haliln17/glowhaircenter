import { Scissors, Sparkles, Droplet, Users } from 'lucide-react';
import { translations } from '../utils/translations';

interface ServicesProps {
  language: string;
}

export default function Services({ language }: ServicesProps) {
  const t = translations[language];

  const services = [
    {
      icon: Scissors,
      title: t.services.items.hairTransplant.title,
      description: t.services.items.hairTransplant.description,
      techniques: t.services.items.hairTransplant.techniques,
      image: '/images/services/hairtrans.jpg',
    },
    {
      icon: Sparkles,
      title: t.services.items.beardTransplant.title,
      description: t.services.items.beardTransplant.description,
      techniques: t.services.items.beardTransplant.techniques,
      image: '/images/services/beard.jpg',
    },
    {
      icon: Droplet,
      title: t.services.items.prpStemCell.title,
      description: t.services.items.prpStemCell.description,
      techniques: t.services.items.prpStemCell.techniques,
      image: '/images/services/prp.jpg',
    },
    {
      icon: Users,
      title: t.services.items.womensHair.title,
      description: t.services.items.womensHair.description,
      techniques: t.services.items.womensHair.techniques,
      image: '/images/services/women.png',
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
