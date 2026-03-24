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

      let metaDescriptionTag = document.querySelector(
        'meta[name="description"]'
      );

      if (!metaDescriptionTag) {
        metaDescriptionTag = document.createElement("meta");
        metaDescriptionTag.setAttribute("name", "description");
        document.head.appendChild(metaDescriptionTag);
      }

      metaDescriptionTag.setAttribute(
        "content",
        "The requested blog article could not be found on FairValue Analysis."
      );
      return;
    }

    document.title = post.seoTitle || `${post.title} | FairValue Analysis`;

    const metaDescription = post.metaDescription || post.excerpt || "";
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
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h1 className="text-3xl font-extrabold text-primary mb-3">
                Blog post not found
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                The article you are looking for does not exist or may have been removed.
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

      <article className="py-16 sm:py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-5">
            {post.category && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            )}

            {post.date && (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          )}

          <div className="mt-10">
            <div
              className="
                prose prose-lg max-w-none
                prose-p:text-foreground
                prose-p:leading-8
                prose-p:mb-6

                prose-h2:text-2xl
                prose-h2:font-extrabold
                prose-h2:text-primary
                prose-h2:mt-12
                prose-h2:mb-5
                prose-h2:border-b
                prose-h2:border-emerald-300
                prose-h2:pb-2

                prose-h3:text-xl
                prose-h3:font-bold
                prose-h3:text-primary
                prose-h3:mt-8
                prose-h3:mb-4

                prose-ul:my-6
                prose-li:my-2
                prose-li:text-foreground

                prose-strong:text-primary
                prose-a:text-secondary
                hover:prose-a:text-primary
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-6">
            <p className="text-foreground leading-relaxed">
              If you would like an independent review of your insurance claim,
              contact us at{" "}
              <a
                href="mailto:hello@fairvalueanalysis.com"
                className="font-semibold text-secondary hover:text-primary transition-colors"
              >
                hello@fairvalueanalysis.com
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}