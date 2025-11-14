"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Activity } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md backdrop-blur-optimized border-b border-border z-50 gpu-accelerated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group gpu-accelerated">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:animate-glow transition-smooth">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">DocDent</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-smooth gpu-accelerated">
              Home
            </Link>
            <Link href="/teams" className="text-foreground hover:text-accent transition-smooth gpu-accelerated">
              Teams
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-smooth gpu-accelerated">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
            <button className="px-6 py-2 bg-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-smooth gpu-accelerated hover:scale-105">
              Get Started
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-accent transition-smooth gpu-accelerated"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up gpu-accelerated">
            <Link href="/" className="block py-2 text-foreground hover:text-accent transition-smooth">
              Home
            </Link>
            <Link href="/teams" className="block py-2 text-foreground hover:text-accent transition-smooth">
              Teams
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-accent transition-smooth">
              Contact
            </Link>
           <Link href="/contact">
             <button className="w-full mt-4 px-6 py-2 bg-accent text-primary-foreground rounded-full font-semibold gpu-accelerated">
              Get Started
            </button>
           </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
