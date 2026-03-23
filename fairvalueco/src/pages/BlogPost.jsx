import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import BlogCommentForm from '../components/blog/BlogCommentForm';
import BlogSidebar from '../components/blog/BlogSidebar';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    base44.entities.BlogPost.filter({ status: 'published' }, '-publish_date', 100)
      .then((allPublished) => {
        setAllPosts(allPublished);
        const results = allPublished.filter((p) => p.slug === slug);
        if (!results || results.length === 0) { setNotFound(true); return; }
        const p = results[0];
        setPost(p);
        if (p.category) {
          setRelated(allPublished.filter((r) => r.category === p.category && r.id !== p.id).slice(0, 3));
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
    </div>
  );

  if (notFound || !post) return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
      <p className="text-lg font-semibold text-primary">Post not found.</p>
      <Link to="/blog" className="text-sm text-secondary hover:underline">← Back to Blog</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="py-10 px-5">
        <div className="max-w-6xl mx-auto">

          {/* Back */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

            {/* Main Content */}
            <div className="flex-1 min-w-0">

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                {post.category && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
                    <Tag className="w-3 h-3" />{post.category}
                  </span>
                )}
                {post.publish_date && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publish_date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                )}
                {post.author && (
                  <span className="text-xs text-muted-foreground">by {post.author}</span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-4">
                  {post.excerpt}
                </p>
              )}

              {/* Tags */}
              {post.category && (
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full border border-secondary/20">
                    <Tag className="w-3 h-3" />{post.category}
                  </span>
                </div>
              )}

              {/* Featured Image */}
              {post.featured_image && (
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="mt-8 w-full rounded-lg object-cover max-h-72"
                />
              )}

              {/* Body */}
              <div
                className="mt-10 blog-content"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />

              {/* Comment Form */}
              <BlogCommentForm postTitle={post.title} />

              {/* CTA */}
              <div className="mt-12 bg-primary rounded-lg p-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Get Independent Advice</p>
                <p className="text-lg sm:text-xl font-extrabold text-white leading-snug max-w-xl mx-auto">
                  If you would like an independent review of your insurance claim valuation, get in touch with FairValue Analysis.
                </p>
                <Button
                  asChild
                  className="mt-6 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded px-8"
                >
                  <a href="/#contact">Request a Free Assessment</a>
                </Button>
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-lg font-extrabold text-primary mb-6">Related Articles</h3>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {related.map((r) => (
                      <Link key={r.id} to={`/blog/${r.slug}`} className="group block border border-border rounded-lg p-5 hover:border-secondary transition-colors">
                        {r.category && <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">{r.category}</p>}
                        <h4 className="text-sm font-bold text-primary leading-snug group-hover:text-secondary transition-colors">{r.title}</h4>
                        {r.excerpt && <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{r.excerpt}</p>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>{/* end main content */}

            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-24">
                <BlogSidebar posts={allPosts} currentSlug={slug} />
              </div>
            </aside>

          </div>{/* end flex row */}
        </div>
      </div>

      <Footer />
    </div>
  );
}