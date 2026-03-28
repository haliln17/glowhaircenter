import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import Services from '../components/Services';

export default function ServicesPage() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>{t.nav.services} | Glow Hair Center</title>
        <meta name="description" content={t.services.subheadline} />
        <meta property="og:title" content={`${t.nav.services} | Glow Hair Center`} />
      </Helmet>

      {/* Hero-like Title for the Page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          {t.nav.services}
        </h1>
      </div>

      <Services language={lang} />
    </div>
  );
}
