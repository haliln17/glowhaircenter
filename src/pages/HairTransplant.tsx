import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import { Scissors } from 'lucide-react';

export default function HairTransplant() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];
  
  const service = t.services.items.hairTransplant;

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{service.title} | Glow Hair Center</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} | Glow Hair Center`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
            <Scissors size={32} className="text-white" />
          </div>
          {service.title}
        </h1>
        
        <div className="prose prose-lg prose-teal text-slate-600 mb-12">
          <p className="text-xl leading-relaxed">{service.description}</p>
          <p className="mt-4">
            {lang === 'tr' && "Saç ekimi, dökülme yaşanan bölgelere kalıcı ve doğal saç köklerinin nakledilmesi işlemidir. Uzman ekibimizle en yeni teknolojileri kullanarak hayalinizdeki görünüme kavuşmanızı sağlıyoruz."}
            {lang === 'en' && "Hair transplantation is the process of permanently transplanting natural hair follicles to areas experiencing hair loss. We help you achieve your dream look using the latest technologies with our expert team."}
            {lang === 'it' && "Il trapianto di capelli è il processo di trapianto permanente di follicoli piliferi naturali nelle aree colpite dalla caduta dei capelli. Ti aiutiamo a raggiungere il tuo aspetto da sogno utilizzando le ultime tecnologie con il nostro team di esperti."}
            {lang === 'ar' && "زراعة الشعر هي عملية زراعة بصيلات الشعر الطبيعية بشكل دائم في المناطق التي تعاني من تساقط الشعر. نساعدك على تحقيق المظهر الذي تحلم به باستخدام أحدث التقنيات مع فريقنا الخبير."}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {lang === 'tr' && "Uyguladığımız Teknikler"}
            {lang === 'en' && "Techniques We Use"}
            {lang === 'it' && "Tecniche Che Utilizziamo"}
            {lang === 'ar' && "التقنيات التي نستخدمها"}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.techniques.map((technique: string, index: number) => (
              <li key={index} className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                {technique}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
