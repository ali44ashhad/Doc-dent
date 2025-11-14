'use client'

import { Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export default function ContactAndFollowSection() {
  return (
    <section className="bg-background py-20 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-muted-foreground mb-3 sm:mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about our training programs? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info & Social */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Heading and Description */}
            <div className="mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Get in Touch with DocDent
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                Have any questions about our training programs, partnerships, or how we can support your career in healthcare? Our team is ready to assist you every step of the way.
              </p>
            </div>

            {/* Social Media Links */}
           <div className="flex flex-col md:flex-row gap-10 mb-12">
{/* EMAIL BLOCK */}
  <div className="md:w-1/2">
    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
      Email
    </p>

    <a
      href="mailto:info@docdent.com"
      className="text-foreground font-medium hover:text-accent transition-colors duration-300"
    >
      info@docdent.com
    </a>
  </div>

  {/* ADDRESS BLOCK */}
  <div className="md:w-1/2">
    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
      Address
    </p>

    <p className="text-foreground font-medium leading-relaxed">
      Enterprise Suite<br />
      Advanced Research Centre<br />
      University of Glasgow<br />
      11 Chapel Lane<br />
      Glasgow, G11 6EW
    </p>
  </div>

  
</div>


         
          </div>

          {/* Right: Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground text-sm"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground text-sm"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground text-sm"
              />

              {/* Message */}
              <textarea
                rows={6}
                placeholder="Your message"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground text-sm resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg hover:shadow-accent/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
  