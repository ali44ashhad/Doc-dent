"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="animate-fade-in-left order-2 lg:order-1">
              <div className="relative h-96 sm:h-[500px] overflow-hidden rounded-2xl">
                <img
                  src="../health2.jpg"
                  alt="Contact hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="animate-fade-in-right order-1 lg:order-2">
              <div className="space-y-6">
                <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <p className="text-accent font-semibold text-sm tracking-wider uppercase">Get In Touch</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                    We'd Love to Hear From You
                  </h1>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Have questions about our healthcare solutions? Our dedicated team is here to help and will respond within 24 hours.
                </p>

                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Quick Response</h3>
                      <p className="text-sm text-muted-foreground">Get answers within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Expert Support</h3>
                      <p className="text-sm text-muted-foreground">Speak with healthcare specialists</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Confidential</h3>
                      <p className="text-sm text-muted-foreground">Your information is secure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Send us a Message</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {submitted && (
              <div className="p-4 bg-accent/20 border border-accent/50 rounded-lg text-accent text-sm animate-fade-in-up">
                ✓ Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Other Ways to Connect</h2>
            <p className="text-muted-foreground">Reach out through your preferred contact method</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
  icon: Mail,
  title: "Email",
  value: "info@docdent.com",
  link: "mailto:info@docdent.com",
},
{
  icon: Phone,
  title: "Enterprise Suite",
  value: "Advanced Research Centre",
  link: "#",
},
{
  icon: MapPin,
  title: "Address",
  value: " Enterprise Suite Advanced Research CentreUniversity of Glasgow11 Chapel LaneGlasgow, G11 6EW",link: "#",
},

            ].map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.link}
                  className="group p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors text-sm">{item.value}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
