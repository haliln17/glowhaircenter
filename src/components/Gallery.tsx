import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { translations } from '../utils/translations';

interface GalleryProps {
  language: string;
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformations = [
    {
      before: '/images/transformations/pair_1_before.jpeg',
      after: '/images/transformations/pair_1_after.jpeg',
      name: 'David M.',
      country: 'USA',
      flag: '🇺🇸',
      testimonial: t.gallery.transformations[0]?.testimonial || 'Amazing results! The team was professional and caring throughout the entire process.',
    },
    {
      before: '/images/transformations/pair_2_before.jpeg',
      after: '/images/transformations/pair_2_after.jpeg',
      name: 'Ahmed K.',
      country: 'UAE',
      flag: '🇦🇪',
      testimonial: t.gallery.transformations[1]?.testimonial || 'Life-changing experience. The natural results exceeded my expectations.',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const current = transformations[currentIndex];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase">
              {t.gallery.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {t.gallery.headline}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.gallery.subheadline}
          </p>
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg z-10">
                  {t.gallery.before}
                </div>
                <div
                  className="h-80 rounded-2xl bg-cover shadow-xl"
                  style={{ 
                    backgroundImage: `url('${current.before}')`,
                    backgroundPosition: 'center 20%'
                  }}
                ></div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg z-10">
                  {t.gallery.after}
                </div>
                <div
                  className="h-80 rounded-2xl bg-cover shadow-xl"
                  style={{ 
                    backgroundImage: `url('${current.after}')`,
                    backgroundPosition: 'center 20%'
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl">{current.flag}</span>
                    <h4 className="text-xl font-bold text-slate-900">{current.name}</h4>
                  </div>
                  <p className="text-slate-600">{current.country}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-teal-400 text-teal-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 italic leading-relaxed">"{current.testimonial}"</p>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl hover:bg-teal-50 transition-colors flex items-center justify-center group"
          >
            <ChevronLeft className="text-slate-700 group-hover:text-teal-600" size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl hover:bg-teal-50 transition-colors flex items-center justify-center group"
          >
            <ChevronRight className="text-slate-700 group-hover:text-teal-600" size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-teal-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Process Photos Section */}
        <div className="mt-32 max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.gallery.process?.title || 'Moments During Our Procedures'}
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.gallery.process?.description || 'A glimpse into our state-of-the-art facility and the care we provide during every step of your hair restoration journey.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/process/process-2.jpeg')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/process/process-1.jpeg')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/process/process-3.jpeg')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
