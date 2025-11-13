"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
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

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out to our team and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-left space-y-8">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              {[
                { icon: Mail, title: "Email", value: "hello@healthtech.com", link: "mailto:hello@healthtech.com" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
                {
                  icon: MapPin,
                  title: "Address",
                  value: "123 Healthcare Ave, Medical City, MC 12345",
                  link: "#",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="group flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
