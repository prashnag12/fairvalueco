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

  const categories = useMemo(() => {
    return ["Insurance Claims", "Litigations"];
  }, []);

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
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Blog
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl leading-7">
            Commentary, claim analysis, and general insights across insurance
            claims and related disputes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-10">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
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
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              <option value="">All months</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={clearFilters}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 hover:bg-slate-50 transition"
            >
              Clear filters
            </button>
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
            No blog posts match the selected filters.
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBlogs.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-3">
                  <span>{formatDisplayDate(post.date)}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-slate-700 transition"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-600 leading-7 mb-4">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex text-sm font-medium text-slate-900 hover:text-slate-700"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}