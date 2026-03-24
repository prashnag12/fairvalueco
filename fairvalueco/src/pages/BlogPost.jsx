import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "@/data/blogs";

const formatDisplayDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogs.find((item) => item.slug === slug);

  useEffect(() => {
    if (!post) {
      document.title = "Blog post not found | FairValue Analysis";

      const metaDescriptionTag = document.querySelector(
        'meta[name="description"]'
      );

      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute(
          "content",
          "The requested blog article could not be found on FairValue Analysis."
        );
      }

      return;
    }

    document.title =
      post.seoTitle || `${post.title} | FairValue Analysis`;

    const metaDescription =
      post.metaDescription || post.excerpt || "";

    let metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement("meta");
      metaDescriptionTag.setAttribute("name", "description");
      document.head.appendChild(metaDescriptionTag);
    }

    metaDescriptionTag.setAttribute("content", metaDescription);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            to="/blog"
            className="inline-flex text-sm font-medium text-slate-700 hover:text-slate-900 mb-8"
          >
            ← Back to Blog
          </Link>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              Blog post not found
            </h1>
            <p className="text-slate-600 leading-7">
              The article you are looking for does not exist or may have been removed.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex text-sm font-medium text-slate-700 hover:text-slate-900 mb-8"
        >
          ← Back to Blog
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formatDisplayDate(post.date)}</span>
          <span>•</span>
          <span>{post.category}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-slate-600 leading-8 mb-10">
          {post.excerpt}
        </p>

        <div
          className="prose prose-slate max-w-none prose-p:leading-8 prose-p:text-slate-700 prose-headings:text-slate-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-800 leading-7">
            If you would like an independent review of your insurance claim,
            contact us at{" "}
            <a
              href="mailto:hello@fairvalueanalysis.com"
              className="font-medium text-slate-900 underline underline-offset-4"
            >
              hello@fairvalueanalysis.com
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}