import { Award, Heart, Globe2, Shield } from 'lucide-react';
import { translations } from '../utils/translations';

interface AboutProps {
  language: string;
}

export default function About({ language }: AboutProps) {
  const t = translations[language];

  const features = [
    {
      icon: Award,
      title: t.about.features.certified.title,
      description: t.about.features.certified.description,
    },
    {
      icon: Heart,
      title: t.about.features.personalized.title,
      description: t.about.features.personalized.description,
    },
    {
      icon: Globe2,
      title: t.about.features.international.title,
      description: t.about.features.international.description,
    },
    {
      icon: Shield,
      title: t.about.features.standards.title,
      description: t.about.features.standards.description,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase">
                {t.about.badge}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {t.about.headline}
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>{t.about.paragraphs.first}</p>
              <p>{t.about.paragraphs.second}</p>
              <p>{t.about.paragraphs.third}</p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div
                className="h-64 rounded-2xl bg-cover bg-[center_20%] shadow-xl transform hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800')",
                }}
              ></div>
              <div
                className="h-64 rounded-2xl bg-cover bg-[center_20%] shadow-xl transform hover:scale-105 transition-transform duration-300 mt-12"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800')",
                }}
              ></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-teal-50 hover:to-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
