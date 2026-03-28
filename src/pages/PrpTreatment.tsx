import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import { Droplet } from 'lucide-react';

export default function PrpTreatment() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];
  
  const service = t.services.items.prpStemCell;

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
            <Droplet size={32} className="text-white" />
          </div>
          {service.title}
        </h1>
        
        <div className="prose prose-lg prose-teal text-slate-600 mb-12">
          <p className="text-xl leading-relaxed">{service.description}</p>
          <p className="mt-4">
            {lang === 'tr' && "PRP (Platelet Rich Plasma) ve Kök Hücre tedavileri, kendi kanınızdan elde edilen zengin onarıcı hücrelerin dökülme yaşanan saçlı deriye enjekte edilmesi ile gerçekleştirilir. Saç ekimi sonuçlarını maksimize etmek ve mevcut saçların daha kalın ve canlı çıkmasını desteklemek için idealdir."}
            {lang === 'en' && "PRP (Platelet Rich Plasma) and Stem Cell treatments are performed by injecting rich regenerative cells taken from your own blood into the scalp area where hair loss occurs. It is ideal for maximizing hair transplant results and supporting existing hair to grow thicker and more vibrant."}
            {lang === 'it' && "I trattamenti PRP (Plasma Ricco di Piastrine) e con Cellule Staminali vengono eseguiti iniettando cellule rigenerative prelevate dal proprio sangue nel cuoio capelluto dove si verifica la caduta dei capelli. È ideale per massimizzare i risultati del trapianto di capelli e rafforzare i capelli esistenti."}
            {lang === 'ar' && "يتم إجراء علاجات PRP (البلازما الغنية بالصفائح الدموية) والخلايا الجذعية عن طريق حقن خلايا تجديدية غنية مستخرجة من دمك في منطقة فروة الرأس حيث يحدث تساقط الشعر. إنه مثالي لتعظيم نتائج زراعة الشعر ودعم الشعر الموجود على النمو بشكل أسمك وأكثر حيوية."}
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
