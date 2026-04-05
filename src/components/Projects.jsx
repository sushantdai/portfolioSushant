import { useState } from 'react'
import { projects } from '../data/content'

export default function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id))
  }

  const formatDescription = (text) => {
    // Split by period and filter out empty strings
    const bullets = text.split('.').filter(item => item.trim().length > 0)
    return bullets.map(item => item.trim())
  }

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Selected work samples—link each card to case studies or repos when ready.
        </p>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isExpanded = expandedProjectId === project.id
            const descriptionBullets = formatDescription(project.description)
            const excerptBullets = formatDescription(project.excerpt)
            return (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[var(--color-accent)]/40 hover:shadow-md dark:border-slate-700 dark:bg-slate-950 dark:hover:border-[var(--color-accent)]/50"
              >
                <span className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-sky-950/60 dark:text-sky-200">
                  {project.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 list-disc list-inside">
                  {(isExpanded ? descriptionBullets : excerptBullets).map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="mt-4 inline-flex text-sm font-semibold text-[var(--color-accent)] transition hover:underline focus:outline-none"
                >
                  {isExpanded ? 'Show less ↑' : 'View details →'}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
