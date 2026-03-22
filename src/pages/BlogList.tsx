import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { translations } from '../utils/translations';
import { blogPosts, BlogPostType } from '../data/blog';

export default function BlogList({ language }: { language: string }) {
  const t = translations[language] || translations['it'];
  const posts: BlogPostType[] = blogPosts[language] || blogPosts['it'];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Helmet>
        <title>{t.nav.blog} - Glow Hair Center</title>
        <meta name="description" content={`Read the latest articles from Glow Hair Center. ${t.tagline}`} />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">{t.nav.blog}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900 mb-4">{t.nav.blog}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/${language}/blog/${post.slug}`}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                  {new Date(post.date).toLocaleDateString(language)}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-teal-600 font-medium mt-auto group-hover:translate-x-2 transition-transform duration-300">
                  Read More
                  <svg className="w-5 h-5 ml-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
