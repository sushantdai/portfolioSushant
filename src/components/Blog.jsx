import { blogPosts } from '../data/content'

export default function Blog() {
  return (
    <section
      id="blog"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/30 sm:py-24"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="blog-heading"
          className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Blog
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.title}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <time
                  className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
                  dateTime={post.date}
                >
                  {post.date}
                </time>
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  className="mt-4 text-sm font-semibold text-[var(--color-accent)] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </article>
            </li>
          ))}
        </ul>

        {/* Read all blog link */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://sushantbhatta7.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-[var(--color-accent)] bg-white px-6 py-3 font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white dark:bg-slate-950 dark:hover:bg-[var(--color-accent)]"
          >
            Read all blogs
            <svg
              className="h-5 w-5 transition group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
