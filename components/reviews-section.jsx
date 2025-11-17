"use client"

import { useEffect, useState, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Medical Student",
    content:
      "The training programs offered by DocDent have been invaluable in preparing me for a career in healthcare. I feel confident and well-equipped to tackle real-world medical challenges.",
    image: "/review1.jpg",
  },
  {
    name: "Emily White",
    role: "Medical Student",
    content:
      "DocDent's approach to training is exceptional. The augmented reality simulations have significantly enhanced my clinical skills and decision-making abilities.",
    image: "/review2.jpg",
  },
  {
    name: "Daniel Brown",
    role: "Medical Student",
    content:
      "I am grateful for the opportunity to work shifts in NHS hospitals through DocDent. It has provided me with a unique learning experience and a deeper understanding of the medical profession.",
    image: "/review3.jpg",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // mobileInnerIndex: 0 => show image view, 1 => show content view
  const [mobileInnerIndex, setMobileInnerIndex] = useState(0)

  const [isMobile, setIsMobile] = useState(false)
  const autoRef = useRef(null)

  // touch tracking
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const lastTouchTime = useRef(0)

  // breakpoint for mobile (you can change to 768)
  const MOBILE_BREAKPOINT = 768

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // autoplay only on desktop (keeps behavior similar to your original)
  useEffect(() => {
    if (isMobile) return // no autoplay for mobile (so user can control with swipe)
    autoRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(autoRef.current)
  }, [isMobile])

  // Reset inner index when testimonial changes
  useEffect(() => {
    setMobileInnerIndex(0)
  }, [currentIndex])

  // Touch handlers
  function handleTouchStart(e) {
    const t = e.touches[0]
    touchStartX.current = t.clientX
    touchStartY.current = t.clientY
    lastTouchTime.current = Date.now()
  }

  function handleTouchEnd(e) {
    // No-op here; we rely on touchmove + end heuristics in handleTouchMove
  }

  function handleTouchMove(e) {
    // prevent vertical scroll interference if horizontal swipe is detected
    if (!e.touches || e.touches.length === 0) return
    const t = e.touches[0]
    const dx = t.clientX - touchStartX.current
    const dy = t.clientY - touchStartY.current

    // ignore if mostly vertical movement
    if (Math.abs(dy) > Math.abs(dx)) return

    // threshold pixels for swipe
    const THRESHOLD = 40
    if (dx <= -THRESHOLD) {
      // swipe left (next)
      onMobileSwipeLeft()
      // reset start to prevent multiple triggers during same swipe
      touchStartX.current = t.clientX
    } else if (dx >= THRESHOLD) {
      // swipe right (prev)
      onMobileSwipeRight()
      touchStartX.current = t.clientX
    }
  }

  function onMobileSwipeLeft() {
    // If currently showing image view, go to review view
    if (mobileInnerIndex === 0) {
      setMobileInnerIndex(1)
      return
    }
    // If showing review view, advance to next testimonial and show image view
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setMobileInnerIndex(0)
  }

  function onMobileSwipeRight() {
    // If currently showing review view, go back to image view
    if (mobileInnerIndex === 1) {
      setMobileInnerIndex(0)
      return
    }
    // If showing image view, move to previous testimonial's review view
    setCurrentIndex((prev) => {
      const next = (prev - 1 + testimonials.length) % testimonials.length
      return next
    })
    // show review of previous testimonial (so user went right to previous)
    setMobileInnerIndex(1)
  }

  // Desktop manual dot click
  function goToIndex(i) {
    setCurrentIndex(i)
  }

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground text-balance">
            Student Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Student Success Stories - Our students share their experiences with the DocDent Training Program.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div
            // main slide container
            className="relative min-h-80 flex items-center justify-center overflow-hidden rounded-2xl bg-card border border-border p-8 sm:p-12"
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchMove={isMobile ? handleTouchMove : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex

              // For desktop: use absolute fade-in/out
              if (!isMobile) {
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 p-8 sm:p-12 flex flex-col justify-between transition-opacity duration-1000 ease-in-out ${
                      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <div>
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      <p className="text-lg text-foreground mb-8 leading-relaxed">{`"${testimonial.content}"`}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-32 h-32 rounded-full bg-muted overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                )
              }

              // MOBILE: show only when active, and display either image or content depending on mobileInnerIndex
              if (isMobile && isActive) {
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col items-center justify-center gap-6"
                  >
                    {mobileInnerIndex === 0 ? (
                      // IMAGE VIEW (first)
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-40 h-40 rounded-full bg-muted overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">Swipe → to read the review</p>
                        <div className="flex gap-1 mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    ) : (
                      // CONTENT VIEW (second)
                      <div className="px-4">
                        <p className="text-base text-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">Swipe → for next testimonial, ← for previous</p>
                      </div>
                    )}
                  </div>
                )
              }

              // not active on mobile: render nothing (keeps dom small)
              return null
            })}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-auto">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    goToIndex(index)
                    setMobileInnerIndex(0)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
