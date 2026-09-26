export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/10 -top-20 -right-20" />
      <div
        className="glow-orb w-80 h-80 bg-accent/10 bottom-0 -left-20"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative flex flex-col items-center gap-5 text-center">
        <div
          className="relative w-14 h-14"
          role="status"
          aria-label="Loading"
        >
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />

          <div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "#7c5cff",
              borderRightColor: "#7c5cff",
              animation: "spin 0.8s linear infinite",
            }}
          />

          <div className="absolute inset-3 rounded-full bg-primary/10 blur-sm" />
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-white">
            HEROY
          </p>

          <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted">
            Loading experience
          </p>
        </div>
      </div>
    </div>
  );
}