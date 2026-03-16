import { Star, Quote } from 'lucide-react';
import { translations } from '../utils/translations';

interface TestimonialsProps {
  language: string;
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language];

  const testimonials = [
    {
      name: 'James Wilson',
      country: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: t.testimonials.reviews[0]?.text || 'The entire experience was exceptional. From the first consultation to the final result, everything was handled professionally. My confidence is completely restored.',
      rating: 5,
    },
    {
      name: 'Mohammed Al-Rashid',
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: t.testimonials.reviews[1]?.text || 'Outstanding service! The team spoke Arabic fluently and made me feel at home. The results look incredibly natural. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Alessandro Romano',
      country: 'Italy',
      flag: '🇮🇹',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: t.testimonials.reviews[2]?.text || 'I flew from Milan to Albania specifically for this clinic. Best decision ever! The quality of care and results exceeded European standards.',
      rating: 5,
    },
    {
      name: 'Kemal Yilmaz',
      country: 'Turkey',
      flag: '🇹🇷',
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: t.testimonials.reviews[3]?.text || 'Very professional team with excellent results. The follow-up care via WhatsApp was incredibly helpful during recovery. Thank you!',
      rating: 5,
    },
    {
      name: 'Michael Anderson',
      country: 'USA',
      flag: '🇺🇸',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: t.testimonials.reviews[4]?.text || 'I researched clinics worldwide. Glow Hair Center offered the best combination of expertise, technology, and value. Results speak for themselves.',
      rating: 5,
    },
    {
      name: 'Omar Hassan',
      country: 'UAE',
      flag: '🇦🇪',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: t.testimonials.reviews[5]?.text || 'Life-changing experience. The doctors are true artists. My hairline looks perfectly natural and matches my facial features perfectly.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase">
              {t.testimonials.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {t.testimonials.headline}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.testimonials.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 text-teal-200 opacity-50" size={48} />

              <div className="flex items-center space-x-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-teal-100"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                ></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{testimonial.flag}</span>
                    <span className="text-slate-600 text-sm">{testimonial.country}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-teal-400 text-teal-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed relative z-10">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-slate-50 to-white rounded-2xl px-12 py-8 shadow-lg">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">4.9/5</div>
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-teal-400 text-teal-400" />
                ))}
              </div>
              <div className="text-slate-600 text-sm">{t.testimonials.averageRating}</div>
            </div>
            <div className="h-16 w-px bg-slate-300"></div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">10,000+</div>
              <div className="text-slate-600">{t.testimonials.happyPatients}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
