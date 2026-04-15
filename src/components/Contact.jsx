import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../data/content'

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'sushantbhatta7@gmail.com',
          from_name: formData.name,
          from_email: formData.name, // Will be replaced by EmailJS with reply-to
          phone: formData.phone || 'Not provided',
          message: formData.message
        }
      )
      setSent(true)
      setFormData({ name: '', phone: '', message: '' })
      // Reset success message after 5 seconds
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error('EmailJS error:', err)
    } finally {
      setLoading(false)
    }
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[var(--color-accent)] py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto sm:px-8"
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
            {sent && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                {error}
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
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl text-[var(--color-accent)]" />
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
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl text-[var(--color-accent)]" />
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
