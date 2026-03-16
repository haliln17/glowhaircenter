import { Globe, CheckCircle, MessageCircle, Award, Users, Shield } from 'lucide-react';
import { translations } from '../utils/translations';

interface WhyChooseUsProps {
  language: string;
}

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const t = translations[language];

  const reasons = [
    {
      icon: Globe,
      title: t.whyChooseUs.reasons.international.title,
      description: t.whyChooseUs.reasons.international.description,
    },
    {
      icon: CheckCircle,
      title: t.whyChooseUs.reasons.results.title,
      description: t.whyChooseUs.reasons.results.description,
    },
    {
      icon: Shield,
      title: t.whyChooseUs.reasons.standards.title,
      description: t.whyChooseUs.reasons.standards.description,
    },
    {
      icon: Users,
      title: t.whyChooseUs.reasons.multilingual.title,
      description: t.whyChooseUs.reasons.multilingual.description,
    },
    {
      icon: MessageCircle,
      title: t.whyChooseUs.reasons.support.title,
      description: t.whyChooseUs.reasons.support.description,
    },
    {
      icon: Award,
      title: t.whyChooseUs.reasons.experience.title,
      description: t.whyChooseUs.reasons.experience.description,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-400 font-semibold text-sm tracking-wider uppercase">
              {t.whyChooseUs.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t.whyChooseUs.headline}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.whyChooseUs.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-slate-300 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <p className="text-2xl font-semibold mb-4">
              {t.whyChooseUs.guarantee}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-teal-500/20 text-teal-400 px-6 py-3 rounded-full font-semibold border border-teal-500/30">
                English
              </span>
              <span className="bg-teal-500/20 text-teal-400 px-6 py-3 rounded-full font-semibold border border-teal-500/30">
                العربية
              </span>
              <span className="bg-teal-500/20 text-teal-400 px-6 py-3 rounded-full font-semibold border border-teal-500/30">
                Türkçe
              </span>
              <span className="bg-teal-500/20 text-teal-400 px-6 py-3 rounded-full font-semibold border border-teal-500/30">
                Italiano
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
