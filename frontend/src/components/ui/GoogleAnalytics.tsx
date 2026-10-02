"use client";

import Script from "next/script";

// Only renders (and only loads the GA script) once the visitor has
// accepted cookies, and only if a measurement ID is actually configured.
// If NEXT_PUBLIC_GA_MEASUREMENT_ID is unset, this renders nothing —
// so there's no broken analytics call before you have a real GA
// property set up.
export default function GoogleAnalytics({ consented }: { consented: boolean }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!consented || !measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}