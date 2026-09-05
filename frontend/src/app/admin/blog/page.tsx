"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Lock,
  ArrowLeft,
  Plus,
  Trash2,
  Pencil,
  X,
  Save,
  AlertCircle,
  RefreshCw,
  FileText,
} from "lucide-react";
import { apiUrl } from "@/lib/config";

interface Section {
  heading: string;
  body: string;
}

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  gradient: string;
  glow: string;
  sections: Section[];
  status: "draft" | "published";
  readTime?: string;
  updatedAt: string;
}

interface FormState {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string;
  author: string;
  authorRole: string;
  status: "draft" | "published";
  sections: Section[];
}

const SESSION_KEY = "heroy_admin_key";

const emptyForm: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  category: "",
  tags: "",
  author: "HEROY Team",
  authorRole: "",
  status: "draft",
  sections: [{ heading: "", body: "" }],
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AdminBlogPage() {
  const [adminKey, setAdminKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [view, setView] = useState<"list" | "form">("list");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? window.sessionStorage.getItem(SESSION_KEY)
        : null;
    if (saved) setAdminKey(saved);
    setCheckingAuth(false);
  }, []);

  const fetchPosts = useCallback(async (key: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiUrl("/api/blog/admin/all?limit=100"), {
        headers: { "x-admin-key": key },
      });

      if (response.status === 401) {
        window.sessionStorage.removeItem(SESSION_KEY);
        setAdminKey("");
        setAuthError("Invalid or expired admin key. Please sign in again.");
        return;
      }

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to load posts");

      setPosts(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load posts");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (adminKey) fetchPosts(adminKey);
  }, [adminKey, fetchPosts]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyInput.trim()) return;
    setAuthError(null);
    window.sessionStorage.setItem(SESSION_KEY, keyInput.trim());
    setAdminKey(keyInput.trim());
    setKeyInput("");
  };

  const openCreateForm = () => {
    setForm(emptyForm);
    setSlugTouched(false);
    setEditingId(null);
    setSaveError(null);
    setView("form");
  };

  const openEditForm = (post: Post) => {
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      category: post.category,
      tags: post.tags.join(", "),
      author: post.author,
      authorRole: post.authorRole,
      status: post.status,
      sections: post.sections.length > 0 ? post.sections : [{ heading: "", body: "" }],
    });
    setSlugTouched(true);
    setEditingId(post._id);
    setSaveError(null);
    setView("form");
  };

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  };

  const updateSection = (index: number, field: keyof Section, value: string) => {
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.map((s, i) =>
        i === index ? { ...s, [field]: value } : s,
      ),
    }));
  };

  const addSection = () => {
    setForm((prev) => ({
      ...prev,
      sections: [...prev.sections, { heading: "", body: "" }],
    }));
  };

  const removeSection = (index: number) => {
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveError(null);

    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim(),
      excerpt: form.excerpt.trim(),
      category: form.category.trim(),
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 10),
      author: form.author.trim(),
      authorRole: form.authorRole.trim(),
      status: form.status,
      sections: form.sections
        .map((s) => ({ heading: s.heading.trim(), body: s.body.trim() }))
        .filter((s) => s.heading && s.body),
    };

    if (payload.sections.length === 0) {
      setSaveError("Add at least one section with a heading and body.");
      setSaving(false);
      return;
    }

    try {
      const url = editingId
        ? apiUrl(`/api/blog/admin/${editingId}`)
        : apiUrl("/api/blog/admin");
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save post");
      }

      await fetchPosts(adminKey);
      setView("list");
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to save post");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this post permanently? This cannot be undone.")) {
      return;
    }
    setDeletingId(id);
    try {
      const response = await fetch(apiUrl(`/api/blog/admin/${id}`), {
        method: "DELETE",
        headers: { "x-admin-key": adminKey },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to delete post");
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete post");
    } finally {
      setDeletingId(null);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080810" }}>
        <RefreshCw size={24} className="text-primary animate-spin" />
      </div>
    );
  }

  if (!adminKey) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "#080810" }}
      >
        <form
          onSubmit={handleLogin}
          className="glass-strong rounded-2xl p-8 w-full max-w-sm flex flex-col gap-5"
        >
          <div className="flex flex-col items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-grad-primary flex items-center justify-center">
              <Lock size={20} className="text-background" />
            </div>
            <h1 className="font-display font-bold text-lg text-white">
              Admin Access
            </h1>
            <p className="text-xs text-muted text-center">
              Enter your admin key to manage blog posts.
            </p>
          </div>

          {authError && (
            <div className="flex items-start gap-2 text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-3 py-2.5">
              <AlertCircle size={13} className="shrink-0 mt-0.5" />
              {authError}
            </div>
          )}

          <input
            type="password"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            placeholder="Admin key"
            autoFocus
            className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
          />

          <button type="submit" className="btn-primary justify-center">
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16" style={{ background: "#080810" }}>
      <div className="container-px mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8 pt-4">
          <div>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-xs text-muted hover:text-white mb-2 transition-colors"
            >
              <ArrowLeft size={12} /> Back to Dashboard
            </Link>
            <h1 className="font-display font-bold text-2xl text-white">
              Blog CMS
            </h1>
            <p className="text-xs text-muted mt-1">{posts.length} total posts</p>
          </div>

          {view === "list" && (
            <button type="button" onClick={openCreateForm} className="btn-primary !text-xs !py-2.5">
              <Plus size={14} /> New Post
            </button>
          )}
        </div>

        {error && (
          <div className="flex items-start gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 mb-6">
            <AlertCircle size={15} className="shrink-0 mt-0.5" />
            {error}
          </div>
        )}

        {view === "list" ? (
          loading ? (
            <div className="flex justify-center py-20">
              <RefreshCw size={22} className="text-primary animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <div className="glass rounded-2xl p-16 text-center">
              <FileText size={28} className="text-muted mx-auto mb-3" />
              <p className="text-muted text-sm mb-4">No posts yet.</p>
              <button type="button" onClick={openCreateForm} className="btn-primary !text-xs !py-2.5 mx-auto">
                <Plus size={14} /> Write your first post
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="glass rounded-2xl p-5 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${
                          post.status === "published"
                            ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                            : "bg-amber-500/15 text-amber-400 border-amber-500/30"
                        }`}
                      >
                        {post.status}
                      </span>
                      <span className="text-[10px] text-muted">{post.category}</span>
                    </div>
                    <p className="font-display font-semibold text-white truncate">
                      {post.title}
                    </p>
                    <p className="text-xs text-muted mt-0.5">/blog/{post.slug}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => openEditForm(post)}
                      aria-label={`Edit ${post.title}`}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted hover:text-white transition-colors"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(post._id)}
                      disabled={deletingId === post._id}
                      aria-label={`Delete ${post.title}`}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted hover:text-red-400 transition-colors disabled:opacity-50"
                    >
                      {deletingId === post._id ? (
                        <RefreshCw size={14} className="animate-spin" />
                      ) : (
                        <Trash2 size={14} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <form onSubmit={handleSave} className="glass-strong rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-xl text-white">
                {editingId ? "Edit Post" : "New Post"}
              </h2>
              <button
                type="button"
                onClick={() => setView("list")}
                aria-label="Cancel"
                className="text-muted hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {saveError && (
              <div className="flex items-start gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                <AlertCircle size={15} className="shrink-0 mt-0.5" />
                {saveError}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wide">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                Slug * <span className="normal-case text-muted/60">(URL: /blog/{form.slug || "..."})</span>
              </label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setForm({ ...form, slug: slugify(e.target.value) });
                }}
                required
                className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary transition-colors font-mono"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wide">Excerpt *</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                required
                rows={2}
                maxLength={300}
                className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wide">Category *</label>
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  required
                  placeholder="e.g. SEO, Web Development"
                  className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wide">Tags (comma separated)</label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                  placeholder="SEO, Content Strategy"
                  className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wide">Author</label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wide">Author Role</label>
                <input
                  type="text"
                  value={form.authorRole}
                  onChange={(e) => setForm({ ...form, authorRole: e.target.value })}
                  placeholder="e.g. SEO & Digital Marketing"
                  className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wide">Status</label>
              <div className="flex gap-2">
                {(["draft", "published"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm({ ...form, status: s })}
                    className={`text-xs px-4 py-2 rounded-full border capitalize transition-all ${
                      form.status === s
                        ? "bg-grad-primary text-background border-transparent"
                        : "border-border text-muted hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 border-t border-border">
              <div className="flex items-center justify-between pt-4">
                <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                  Content Sections *
                </label>
                <button
                  type="button"
                  onClick={addSection}
                  className="text-xs text-accent hover:text-white flex items-center gap-1 transition-colors"
                >
                  <Plus size={12} /> Add Section
                </button>
              </div>

              {form.sections.map((section, i) => (
                <div key={i} className="glass rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-muted">
                      Section {i + 1}
                    </span>
                    {form.sections.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSection(i)}
                        aria-label={`Remove section ${i + 1}`}
                        className="text-muted hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={section.heading}
                    onChange={(e) => updateSection(i, "heading", e.target.value)}
                    placeholder="Section heading"
                    className="bg-white/5 border border-border rounded-lg px-3 py-2 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors"
                  />
                  <textarea
                    value={section.body}
                    onChange={(e) => updateSection(i, "body", e.target.value)}
                    placeholder="Section body text"
                    rows={4}
                    className="bg-white/5 border border-border rounded-lg px-3 py-2 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={saving}
              className="btn-primary justify-center disabled:opacity-60 mt-2"
            >
              {saving ? "Saving..." : editingId ? "Save Changes" : "Create Post"}
              {!saving && <Save size={16} />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}