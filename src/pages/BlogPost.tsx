import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { translations } from '../utils/translations';
import { blogPosts } from '../data/blog';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost({ language }: { language: string }) {
  const { slug } = useParams<{ slug: string }>();
  const t = translations[language] || translations['it'];
  
  const postRaw = blogPosts.find(p => p.slug === slug);

  if (!postRaw) {
    return <Navigate to={`/${language}/blog`} replace />;
  }

  const translatedPost = postRaw.translations[language] || postRaw.translations['it'];

  // Replace \n\n with <br><br> or <p> tags for proper rendering in dangerouslySetInnerHTML
  const formattedContent = translatedPost.content.replace(/\n\n/g, '<br/><br/>').replace(/\n/g, '<br/>');

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <Helmet>
        <title>{translatedPost.title} - Glow Hair Center</title>
        <meta name="description" content={translatedPost.excerpt} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
        <Link 
          to={`/${language}/blog`}
          className="inline-flex items-center text-slate-600 hover:text-teal-600 mb-10 text-sm font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform rtl:rotate-180 rtl:ml-2 rtl:mr-0 rtl:group-hover:translate-x-1" />
          <span>{t.nav.blog || 'Blog'}</span>
        </Link>

        <article>
          <div className="mb-10 text-center">
            <div className="text-teal-600 font-semibold mb-4 text-sm tracking-wide">
              <time dateTime={postRaw.date}>
                {new Date(postRaw.date).toLocaleDateString(language, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              {translatedPost.title}
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto rounded-full"></div>
          </div>
          
          <div 
            className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
        </article>
      </div>
    </div>
  );
}
