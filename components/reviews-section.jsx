"use client"

import { useEffect, useState } from "react"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Medical Student",
    content:
      "The training programs offered by DocDent have been invaluable in preparing me for a career in healthcare. I feel confident and well-equipped to tackle real-world medical challenges.",
    image: "review1.jpg",
  },
  {
    name: "Emily White",
    role: "Medical Student",
    content:
      "DocDent's approach to training is exceptional. The augmented reality simulations have significantly enhanced my clinical skills and decision-making abilities.",
    image: "review2.jpg",
  },
  {
    name: "Daniel Brown",
    role: "Medical Student",
    content:
      "I am grateful for the opportunity to work shifts in NHS hospitals through DocDent. It has provided me with a unique learning experience and a deeper understanding of the medical profession.",
    image: "review3.jpg",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up gpu-accelerated">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground text-balance">
            Student Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Student Success Stories - Our students share their experiences with the DocDent Training Program.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative gpu-accelerated">
          <div className="relative min-h-80 flex items-center justify-center overflow-hidden rounded-2xl bg-card border border-border p-8 sm:p-12 gpu-accelerated">
            {/* Slides */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 p-8 sm:p-12 flex flex-col justify-between transition-opacity duration-1000 ease-in-out gpu-accelerated ${
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-lg text-foreground mb-8 leading-relaxed">{`"${testimonial.content}"`}</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-32 h-32 rounded-full bg-muted overflow-hidden flex-shrink-0 gpu-accelerated">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover gpu-accelerated"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-smooth gpu-accelerated ${
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
