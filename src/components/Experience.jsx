import { experience } from '../data/content'

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/30 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="experience-heading"
          className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Roles where I owned requirements, alignment, and delivery support.
        </p>

        <ol className="mt-12 space-y-6">
          {experience.map((job, index) => (
            <li key={job.company + job.period}>
              <article className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                      {job.company}
                      {job.type && (
                        <span className="ml-2 text-xs font-normal text-slate-500 dark:text-slate-400">
                          {job.type}
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-base font-medium text-[var(--color-accent)]">{job.role}</p>
                  </div>
                  <time
                    className="shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400"
                    dateTime={job.period}
                  >
                    {job.period}
                  </time>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {job.summary}
                </p>
                {index < experience.length - 1 && (
                  <span className="sr-only">Next role below</span>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
