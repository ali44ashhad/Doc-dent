"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "CEO & Founder",
    bio: "Medical doctor with 15+ years in healthcare technology and innovation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "AI researcher and full-stack engineer specializing in healthcare systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Chief Medical Officer",
    bio: "Board-certified physician with expertise in clinical operations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Head of Security",
    bio: "Cybersecurity expert ensuring HIPAA compliance and data protection.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Lisa Park",
    role: "VP of Product",
    bio: "Product strategist focused on user experience and innovation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "David Kumar",
    role: "Lead Developer",
    bio: "Full-stack developer passionate about scalable healthcare solutions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
]

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brilliant minds dedicated to revolutionizing healthcare through cutting-edge technology and innovation.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <button className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group/btn">
                        <Linkedin className="w-5 h-5 text-accent" />
                      </button>
                      <button className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group/btn">
                        <Twitter className="w-5 h-5 text-accent" />
                      </button>
                      <button className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group/btn">
                        <Mail className="w-5 h-5 text-accent" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're always looking for talented individuals passionate about healthcare innovation.
            </p>
            <button className="px-8 py-4 bg-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
