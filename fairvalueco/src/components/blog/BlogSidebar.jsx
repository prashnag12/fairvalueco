import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['Insurance Claims', 'Litigations'];

function groupByMonth(items) {
  const map = {};
  [...items]
    .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
    .forEach((p) => {
      const label = p.publish_date
        ? new Date(p.publish_date).toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })
        : 'Undated';
      if (!map[label]) map[label] = [];
      map[label].push(p);
    });
  return map;
}

function Group({ title, items, currentSlug }) {
  const [open, setOpen] = useState(true);
  if (!items.length) return null;
  const byMonth = groupByMonth(items);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-secondary mb-2 pb-2 border-b border-border"
      >
        {title}
        <span className="text-muted-foreground text-base leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="space-y-4 mt-3">
          {Object.entries(byMonth).map(([month, monthPosts]) => (
            <div key={month}>
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{month}</p>
              <ul className="space-y-2 pl-2 border-l border-border">
                {monthPosts.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/blog/${p.slug}`}
                      className={`block text-sm leading-snug hover:text-secondary transition-colors ${
                        p.slug === currentSlug ? 'text-secondary font-semibold' : 'text-muted-foreground'
                      }`}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BlogSidebar({ posts, currentSlug }) {
  const byCat = CATEGORIES.map((cat) => ({
    cat,
    items: posts.filter((p) => p.category === cat),
  }));
  const other = posts.filter((p) => !CATEGORIES.includes(p.category));

  return (
    <div className="bg-muted border border-border rounded-lg p-5 space-y-6">
      <p className="text-sm font-extrabold text-primary">All Articles</p>
      {byCat.map(({ cat, items }) => (
        <Group key={cat} title={cat} items={items} currentSlug={currentSlug} />
      ))}

    </div>
  );
}