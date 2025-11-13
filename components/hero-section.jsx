"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const heroImages = [
  "../health1.jpg",
  "../health2.jpg",
  "../health3.jpg",
  "../health4.jpg",
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        

        <h1
          className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-pretty text-white"
          style={{ animationDelay: "0.1s" }}
        >
          Transform Healthcare
          <span className="block text-accent"> Digitally</span>
        </h1>

        <p
          className="animate-fade-in-up text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8"
          style={{ animationDelay: "0.2s" }}
        >
          Revolutionize patient care with AI-powered diagnostics, seamless telemedicine, and real-time health
          monitoring. The future of healthcare is here.
        </p>

        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <button className="px-8 py-4 bg-accent text-primary-foreground rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            Watch Demo
          </button>
        </div>

        <div className="animate-fade-in-up mt-16 flex justify-center gap-2" style={{ animationDelay: "0.4s" }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}