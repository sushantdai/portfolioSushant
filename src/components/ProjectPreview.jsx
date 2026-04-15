import { useState, useEffect } from 'react'

export default function ProjectPreview({ isOpen, onClose, project }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      // Simulate loading time for PDF viewer
      const timer = setTimeout(() => setIsLoading(false), 800)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black p-0">
      <div className="relative w-full h-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-slate-50 px-6 py-4 dark:bg-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white truncate">{project.title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-300 transition flex-shrink-0"
            aria-label="Close preview"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-800">
          {isLoading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-[var(--color-accent)] dark:border-slate-600"></div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Loading project...</p>
              </div>
            </div>
          )}
          <iframe
            src={`/${project.pdf}`}
            className={`w-full h-full border-none ${isLoading ? 'hidden' : ''}`}
            title={project.title}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Footer with Download Button */}
        <div className="flex items-center justify-end gap-3 bg-slate-50 px-6 py-4 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700 transition"
          >
            Close
          </button>
          <a
            href={`/${project.pdf}`}
            download={project.pdf}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-accent)] text-sm font-semibold text-white hover:bg-[var(--color-accent-hover)] transition shadow-md"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}
