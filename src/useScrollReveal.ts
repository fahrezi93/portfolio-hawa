import { useEffect, useRef } from 'react'

const revealTargets = [
  '.about > *',
  '.section-heading',
  '.experience-row',
  '.story',
  '.organizations > .section-side',
  '.organization',
  '.certificate-row',
  '.contact-inner > *',
].join(', ')

export function useScrollReveal() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const main = mainRef.current
    if (!main || typeof IntersectionObserver === 'undefined' || typeof main.animate !== 'function') return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const revealed = new WeakSet<HTMLElement>()
    const animations = new Map<HTMLElement, Animation>()
    let observer: IntersectionObserver | undefined

    const stop = () => {
      observer?.disconnect()
      animations.forEach(animation => animation.cancel())
      animations.clear()
    }

    const observe = () => {
      stop()
      if (preference.matches) return

      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const element = entry.target as HTMLElement
          observer?.unobserve(element)
          revealed.add(element)
          if (preference.matches || element.contains(document.activeElement)) continue

          // Animate only on entry; the normal DOM/CSS always keeps content visible.
          // Unsupported or failed animation therefore never hides information.
          try {
            const animation = element.animate(
              [
                { opacity: 0, transform: 'translateY(12px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              { duration: 240, easing: 'ease-out' },
            )
            animations.set(element, animation)
            const forget = () => animations.delete(element)
            animation.onfinish = forget
            animation.oncancel = forget
          } catch {
            // Leave the element in its original, readable state.
          }
        }
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

      main.querySelectorAll<HTMLElement>(revealTargets).forEach(element => {
        if (!revealed.has(element)) observer?.observe(element)
      })
    }

    // Keyboard navigation must never land on a temporarily transparent link.
    const showFocusedContent = (event: FocusEvent) => {
      const focused = event.target
      if (!(focused instanceof Node)) return
      animations.forEach((animation, element) => {
        if (element.contains(focused)) animation.cancel()
      })
    }

    observe()
    preference.addEventListener('change', observe)
    main.addEventListener('focusin', showFocusedContent)
    return () => {
      stop()
      preference.removeEventListener('change', observe)
      main.removeEventListener('focusin', showFocusedContent)
    }
  }, [])

  return mainRef
}
