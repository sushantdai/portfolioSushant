import { researchBackground } from '../data/content'

export default function ResearchBackground() {
  const { intro, experience, references } = researchBackground

  return (
    <section
      id="research-background"
      className="scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="research-background-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="research-background-heading"
          className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Applied Psychology & Research Methods
        </h2>

        <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
          {intro.map((p, i) => (
            <p key={i} className="text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {experience.map((block) => (
            <div
              key={block.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/40"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {block.title}
              </p>
              {block.period && (
                <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
                  {block.period}
                </p>
              )}
              <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Selected writing
          </h3>
          <ul className="mt-4 space-y-2">
            {references.map((ref) => (
              <li key={ref.href}>
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 dark:text-slate-300 dark:decoration-slate-600 dark:hover:text-white"
                >
                  {ref.title}
                </a>
                {ref.note && (
                  <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">
                    {ref.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs italic text-slate-400 dark:text-slate-500">
          Details of individual client work are withheld out of respect for client confidentiality.
          The summaries above reflect the scope and methods of the practicum, not individual case content.
        </p>
      </div>
    </section>
  )
}
