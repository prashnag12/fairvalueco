import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { ArrowRight, Calendar, Tag, ChevronDown } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import BlogSidebar from '../components/blog/BlogSidebar';

const CATEGORIES = ['Insurance Claims', 'Litigations'];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [monthFilter, setMonthFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    base44.entities.BlogPost.filter({ status: 'published' }, '-publish_date', 100)
      .then((data) => setPosts(data || []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const monthOptions = useMemo(() => {
    const seen = new Set();
    const months = [];
    [...posts]
      .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
      .forEach((p) => {
        if (!p.publish_date) return;
        const label = new Date(p.publish_date).toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
        if (!seen.has(label)) { seen.add(label); months.push(label); }
      });
    return months;
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const catOk = categoryFilter === 'All' || p.category === categoryFilter;
      const monthOk = monthFilter === 'All' || (p.publish_date &&
        new Date(p.publish_date).toLocaleDateString('en-AU', { month: 'long', year: 'numeric' }) === monthFilter);
      return catOk && monthOk;
    });
  }, [posts, categoryFilter, monthFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary pt-24 pb-16 sm:pt-32 sm:pb-20 px-5">
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

      {/* Content */}
      <div className="py-14 px-5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Main */}
          <div className="flex-1 min-w-0">

            {/* Filters */}
            {!loading && !error && posts.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="relative">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="appearance-none border border-border rounded px-4 py-2 pr-8 text-sm font-medium text-primary bg-background focus:outline-none focus:border-secondary cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                </div>
                <div className="relative">
                  <select
                    value={monthFilter}
                    onChange={(e) => setMonthFilter(e.target.value)}
                    className="appearance-none border border-border rounded px-4 py-2 pr-8 text-sm font-medium text-primary bg-background focus:outline-none focus:border-secondary cursor-pointer"
                  >
                    <option value="All">All Months</option>
                    {monthOptions.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                </div>
                {(categoryFilter !== 'All' || monthFilter !== 'All') && (
                  <button
                    onClick={() => { setCategoryFilter('All'); setMonthFilter('All'); }}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-2 border border-border rounded"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
              </div>
            ) : error ? (
              <div className="text-center py-20 border border-dashed border-border rounded-lg">
                <p className="text-muted-foreground">Unable to load posts. Please try again later.</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-border rounded-lg">
                <p className="text-muted-foreground">
                  {posts.length === 0 ? 'No posts published yet.' : 'No posts match your filters.'}
                </p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {filtered.map((post) => (
                  <article key={post.id} className="py-10 group">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
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

          {/* Sidebar */}
          {!loading && posts.length > 0 && (
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-24">
                <BlogSidebar posts={posts} currentSlug={null} />
              </div>
            </aside>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}