import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import About from '../components/About';

export default function AboutPage() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>{t.nav.about} | Glow Hair Center</title>
        <meta name="description" content={t.about.paragraphs.first} />
        <meta property="og:title" content={`${t.nav.about} | Glow Hair Center`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          {t.nav.about}
        </h1>
      </div>

      <About language={lang} />
    </div>
  );
}
