import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import { Sparkles } from 'lucide-react';

export default function DhiHairTransplant() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];
  
  const service = t.services.items.hairTransplant; // using base hair transplant data
  
  const title = lang === 'tr' ? "DHI Saç Ekimi" : 
                lang === 'en' ? "DHI Hair Transplant" : 
                lang === 'it' ? "Trapianto Capelli DHI" : "زراعة الشعر بتقنية DHI";

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{title} | Glow Hair Center</title>
        <meta name="description" content={`DHI - ${service.description}`} />
        <meta property="og:title" content={`${title} | Glow Hair Center`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
            <Sparkles size={32} className="text-white" />
          </div>
          {title}
        </h1>
        
        <div className="prose prose-lg prose-teal text-slate-600 mb-12">
          <p className="text-xl leading-relaxed">
             {lang === 'tr' && "DHI (Direct Hair Implantation) tekniği, saç köklerinin özel bir kalem (Choi pen) yardımıyla kanal açılmadan doğrudan ekim alanına yerleştirilmesidir. Kesit izi bırakmayan bu yöntemle yoğun ve doğal bir görünüm elde edilir."}
             {lang === 'en' && "The DHI (Direct Hair Implantation) technique involves placing hair follicles directly into the transplant area using a special pen (Choi pen) without opening canals. This method leaves no incision marks, achieving a dense and natural look."}
             {lang === 'it' && "La tecnica DHI (Direct Hair Implantation) prevede il posizionamento dei follicoli piliferi direttamente nell'area del trapianto utilizzando una penna speciale (Choi pen) senza aprire canali. Questo metodo non lascia segni di incisione e permette di ottenere un aspetto denso e naturale."}
             {lang === 'ar' && "تتضمن تقنية DHI (Direct Hair Implantation) وضع بصيلات الشعر مباشرة في منطقة الزراعة باستخدام قلم خاص (Choi pen) دون فتح قنوات. هذه الطريقة لا تترك أي علامات شق وتوفر مظهرًا كثيفًا وطبيعيًا."}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {lang === 'tr' && "Avantajları"}
            {lang === 'en' && "Advantages"}
            {lang === 'it' && "Vantaggi"}
            {lang === 'ar' && "المزايا"}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
               <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
               {lang === 'tr' ? "Daha Sık Ekime Uygun" : lang === 'en' ? "Suitable for Denser Packing" : lang === 'it' ? "Adatto per Un Trapianto Più Denso" : "مناسبة للزراعة الأكثر كثافة"}
            </li>
            <li className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
               <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
               {lang === 'tr' ? "Hızlı İyileşme Süresi" : lang === 'en' ? "Fast Recovery Time" : lang === 'it' ? "Tempi di Recupero Rapidi" : "وقت تعافي سريع"}
            </li>
            <li className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
               <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
               {lang === 'tr' ? "Kesi ve İz Olmaması" : lang === 'en' ? "No Incisions or Scars" : lang === 'it' ? "Nessuna Incisione o Cicatrice" : "لا يوجد شقوق أو ندبات"}
            </li>
            <li className="flex items-center gap-3 bg-teal-50 px-5 py-4 rounded-xl text-teal-900 font-semibold">
               <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
               {lang === 'tr' ? "Tıraşsız Ekime Yatkinlik" : lang === 'en' ? "Enables Unshaven Transplant" : lang === 'it' ? "Permette Il Trapianto Senza Rasatura" : "يسمح بالزراعة بدون حلاقة"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
