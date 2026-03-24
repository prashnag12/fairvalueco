import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { blogs } from "@/data/blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find((item) => item.slug === slug);

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition mt-6 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-xs font-semibold uppercase text-emerald-600">
              {post.category}
            </span>

            <span className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString("en-AU")}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            {post.excerpt}
          </p>

          {/* 🔥 FIXED CONTENT RENDER */}
          <div
            className="
              mt-10 text-[17px] leading-8 text-slate-700

              [&_p]:mb-6

              [&_h2]:text-2xl
              [&_h2]:font-extrabold
              [&_h2]:text-slate-900
              [&_h2]:mt-12
              [&_h2]:mb-4
              [&_h2]:pb-2
              [&_h2]:border-b
              [&_h2]:border-emerald-400

              [&_ul]:pl-6
              [&_ul]:list-disc
              [&_ul]:my-6

              [&_li]:mb-2

              [&_strong]:font-semibold
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 border p-6 rounded-xl">
            <p>
              If you would like an independent review of your insurance claim,
              contact us at{" "}
              <a
                href="mailto:hello@fairvalueanalysis.com"
                className="text-emerald-600 font-semibold"
              >
                hello@fairvalueanalysis.com
              </a>
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}