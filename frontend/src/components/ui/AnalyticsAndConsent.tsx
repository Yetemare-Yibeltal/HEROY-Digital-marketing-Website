"use client";

import { useState, useEffect } from "react";
import CookieConsent, { getStoredConsent, type ConsentStatus } from "./CookieConsent";
import GoogleAnalytics from "./GoogleAnalytics";

export default function AnalyticsAndConsent() {
  const [consent, setConsent] = useState<ConsentStatus | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
  }, []);

  return (
    <>
      <GoogleAnalytics consented={consent === "accepted"} />
      <CookieConsent onChange={setConsent} />
    </>
  );
}