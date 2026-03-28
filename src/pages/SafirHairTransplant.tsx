import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import { Droplet } from 'lucide-react';

export default function SafirHairTransplant() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];
  
  const service = t.services.items.hairTransplant; 
  
  const title = lang === 'tr' ? "Safir FUE Saç Ekimi" : 
                lang === 'en' ? "Sapphire FUE Hair Transplant" : 
                lang === 'it' ? "Trapianto Capelli FUE Zaffiro" : "زراعة الشعر بتقنية السفير FUE";

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{title} | Glow Hair Center</title>
        <meta name="description" content={`Sapphire FUE - ${service.description}`} />
        <meta property="og:title" content={`${title} | Glow Hair Center`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
            <Droplet size={32} className="text-white" />
          </div>
          {title}
        </h1>
        
        <div className="prose prose-lg prose-teal text-slate-600 mb-12">
          <p className="text-xl leading-relaxed">
             {lang === 'tr' && "Safir FUE tekniği, kanal açma işleminde standart çelik uçlar yerine değerli bir maden olan safir kullanılarak üretilen özel uçların kullanıldığı son teknoloji bir yöntemdir. Safir uçlar sayesinde doku travması en aza iner ve daha sık bir ekim alanı açılır."}
             {lang === 'en' && "The Sapphire FUE technique uses blades made from a precious gemstone, sapphire, instead of standard steel blades to open microchannels. Sapphire blades minimize tissue trauma and allow for denser hair transplantation."}
             {lang === 'it' && "La tecnica FUE Zaffiro utilizza lame fatte di una pietra preziosa, lo zaffiro, invece delle normali lame in acciaio per aprire i microcanali. Le lame in zaffiro minimizzano i traumi del tessuto e permettono un trapianto di capelli più denso."}
             {lang === 'ar' && "تستخدم تقنية السفير FUE شفرات مصنوعة من حجر السفير الكريم بدلاً من الشفرات الفولاذية العادية لفتح القنوات الدقيقة. تقلل شفرات السفير من صدمة الأنسجة وتسمح بزراعة شعر أكثر كثافة."}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {lang === 'tr' && "Safir FUE Avantajları"}
            {lang === 'en' && "Sapphire FUE Advantages"}
            {lang === 'it' && "Vantaggi del FUE Zaffiro"}
            {lang === 'ar' && "مزايا تقنية السفير FUE"}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
               <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
               {lang === 'tr' ? "Minimum Doku Hasarı" : lang === 'en' ? "Minimal Tissue Damage" : lang === 'it' ? "Danno del Tessuto Minimo" : "تلف الأنسجة بأقل قدر"}
            </li>
            <li className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
               <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
               {lang === 'tr' ? "Daha Sık ve Estetik Ekim" : lang === 'en' ? "Denser and Aesthetic Transplant" : lang === 'it' ? "Trapianto Denso ed Estetico" : "زراعة أكثر كثافة وجمالاً"}
            </li>
            <li className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
               <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
               {lang === 'tr' ? "Pürüzsüz Cilt İyileşmesi" : lang === 'en' ? "Smooth Skin Recovery" : lang === 'it' ? "Recupero Rapido Della Pelle" : "تعافي ناعم للبشرة"}
            </li>
            <li className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
               <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
               {lang === 'tr' ? "Doğal Açı ile Yerleşim" : lang === 'en' ? "Placement at a Natural Angle" : lang === 'it' ? "Posizionamento ad Angolo Naturale" : "الزراعة بزاوية طبيعية"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
