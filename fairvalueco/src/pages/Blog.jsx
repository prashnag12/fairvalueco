import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    base44.entities.BlogPost.filter({ status: 'published' }, '-publish_date', 50)
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary py-16 sm:py-24 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Insights &amp; Analysis</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            FairValue Analysis Blog
          </h1>
          <p className="mt-4 text-base text-white/60 max-w-xl mx-auto">
            Independent insights on insurance claims, case valuation, and how to protect your interests.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="py-16 sm:py-24 px-5">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No posts published yet.</p>
          ) : (
            <div className="divide-y divide-border">
              {posts.map((post) => (
                <article key={post.id} className="py-10 group">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {post.category && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    )}
                    {post.publish_date && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publish_date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary leading-snug group-hover:text-secondary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {post.excerpt && (
                    <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  )}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}