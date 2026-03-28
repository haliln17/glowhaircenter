import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { translations } from '../utils/translations';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  const { lang = 'it' } = useParams();
  const t = translations[lang] || translations['it'];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>{t.nav.gallery} | Glow Hair Center</title>
        <meta name="description" content={t.gallery.subheadline} />
        <meta property="og:title" content={`${t.nav.gallery} | Glow Hair Center`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          {t.nav.gallery}
        </h1>
      </div>

      <Gallery language={lang} />
    </div>
  );
}
