import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "@/data/blogs";

const formatDisplayDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const getMonthLabel = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    month: "long",
    year: "numeric",
  });
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const categories = ["Insurance Claims", "Litigations"];

  const months = useMemo(() => {
    return [...new Set(sortedBlogs.map((post) => getMonthLabel(post.date)))];
  }, [sortedBlogs]);

  const filteredBlogs = useMemo(() => {
    return sortedBlogs.filter((post) => {
      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;
      const matchesMonth =
        !selectedMonth || getMonthLabel(post.date) === selectedMonth;

      return matchesCategory && matchesMonth;
    });
  }, [sortedBlogs, selectedCategory, selectedMonth]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedMonth("");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.18em] uppercase text-slate-500 mb-4">
              FairValue Analysis
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Claim insights, case analysis, and dispute commentary
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our blog covers insurance claims and litigation-related matters with
              a focus on valuation logic, dispute patterns, and practical review
              considerations.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 self-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900 mb-5">
                Filter posts
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="">All categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Month
                  </label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="">All months</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={clearFilters}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-700 hover:bg-slate-50 transition"
                >
                  Clear filters
                </button>
              </div>
            </div>
          </aside>

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Latest posts
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredBlogs.length} post{filteredBlogs.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No matching posts
                </h3>
                <p className="text-slate-600 leading-7">
                  There are no blog posts for the filters currently selected.
                  Clear the filters to view all articles.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredBlogs.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-500">
                        {formatDisplayDate(post.date)}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 leading-tight mb-4">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-slate-700 transition"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 leading-8 text-[15px] md:text-base mb-6 max-w-3xl">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700 transition"
                    >
                      Read article
                      <span className="ml-2">→</span>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}