import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-400">{profile.title}</p>
            <p className="mt-4 text-xs text-slate-500">
              © {year} {profile.name}
              .
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Footer">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#blog" className="hover:text-white">
              Blog
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
            <a href="/resume.pdf" download className="hover:text-white">
              Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </nav>
        </div>
        <div className="mt-8 flex justify-center sm:justify-end">
          <a
            href="#top"
            className="text-xs font-medium text-slate-500 transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
