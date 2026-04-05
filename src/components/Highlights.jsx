import { highlights } from '../data/content'

export default function Highlights() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-900/50"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p
          id="highlights-heading"
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
        >
          At a glance
        </p>
        <h2 className="mt-2 text-center font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Career highlights
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-950"
            >
              <p className="font-display text-3xl font-bold text-[var(--color-accent)] sm:text-4xl">
                {h.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{h.label}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{h.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
