import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import Contact from '../components/Contact';

export default function ContactPage() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <Helmet>
        <title>{t.nav.contact} | Glow Hair Center</title>
        <meta name="description" content={t.contact.subheadline} />
        <meta property="og:title" content={`${t.nav.contact} | Glow Hair Center`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center">
          {t.nav.contact}
        </h1>
        <p className="mt-4 text-xl text-slate-600 text-center max-w-2xl mx-auto">
          {t.contact.subheadline}
        </p>
      </div>

      <Contact language={lang} />
    </div>
  );
}
