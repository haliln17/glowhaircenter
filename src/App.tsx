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
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

// New SEO Pages
import HairTransplant from './pages/HairTransplant';
import DhiHairTransplant from './pages/DhiHairTransplant';
import SafirHairTransplant from './pages/SafirHairTransplant';
import BeardTransplant from './pages/BeardTransplant';
import WomensHair from './pages/WomensHair';
import PrpTreatment from './pages/PrpTreatment';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';

const SUPPORTED_LANGUAGES = ['it', 'en', 'ar', 'tr'];

function MainLayout({ children }: { children: React.ReactNode }) {
  const { lang } = useParams();

  if (!lang || !SUPPORTED_LANGUAGES.includes(lang)) {
    return <Navigate to="/it/" replace />;
  }

  const t = translations[lang] || translations['it'];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
        <title>Glow Hair Center {t.tagline ? `- ${t.tagline}` : ''}</title>
      </Helmet>
      <Header language={lang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer language={lang} />
      <WhatsAppButton />
    </div>
  );
}

function MainApp() {
  const { lang = 'it' } = useParams();
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
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Hero language={lang} />
      <About language={lang} />
      <Services language={lang} />
      <Gallery language={lang} />
      <WhyChooseUs language={lang} />
      <Testimonials language={lang} />
      <Contact language={lang} />
    </>
  );
}

function BlogListWrapper() {
  const { lang = 'it' } = useParams();
  return <BlogList language={lang} />;
}

function BlogPostWrapper() {
  const { lang = 'it' } = useParams();
  return <BlogPost language={lang} />;
}

function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<MainLayout><MainApp /></MainLayout>} />
      
      {/* Dynamic SEO Routes - Global English standard */}
      <Route path="/:lang/hair-transplant" element={<MainLayout><HairTransplant /></MainLayout>} />
      <Route path="/:lang/dhi-hair-transplant" element={<MainLayout><DhiHairTransplant /></MainLayout>} />
      <Route path="/:lang/sapphire-hair-transplant" element={<MainLayout><SafirHairTransplant /></MainLayout>} />
      <Route path="/:lang/beard-transplant" element={<MainLayout><BeardTransplant /></MainLayout>} />
      <Route path="/:lang/womens-hair-transplant" element={<MainLayout><WomensHair /></MainLayout>} />
      <Route path="/:lang/prp-treatment" element={<MainLayout><PrpTreatment /></MainLayout>} />
      <Route path="/:lang/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      <Route path="/:lang/about" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/:lang/services" element={<MainLayout><ServicesPage /></MainLayout>} />
      <Route path="/:lang/gallery" element={<MainLayout><GalleryPage /></MainLayout>} />
      <Route path="/:lang/testimonials" element={<MainLayout><TestimonialsPage /></MainLayout>} />

      <Route path="/:lang/blog" element={<MainLayout><BlogListWrapper /></MainLayout>} />
      <Route path="/:lang/blog/:slug" element={<MainLayout><BlogPostWrapper /></MainLayout>} />
      
      <Route path="*" element={<Navigate to="/it/" replace />} />
    </Routes>
  );
}

export default App;
