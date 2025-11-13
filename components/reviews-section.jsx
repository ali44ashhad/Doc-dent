"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    college: "Stanford Medical Center",
    content:
      "This platform has revolutionized how we manage patient care. The AI diagnostics are incredibly accurate and save us hours every day.",
    rating: 5,
    image: "health1.jpg",
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of Cardiology",
    college: "MIT Medical Research",
    content:
      "The real-time monitoring capabilities have improved patient outcomes significantly. Highly recommend to any healthcare institution.",
    rating: 5,
    image: "/doctor-michael.jpg",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Healthcare Administrator",
    college: "Harvard Medical School",
    content:
      "Enterprise security features are top-notch. We trust this platform with our most sensitive patient data without any concerns.",
    rating: 5,
    image: "/doctor-emily.jpg",
  },
  {
    name: "Prof. James Wilson",
    role: "Clinical Director",
    college: "Johns Hopkins Hospital",
    content:
      "Integration was seamless and the support team was exceptional. Best healthcare platform we have invested in.",
    rating: 5,
    image: "/doctor-james.jpg",
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Research Lead",
    college: "Yale School of Medicine",
    content: "The data analytics and insights provided by this platform are invaluable for our research initiatives.",
    rating: 5,
    image: "/doctor-lisa.jpg",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground text-balance">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what industry experts and medical institutions have to say about our platform.
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <div className="relative h-80 flex items-center justify-center overflow-hidden rounded-2xl bg-background border border-border p-8 sm:p-12">
            {/* Slides */}
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute inset-0 p-8 sm:p-12 flex flex-col justify-between transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-lg text-foreground mb-8 leading-relaxed">{`"${review.content}"`}</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-xs text-muted-foreground">{review.college}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}