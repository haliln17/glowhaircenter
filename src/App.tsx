import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { translations } from './utils/translations';

const SUPPORTED_LANGUAGES = ['it', 'en', 'ar', 'tr'];

function MainApp() {
  const { lang } = useParams();

  if (!lang || !SUPPORTED_LANGUAGES.includes(lang)) {
    return <Navigate to="/it/" replace />;
  }

  const t = translations[lang] || translations['it'];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq?.questions?.map((q: any) => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    })) || []
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
        <title>Glow Hair Center {t.tagline ? `- ${t.tagline}` : ''}</title>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header language={lang} />
      <Hero language={lang} />
      <About language={lang} />
      <Services language={lang} />
      <Gallery language={lang} />
      <WhyChooseUs language={lang} />
      <Testimonials language={lang} />
      <Contact language={lang} />
      <Footer language={lang} />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:lang/*" element={<MainApp />} />
      <Route path="*" element={<Navigate to="/it/" replace />} />
    </Routes>
  );
}

export default App;
