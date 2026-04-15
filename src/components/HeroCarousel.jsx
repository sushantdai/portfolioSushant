import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { carouselSlides, profile } from '../data/content'
import ResumePreview from './ResumePreview'

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5200, stopOnInteraction: false }),
  ])
  const [selected, setSelected] = useState(0)
  const [showResumePreview, setShowResumePreview] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollTo = (i) => emblaApi && emblaApi.scrollTo(i)

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-900"
      aria-label="Introduction"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselSlides.map((slide, i) => (
            <div key={slide.src} className="relative min-w-0 shrink-0 grow-0 basis-full">
              <div className="relative aspect-[21/9] min-h-[280px] sm:min-h-[320px] md:aspect-[21/8] md:min-h-[360px]">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40"
                  aria-hidden
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="pointer-events-auto mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-3xl text-xl font-semibold text-[var(--color-accent)] sm:text-2xl lg:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {profile.tagline}
          </p>
          <p className="mt-6 text-sm font-medium text-slate-300 sm:text-base">
            📍 {profile.location}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => setShowResumePreview(true)}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              Preview resume
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:bottom-6">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === selected ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selected}
          />
        ))}
      </div>

      <ResumePreview isOpen={showResumePreview} onClose={() => setShowResumePreview(false)} />
    </section>
  )
}
