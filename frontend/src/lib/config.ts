/**
 * Centralized backend API base URL.
 *
 * Previously every form (contact, consultation, chat widget, admin
 * dashboard) read `process.env.NEXT_PUBLIC_API_URL` directly and
 * inline, with no fallback and no validation. If this env var was ever
 * left unset in a production deployment (a common mistake — it's easy
 * to forget to add NEXT_PUBLIC_ vars in a hosting dashboard), every
 * request would silently go to the literal string "undefined/api/..."
 * and fail with a confusing network error and no diagnostic.
 *
 * This module centralizes the value, warns loudly in the browser
 * console during development if it's missing, and gives every caller
 * one place to import from instead of five copies of the same logic.
 */

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!rawApiUrl && process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line no-console
  console.warn(
    "[config] NEXT_PUBLIC_API_URL is not set. Forms and the chat widget " +
      "will not be able to reach the backend. Check your .env.local file " +
      "(see .env.example).",
  );
}

/**
 * Base URL of the backend API, with the trailing slash stripped so
 * callers can safely do `${API_URL}/api/contact` without risking a
 * double slash.
 */
export const API_URL = (rawApiUrl || "http://localhost:5001").replace(
  /\/+$/,
  "",
);

/**
 * Builds a full API endpoint URL from a path that starts with /api/...
 */
export function apiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_URL}${normalizedPath}`;
}
