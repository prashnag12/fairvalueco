import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { blogs } from "@/data/blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find((item) => item.slug === slug);

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const claimBlogs = useMemo(() => {
    return sortedBlogs.filter((item) => item.category === "Insurance Claims");
  }, [sortedBlogs]);

  const legalBlogs = useMemo(() => {
    return sortedBlogs.filter((item) => item.category === "Litigations");
  }, [sortedBlogs]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!post) {
      document.title = "Blog post not found | FairValue Analysis";
      return;
    }

    document.title = post.seoTitle || `${post.title} | FairValue Analysis`;
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h1 className="text-3xl font-extrabold text-primary mb-3">
                Blog post not found
              </h1>
              <p className="text-muted-foreground">
                The article you are looking for does not exist.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const SidebarSection = ({ title, items }) => (
    <div className="mb-8">
      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 mb-3">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item) => {
          const isActive = item.slug === post.slug;

          return (
            <Link
              key={item.slug}
              to={`/blog/${item.slug}`}
              className={`block rounded-lg border px-3 py-3 transition ${
                isActive
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-200 hover:border-emerald-300 hover:bg-slate-50"
              }`}
            >
              <div
                className={`text-sm font-medium leading-6 ${
                  isActive ? "text-emerald-700" : "text-slate-800"
                }`}
              >
                {item.title}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                {new Date(item.date).toLocaleDateString("en-AU")}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-10">
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blogs
                </Link>

                <SidebarSection title="Claims" items={claimBlogs} />
                <SidebarSection title="Legal Disputes" items={legalBlogs} />
              </div>
            </aside>

            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <span className="text-xs font-semibold uppercase text-emerald-600">
                  {post.category === "Litigations"
                    ? "Legal Disputes"
                    : "Claims"}
                </span>

                <span className="text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-AU")}
                </span>
              </div>

              <h1 className="text-[36px] font-extrabold text-slate-900 leading-tight">
                {post.title}
              </h1>

              <p className="mt-5 text-[19px] text-gray-600">{post.excerpt}</p>

              <div
                className="
                  mt-10 text-[15.5px] leading-7 text-slate-700

                  [&_p]:mb-5

                  [&_h2]:text-[20px]
                  [&_h2]:font-semibold
                  [&_h2]:text-slate-900
                  [&_h2]:mt-10
                  [&_h2]:mb-3
                  [&_h2]:pb-1.5
                  [&_h2]:border-b
                  [&_h2]:border-emerald-300

                  [&_h3]:text-[17px]
                  [&_h3]:font-semibold
                  [&_h3]:text-slate-900
                  [&_h3]:mt-6
                  [&_h3]:mb-2

                  [&_ul]:pl-5
                  [&_ul]:list-disc
                  [&_ul]:my-5

                  [&_li]:mb-1.5

                  [&_strong]:font-medium
                  [&_strong]:text-slate-900

                  [&_a]:text-emerald-600
                  [&_a]:underline
                  [&_a]:underline-offset-4
                  hover:[&_a]:text-emerald-800
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 border p-6 rounded-xl">
                <p>
                  If you would like an independent review of your insurance
                  claim, legal dispute, or valuation matter, contact us at{" "}
                  <a
                    href="mailto:hello@fairvalueanalysis.com"
                    className="text-emerald-600 font-semibold"
                  >
                    hello@fairvalueanalysis.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}