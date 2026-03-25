import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { blogs } from "@/data/blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find((item) => item.slug === slug);

  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!commentForm.name || !commentForm.email || !commentForm.comment) {
      setError("Please fill all fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xreyvyaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: commentForm.name,
          email: commentForm.email,
          phone: "",
          dispute_type: "blog_comment",
          estimated_claim_value: "",
          case_summary: `
Blog Comment Submission

Blog Title: ${post.title}
Blog URL: ${window.location.href}

Message:
${commentForm.comment}
          `,
        }),
      });

      if (response.ok) {
        setSuccess("Thanks — your message has been sent.");
        setCommentForm({
          name: "",
          email: "",
          comment: "",
        });
      } else {
        throw new Error();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="mb-8 inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <h1>Blog not found</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const SidebarSection = ({ title, items }) => (
    <div className="mb-8">
      <h3 className="text-sm font-bold uppercase text-slate-900 mb-3">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item) => {
          const isActive = item.slug === post.slug;

          return (
            <Link
              key={item.slug}
              to={`/blog/${item.slug}`}
              className={`block rounded-lg border px-3 py-3 ${
                isActive
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="text-sm font-medium">{item.title}</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
            
            {/* MAIN CONTENT */}
            <div className="max-w-3xl w-full">
              <h1 className="text-[36px] font-extrabold text-slate-900">
                {post.title}
              </h1>

              <p className="mt-4 text-gray-600">{post.excerpt}</p>

              <div
                className="
                  mt-10 text-[15.5px] leading-7 text-slate-700
                  [&_p]:mb-5
                  [&_h2]:text-[20px]
                  [&_h2]:font-semibold
                  [&_h2]:mt-8
                  [&_h2]:mb-3
                  [&_h2]:border-b
                  [&_h2]:border-emerald-300
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA */}
              <div className="mt-12 border p-6 rounded-xl">
                <p>
                  If you would like an independent review of your insurance claim,
                  dispute, or valuation matter, contact us at{" "}
                  <a
                    href="mailto:hello@fairvalueanalysis.com"
                    className="text-emerald-600 font-semibold"
                  >
                    hello@fairvalueanalysis.com
                  </a>
                </p>
              </div>

              {/* COMMENT FORM */}
              <div className="mt-10 border p-6 rounded-xl">
                <h2 className="text-lg font-semibold mb-2">
                  Have a question or comment?
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <input
                    name="name"
                    value={commentForm.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full border p-2 rounded"
                  />

                  <input
                    name="email"
                    value={commentForm.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                  />

                  <textarea
                    name="comment"
                    value={commentForm.comment}
                    onChange={handleChange}
                    placeholder="Your comment"
                    className="w-full border p-2 rounded"
                    rows={4}
                  />

                  {error && <p className="text-red-500">{error}</p>}
                  {success && <p className="text-green-600">{success}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-emerald-600 text-white px-4 py-2 rounded"
                  >
                    {submitting ? "Sending..." : "Send Comment"}
                  </button>
                </form>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-24">
              <SidebarSection title="Claims" items={claimBlogs} />
              <SidebarSection title="Legal Disputes" items={legalBlogs} />
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}