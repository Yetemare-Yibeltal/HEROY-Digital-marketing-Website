export default function Loading() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      role="status"
      aria-label="Loading page"
    >
      <div
        aria-hidden="true"
        className="glow-orb w-96 h-96 bg-primary/10 -top-20 -right-20"
      />

      <div
        aria-hidden="true"
        className="glow-orb w-80 h-80 bg-accent/10 bottom-0 -left-20"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative flex flex-col items-center text-center px-6">
        <div className="relative flex items-center justify-center w-16 h-16 mb-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "#7c5cff",
              borderRightColor: "#7c5cff",
              animation: "spin 0.9s linear infinite",
            }}
          />

          <div
            aria-hidden="true"
            className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20"
          />
        </div>

        <div className="space-y-2">
          <p className="font-display text-base font-semibold tracking-wide text-white">
            HEROY
          </p>

          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            Preparing your experience
          </p>
        </div>

        <div
          aria-hidden="true"
          className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      </div>

      <span className="sr-only">
        Please wait while the page is loading.
      </span>
    </div>
  );
}