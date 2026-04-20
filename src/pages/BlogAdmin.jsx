import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit2, Trash2, ArrowLeft, Eye, LogOut, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';

const CATEGORIES = ['Insurance Claims', 'Litigations'];

const EMPTY = {
  title: '', slug: '', excerpt: '', body: '', category: '',
  featured_image: '', author: 'FairValue Analysis', publish_date: '',
  seo_title: '', meta_description: '', status: 'draft',
};

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function BlogAdmin() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [filterCat, setFilterCat] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const load = () => base44.entities.BlogPost.list('-created_date', 200).then(setPosts);

  useEffect(() => { load(); }, []);

  const openNew = () => {
    setForm({ ...EMPTY, publish_date: new Date().toISOString().split('T')[0] });
    setEditing('new');
  };
  const openEdit = (p) => { setForm({ ...p }); setEditing(p.id); };
  const cancel = () => { setEditing(null); setForm(EMPTY); };

  const set = (key, val) => setForm((f) => {
    const updated = { ...f, [key]: val };
    if (key === 'title' && editing === 'new') updated.slug = slugify(val);
    return updated;
  });

  const save = async (status) => {
    if (!form.title || !form.slug || !form.category) {
      alert('Please fill in Title, Slug, and Category before saving.');
      return;
    }
    setSaving(true);
    const data = { ...form, status };
    if (editing === 'new') {
      await base44.entities.BlogPost.create(data);
    } else {
      await base44.entities.BlogPost.update(editing, data);
    }
    await load();
    cancel();
    setSaving(false);
  };

  const remove = async (id) => {
    if (!confirm('Delete this post?')) return;
    await base44.entities.BlogPost.delete(id);
    await load();
  };

  const filtered = posts.filter((p) => {
    const catOk = filterCat === 'All' || p.category === filterCat;
    const statusOk = filterStatus === 'All' || p.status === filterStatus;
    return catOk && statusOk;
  });

  /* ── Form ── */
  if (editing !== null) return (
    <div className="min-h-screen bg-background py-10 px-5">
      <div className="max-w-3xl mx-auto">
        <button onClick={cancel} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to posts
        </button>
        <h1 className="text-2xl font-extrabold text-primary mb-8">
          {editing === 'new' ? 'New Post' : 'Edit Post'}
        </h1>

        <div className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">Title *</label>
            <Input value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Post title" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">Slug *</label>
            <Input value={form.slug} onChange={(e) => set('slug', e.target.value)} placeholder="url-friendly-slug" />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">Category *</label>
            <Select value={form.category} onValueChange={(v) => set('category', v)}>
              <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">Excerpt</label>
            <Textarea value={form.excerpt} onChange={(e) => set('excerpt', e.target.value)} rows={2} placeholder="Short summary shown on blog listing..." />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Body Content</label>
            <ReactQuill value={form.body} onChange={(v) => set('body', v)} className="bg-white rounded" theme="snow" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">Author</label>
              <Input value={form.author} onChange={(e) => set('author', e.target.value)} />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">Publish Date</label>
              <Input type="date" value={form.publish_date} onChange={(e) => set('publish_date', e.target.value)} />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">Featured Image URL</label>
            <Input value={form.featured_image} onChange={(e) => set('featured_image', e.target.value)} placeholder="https://..." />
          </div>

          <div className="border-t border-border pt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">SEO</p>
            <div className="space-y-3">
              <Input value={form.seo_title} onChange={(e) => set('seo_title', e.target.value)} placeholder="SEO Title (optional – defaults to post title)" />
              <Textarea value={form.meta_description} onChange={(e) => set('meta_description', e.target.value)} rows={2} placeholder="Meta description (optional)" />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={() => save('draft')} variant="outline" disabled={saving} className="font-semibold">
              {saving ? 'Saving…' : 'Save as Draft'}
            </Button>
            <Button onClick={() => save('published')} disabled={saving} className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
              {saving ? 'Publishing…' : 'Publish'}
            </Button>
            <Button onClick={cancel} variant="ghost" className="ml-auto">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );

  /* ── List ── */
  return (
    <div className="min-h-screen bg-background py-10 px-5">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 mb-1">
              <ArrowLeft className="w-3 h-3" /> Back to site
            </Link>
            <h1 className="text-2xl font-extrabold text-primary">Blog Posts</h1>
            {user && <p className="text-xs text-muted-foreground mt-0.5">{user.email}</p>}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={openNew} className="bg-primary hover:bg-primary/90 text-white font-semibold gap-2">
              <Plus className="w-4 h-4" /> New Post
            </Button>
            <Button variant="outline" onClick={() => base44.auth.logout('/')} className="gap-2 text-muted-foreground">
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative">
            <select
              value={filterCat}
              onChange={(e) => setFilterCat(e.target.value)}
              className="appearance-none border border-border rounded px-4 py-2 pr-8 text-sm font-medium text-primary bg-background focus:outline-none focus:border-secondary cursor-pointer"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none border border-border rounded px-4 py-2 pr-8 text-sm font-medium text-primary bg-background focus:outline-none focus:border-secondary cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          </div>
          <span className="text-xs text-muted-foreground self-center">{filtered.length} post{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground mb-4">{posts.length === 0 ? 'No posts yet.' : 'No posts match your filters.'}</p>
            {posts.length === 0 && <Button onClick={openNew} variant="outline">Create your first post</Button>}
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filtered.map((post) => (
              <div key={post.id} className="py-5 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-primary truncate">{post.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${post.status === 'published' ? 'bg-secondary/15 text-secondary' : 'bg-muted text-muted-foreground'}`}>
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    {post.category && <span>{post.category}</span>}
                    {post.publish_date && <span>{post.publish_date}</span>}
                    <span className="font-mono text-xs opacity-60">/{post.slug}</span>
                  </div>
                  {post.excerpt && <p className="mt-1.5 text-sm text-muted-foreground line-clamp-1">{post.excerpt}</p>}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {post.status === 'published' && (
                    <Link to={`/blog/${post.slug}`} target="_blank" className="p-2 rounded hover:bg-muted text-muted-foreground hover:text-primary transition-colors">
                      <Eye className="w-4 h-4" />
                    </Link>
                  )}
                  <button onClick={() => openEdit(post)} className="p-2 rounded hover:bg-muted text-muted-foreground hover:text-primary transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => remove(post.id)} className="p-2 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}