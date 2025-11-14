"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">DocDent</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Revolutionizing healthcare through innovative technology and dedicated patient care.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <button className="w-10 h-10 rounded-full bg-background hover:bg-accent/20 flex items-center justify-center transition-smooth gpu-accelerated">
                <Linkedin className="w-5 h-5 text-accent" />
              </button>
              <button className="w-10 h-10 rounded-full bg-background hover:bg-accent/20 flex items-center justify-center transition-smooth gpu-accelerated">
                <Twitter className="w-5 h-5 text-accent" />
              </button>
              <button className="w-10 h-10 rounded-full bg-background hover:bg-accent/20 flex items-center justify-center transition-smooth gpu-accelerated">
                <Facebook className="w-5 h-5 text-accent" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-smooth gpu-accelerated text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {[
                { name: "Contact Us", href: "/contact" },
                { name: "FAQs", href: "/faqs" },
                { name: "Terms&conditions", href: "/termsAndConditions" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-smooth gpu-accelerated text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@docdent.com" className="text-muted-foreground hover:text-accent transition-smooth gpu-accelerated text-sm">
                  info@docdent.com
                </a>
              </li>
              {/* <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  +1 (555) 123-4567
                </a>
              </li> */}
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Enterprise Suite<br />
                  Advanced Research Centre<br />
                  University of Glasgow<br />
                  11 Chapel Lane<br />
                  Glasgow, G11 6EW
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} HealthTech. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-accent text-sm transition-smooth gpu-accelerated">
              Privacy Policy
            </Link>
            <Link href="/termsAndConditions" className="text-muted-foreground hover:text-accent text-sm transition-smooth gpu-accelerated">
              Terms of Service
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  )
}
