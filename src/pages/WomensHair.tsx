import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import { Users } from 'lucide-react';

export default function WomensHair() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];
  
  const service = t.services.items.womensHair;

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
            <Users size={32} className="text-white" />
          </div>
          {service.title}
        </h1>
        
        <div className="prose prose-lg prose-teal text-slate-600 mb-12">
          <p className="text-xl leading-relaxed">{service.description}</p>
          <p className="mt-4">
            {lang === 'tr' && "Kadınlarda saç dökülmesi, sık rastlanan ve genellikle saçların yoğunluğunu kaybetmesine veya saç çizgisinin seyrelmesine yol açan bir sorundur. Sunduğumuz tıraşsız ve dikişsiz FUE veya DHI nakil yöntemleri sayesinde kadınlar için hiç bir estetik bozulma olmadan tamamen doğal bir yoğunluk sağlıyoruz."}
            {lang === 'en' && "Hair loss in women is a common problem that usually causes hair to lose density or the hairline to thin. With our non-shaving and seamless FUE or DHI transplant methods, we provide a completely natural density for women without any aesthetic deterioration."}
            {lang === 'it' && "La perdita dei capelli nelle donne è un problema comune che di solito causa la perdita di densità dei capelli o l'assottigliamento dell'attaccatura dei capelli. Con i nostri metodi di trapianto FUE o DHI senza rasatura e senza cicatrici, forniamo una densità completamente naturale per le donne."}
            {lang === 'ar' && "يعتبر تساقط الشعر عند النساء مشكلة شائعة تؤدي عادة إلى فقدان كثافة الشعر أو ترقق خط الشعر. مع تقنيات زراعة الشعر FUE أو DHI بدون حلاقة أو شقوق، نوفر كثافة طبيعية تمامًا دون التنازل عن الجمالية."}
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
