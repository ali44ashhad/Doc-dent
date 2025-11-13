"use client"

import Link from "next/link"
import { Activity } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 md:row-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">HealthTech</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforming healthcare through innovative technology solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link href="/teams" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} HealthTech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
