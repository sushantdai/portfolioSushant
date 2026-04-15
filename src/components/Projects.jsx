import { useState } from 'react'
import { projects } from '../data/content'
import ProjectPreview from './ProjectPreview'

export default function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null)
  const [previewProject, setPreviewProject] = useState(null)

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
                
                {/* Preview and Download Buttons */}
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setPreviewProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-accent)]/10 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Preview
                  </button>
                  <a
                    href={`/${project.pdf}`}
                    download={project.pdf}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      
      {/* Project Preview Modal */}
      <ProjectPreview isOpen={!!previewProject} onClose={() => setPreviewProject(null)} project={previewProject} />
    </section>
  )
}
