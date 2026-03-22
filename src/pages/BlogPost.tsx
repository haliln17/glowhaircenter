import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { translations } from '../utils/translations';
import { blogPosts, BlogPostType } from '../data/blog';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost({ language }: { language: string }) {
  const { slug } = useParams<{ slug: string }>();
  const t = translations[language] || translations['it'];
  
  const posts: BlogPostType[] = blogPosts[language] || blogPosts['it'];
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to={`/${language}/blog`} replace />;
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Helmet>
        <title>{post.title} - Glow Hair Center</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
        <Link 
          to={`/${language}/blog`}
          className="inline-flex items-center text-slate-600 hover:text-teal-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform rtl:rotate-180 rtl:ml-2 rtl:mr-0 rtl:group-hover:translate-x-1" />
          <span>{t.nav.blog || 'Blog'}</span>
        </Link>

        <article className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
          <div className="relative h-64 md:h-[400px] w-full">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center text-slate-500 text-sm mb-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(language, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span className="mx-3">•</span>
              <span className="text-teal-600 font-medium">Glow Hair Center</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div 
              className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
