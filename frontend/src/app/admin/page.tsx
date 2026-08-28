"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Lock,
  LogOut,
  Mail,
  Phone,
  Building2,
  Calendar,
  Clock,
  Video,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Inbox,
  CalendarCheck,
  AlertCircle,
} from "lucide-react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  createdAt: string;
}

interface Consultation {
  _id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  platform: string;
  topic: string;
  notes: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

type Tab = "contacts" | "consultations";

const CONTACT_STATUSES: Contact["status"][] = ["new", "read", "replied", "archived"];
const CONSULTATION_STATUSES: Consultation["status"][] = [
  "pending",
  "confirmed",
  "completed",
  "cancelled",
];

const STATUS_COLORS: Record<string, string> = {
  new: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  pending: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  read: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  confirmed: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  replied: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  archived: "bg-white/10 text-white/50 border-white/15",
  cancelled: "bg-red-500/15 text-red-400 border-red-500/30",
};

const SESSION_KEY = "heroy_admin_key";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [tab, setTab] = useState<Tab>("contacts");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState<string>("");

  // Restore a saved key on mount and verify it still works
  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? window.sessionStorage.getItem(SESSION_KEY)
        : null;
    if (saved) {
      setAdminKey(saved);
    }
    setCheckingAuth(false);
  }, []);

  const fetchData = useCallback(
    async (currentTab: Tab, currentPage: number, status: string, key: string) => {
      setLoading(true);
      setError(null);

      const endpoint = currentTab === "contacts" ? "contact" : "consultation";
      const params = new URLSearchParams({
        page: String(currentPage),
        limit: "10",
      });
      if (status) params.set("status", status);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}?${params.toString()}`,
          {
            headers: { "x-admin-key": key },
          },
        );

        if (response.status === 401) {
          window.sessionStorage.removeItem(SESSION_KEY);
          setAdminKey("");
          setAuthError("Invalid or expired admin key. Please sign in again.");
          return;
        }

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to load data");
        }

        if (currentTab === "contacts") {
          setContacts(data.data);
        } else {
          setConsultations(data.data);
        }
        setPages(data.pages || 1);
        setTotal(data.total || 0);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (!adminKey) return;
    fetchData(tab, page, statusFilter, adminKey);
  }, [adminKey, tab, page, statusFilter, fetchData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyInput.trim()) return;
    setAuthError(null);
    window.sessionStorage.setItem(SESSION_KEY, keyInput.trim());
    setAdminKey(keyInput.trim());
    setKeyInput("");
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem(SESSION_KEY);
    setAdminKey("");
    setContacts([]);
    setConsultations([]);
  };

  const updateStatus = async (
    id: string,
    newStatus: string,
    kind: Tab,
  ) => {
    const endpoint = kind === "contacts" ? "contact" : "consultation";
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-admin-key": adminKey,
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to update status");
      }

      if (kind === "contacts") {
        setContacts((prev) =>
          prev.map((c) =>
            c._id === id ? { ...c, status: newStatus as Contact["status"] } : c,
          ),
        );
      } else {
        setConsultations((prev) =>
          prev.map((c) =>
            c._id === id
              ? { ...c, status: newStatus as Consultation["status"] }
              : c,
          ),
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update status");
    }
  };

  const switchTab = (newTab: Tab) => {
    setTab(newTab);
    setPage(1);
    setStatusFilter("");
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
              Enter your admin key to view contact submissions and
              consultation requests.
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

  const statuses = tab === "contacts" ? CONTACT_STATUSES : CONSULTATION_STATUSES;

  return (
    <div className="min-h-screen pt-8 pb-16" style={{ background: "#080810" }}>
      <div className="container-px mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-8 pt-4">
          <div>
            <h1 className="font-display font-bold text-2xl text-white">
              Admin Dashboard
            </h1>
            <p className="text-xs text-muted mt-1">
              {total} total {tab === "contacts" ? "submissions" : "requests"}
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="btn-outline !text-xs !py-2"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => switchTab("contacts")}
            className={`flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border transition-all ${
              tab === "contacts"
                ? "bg-grad-primary text-background border-transparent"
                : "border-border text-muted hover:text-white"
            }`}
          >
            <Inbox size={15} /> Contact Submissions
          </button>
          <button
            type="button"
            onClick={() => switchTab("consultations")}
            className={`flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border transition-all ${
              tab === "consultations"
                ? "bg-grad-primary text-background border-transparent"
                : "border-border text-muted hover:text-white"
            }`}
          >
            <CalendarCheck size={15} /> Consultations
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <button
            type="button"
            onClick={() => {
              setStatusFilter("");
              setPage(1);
            }}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              statusFilter === ""
                ? "bg-white/10 text-white border-white/20"
                : "border-border text-muted hover:text-white"
            }`}
          >
            All
          </button>
          {statuses.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setStatusFilter(s);
                setPage(1);
              }}
              className={`text-xs px-3 py-1.5 rounded-full border capitalize transition-all ${
                statusFilter === s
                  ? "bg-white/10 text-white border-white/20"
                  : "border-border text-muted hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
          <button
            type="button"
            onClick={() => fetchData(tab, page, statusFilter, adminKey)}
            className="ml-auto text-muted hover:text-white transition-colors"
            aria-label="Refresh"
          >
            <RefreshCw size={15} className={loading ? "animate-spin" : ""} />
          </button>
        </div>

        {error && (
          <div className="flex items-start gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 mb-6">
            <AlertCircle size={15} className="shrink-0 mt-0.5" />
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <RefreshCw size={22} className="text-primary animate-spin" />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {tab === "contacts" &&
              contacts.map((c) => (
                <div key={c._id} className="glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-display font-semibold text-white">{c.name}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Mail size={11} /> {c.email}
                        </span>
                        {c.phone && (
                          <span className="flex items-center gap-1">
                            <Phone size={11} /> {c.phone}
                          </span>
                        )}
                        {c.company && (
                          <span className="flex items-center gap-1">
                            <Building2 size={11} /> {c.company}
                          </span>
                        )}
                      </div>
                    </div>
                    <select
                      value={c.status}
                      onChange={(e) => updateStatus(c._id, e.target.value, "contacts")}
                      className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-full border cursor-pointer outline-none ${STATUS_COLORS[c.status]}`}
                    >
                      {CONTACT_STATUSES.map((s) => (
                        <option key={s} value={s} className="bg-surface text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed mb-3">{c.message}</p>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted">
                    <span>Service: {c.service}</span>
                    <span>&middot;</span>
                    <span>Budget: {c.budget}</span>
                    <span>&middot;</span>
                    <span>{formatDate(c.createdAt)}</span>
                  </div>
                </div>
              ))}

            {tab === "consultations" &&
              consultations.map((c) => (
                <div key={c._id} className="glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-display font-semibold text-white">{c.name}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Mail size={11} /> {c.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {c.date || "No date"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} /> {c.time || "No time"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Video size={11} /> {c.platform}
                        </span>
                      </div>
                    </div>
                    <select
                      value={c.status}
                      onChange={(e) => updateStatus(c._id, e.target.value, "consultations")}
                      className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-full border cursor-pointer outline-none ${STATUS_COLORS[c.status]}`}
                    >
                      {CONSULTATION_STATUSES.map((s) => (
                        <option key={s} value={s} className="bg-surface text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-xs font-semibold text-accent mb-1">{c.topic}</p>
                  {c.notes && (
                    <p className="text-sm text-white/80 leading-relaxed mb-3">{c.notes}</p>
                  )}
                  <p className="text-[11px] text-muted">{formatDate(c.createdAt)}</p>
                </div>
              ))}

            {!loading &&
              ((tab === "contacts" && contacts.length === 0) ||
                (tab === "consultations" && consultations.length === 0)) && (
                <p className="text-center text-muted py-16 text-sm">
                  Nothing here yet.
                </p>
              )}
          </div>
        )}

        {pages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white disabled:opacity-30 transition-opacity"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs text-muted">
              Page {page} of {pages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              disabled={page >= pages}
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white disabled:opacity-30 transition-opacity"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}