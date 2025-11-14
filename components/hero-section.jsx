"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const heroImages = [
  "../health1.jpg",
  "../health2.jpg",
  "../health3.jpg",
  "../health4.jpg",
]


const collaborators = [
    {
        name: "Collaborator 1",
        image: "../glasgow.jpg",
    },
    {
        name: "Collaborator 2",
        image: "../nhs-gcc.jpg",
    },
    {
        name: "Collaborator 3",
        image: "../nhs-lanarkshire.png",
    },
    {
        name: "Collaborator 4",
        image: "../st-andrew.png",
    },
    {
        name: "Collaborator 5",
        image: "../uni-glasgow.jpg",
    },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden gpu-accelerated">
      {/* IMAGE LAYER */}
      <div className="absolute inset-0 gpu-accelerated">
        {heroImages.map((img, index) => {
          const src = typeof img === "string" ? img : img.src;
          const pos = typeof img === "string" ? "center center" : img.pos || "center center";
          return (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              style={{ objectPosition: pos }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out gpu-accelerated ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          );
        })}

        {/* subtle overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center gpu-accelerated">
       <h1
  className="mx-auto max-w-2xl text-white font-extrabold leading-tight break-words"
  style={{ wordBreak: "break-word" }}
>
  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Bridge the Gap between</span>
  <span className="block text-2xl sm:text-3xl md:text-4xl text-accent">Study and Clinical Work</span>
</h1>

<p className="mt-6 mx-auto max-w-2xl text-white/85 text-base sm:text-lg md:text-xl leading-relaxed break-words">
  Seamlessly connect medical students with flexible part-time clinical shifts and learning opportunities
  to integrate education with real-world healthcare practice.
</p>

        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center items-center">
          <button className="px-6 py-3 bg-accent text-primary-foreground rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-smooth gpu-accelerated hover:scale-105 flex items-center gap-2">
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="px-6 py-3 bg-white/10 backdrop-blur-md backdrop-blur-optimized border border-white/20 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-smooth gpu-accelerated">
            Watch Demo
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-smooth gpu-accelerated ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24 bg-background border-t border-b border-border">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-12 sm:mb-16 animate-fade-in-up gpu-accelerated">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground text-balance">
        Our Collaborations
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
        Trusted by leading companies and organizations worldwide
      </p>
    </div>

    {/* Logo Grid */}
 {/* Logos grid — no background cards, no extra blank space */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 items-center justify-items-center">
  {collaborators.map((collaborator, index) => (
    <div
      key={index}
      className="w-full flex items-center justify-center transition-smooth gpu-accelerated"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {collaborator.image ? (
        <img
          src={collaborator.image}
          alt={collaborator.name}
          className="
            max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-28
            w-auto max-w-full
            object-contain object-center
            block
            gpu-accelerated
          "
          style={{ display: "block" }}
        />
      ) : (
        <div className="text-center">
          <div className="text-3xl text-muted-foreground mb-1">📷</div>
          <p className="text-xs sm:text-sm text-muted-foreground">Add image</p>
        </div>
      )}
    </div>
  ))}
</div>

  </div>
</section>

    </>
  )
}