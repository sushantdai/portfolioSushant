import { useState } from 'react'
import { profile } from '../data/content'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Contact
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          For opportunities, collaborations, or questions—reach out. Wire this form to Formspree, Resend, or your API when you deploy.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950 sm:p-8"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-[var(--color-accent)]/0 transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Phone (optional)
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                className="mt-1 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-[var(--color-accent)] py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-accent-hover)] sm:w-auto sm:px-8"
            >
              Send message
            </button>
            {sent && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status">
                Thanks—connect the form to a backend to deliver this for real. Demo only.
              </p>
            )}
          </form>

          <div>
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              Let&apos;s connect
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              I typically respond within one business day. Whether it&apos;s a full-time role, a short consulting
              engagement, or a quick question—feel free to reach out directly.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[var(--color-accent)]/40 dark:border-slate-700 dark:bg-slate-900/50"
                >
                  <span className="text-xl" aria-hidden>
                    ✉️
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <p className="font-medium text-[var(--color-accent)]">{profile.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[var(--color-accent)]/40 dark:border-slate-700 dark:bg-slate-900/50"
                >
                  <span className="text-xl" aria-hidden>
                    💼
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      LinkedIn
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white">Open profile</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
