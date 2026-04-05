import { aboutParagraphs, profile, skills } from '../data/content'

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          About me
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <img
                src={profile.profileImage}
                alt={`${profile.name}, ${profile.title}`}
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
              />
            </div>
          </div>

          <div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core skills
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {skills.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/40"
                  >
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {block.title}
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
