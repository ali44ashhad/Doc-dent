"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Linkedin, Twitter, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: "Dr Hisham Khan",
    role: "Founder & CEO",
    bio: "Leader in healthcare innovation with a vision for AI-driven medical solutions.",
    description:
      "Reimagining healthcare through intelligent, data-driven systems that improve patient outcomes.",
    image: "/hisham.avif",
  },
  {
    name: "Felix Steckler",
    role: "Tech Lead",
    bio: "Technology strategist specializing in scalable AI and cloud architecture.",
    description:
      "Building secure, scalable, and intelligent platforms that transform the healthcare ecosystem.",
    image: "/felix.avif",
  },
  {
    name: "Abdullah AlSakiti",
    role: "England Lead",
    bio: "Experienced leader managing nationwide healthcare operations and partnerships.",
    description:
      "Driving innovation and operational excellence across regional healthcare hubs.",
    image: "/abdullah.avif",
  },
  {
    name: "Leena AlWaily",
    role: "HR Lead",
    bio: "People-focused HR leader committed to fostering growth and culture.",
    description:
      "Empowering teams through strategic leadership, talent development, and a strong workplace culture.",
    image: "/leena.avif",
  },
  {
    name: "Thomas O'Brien",
    role: "UX Architect",
    bio: "Expert in user experience design for healthcare applications.",
    description:
      "Creating intuitive and seamless digital experiences that improve patient engagement.",
    image: "/thomas.avif",
  },
  {
    name: "Alex Young",
    role: "Customer Support Lead",
    bio: "Specialist in patient and client support with a focus on satisfaction and efficiency.",
    description:
      "Ensuring every user receives timely, accurate, and compassionate support.",
    image: "/alex.avif",
  },
];


export default function TeamsPage() {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="animate-fade-in-left">
              <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-accent/20">
                <img
                  src="../teamshero.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                {/* Floating stat boxes */}
                <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-md border border-border rounded-lg p-4 shadow-xl animate-bounce" style={{ animationDuration: "3s" }}>
                  <p className="text-2xl font-bold text-accent">50+</p>
                  <p className="text-xs text-muted-foreground">Team Members</p>
                </div>
                <div className="absolute top-8 right-8 bg-card/95 backdrop-blur-md border border-border rounded-lg p-4 shadow-xl animate-bounce" style={{ animationDuration: "3.5s" }}>
                  <p className="text-2xl font-bold text-accent">10+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="animate-fade-in-right space-y-8">
              <div className="space-y-4">
                <p className="text-accent font-semibold text-sm tracking-wider uppercase animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Our Team</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Dedicated to Healthcare Excellence
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Our talented team brings together diverse expertise in medicine, technology, and innovation. We're passionate about revolutionizing healthcare through cutting-edge solutions and unwavering dedication to patient care.
              </p>

              {/* Core Values */}
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <h3 className="font-semibold text-foreground text-lg">Our Core Values</h3>
                <div className="space-y-3">
                  {[
                    { title: "Patient-Centric", desc: "Every decision revolves around improving patient outcomes" },
                    { title: "Innovation", desc: "Continuously pushing boundaries in healthcare technology" },
                    { title: "Integrity", desc: "Maintaining highest standards of ethics and transparency" },
                    { title: "Collaboration", desc: "Working together to achieve extraordinary results" },
                  ].map((value, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{value.title}</p>
                        <p className="text-xs text-muted-foreground">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

     <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Leadership Team
          </h2>
          <p className="text-muted-foreground">Visionary leaders guiding our mission</p>
        </div>

        {/* Members */}
        <div className="space-y-16">
          {teamMembers.map((member, index) => {
            const isOdd = index % 2 === 1;
            return (
              <div
                key={member.name}
                className={`flex flex-col md:items-center md:gap-8 ${
                  isOdd ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image half */}
                <div className="w-full md:w-1/2 h-72 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg shadow-accent/10">
                  {/* If using Next.js, replace the <img> with next/image for optimization */}
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content half */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="md:pl-8 md:pr-8">
                    <p className="text-accent font-semibold text-sm mb-2">{member.role}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{member.name}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">{member.bio}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                  </div>

                  {/* Social buttons */}
                  <div className="flex gap-4 md:pl-8">
                    <button className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5 text-accent" />
                    </button>
                    <button className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Twitter className="w-5 h-5 text-accent" />
                    </button>
                    <button className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-accent" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join Our Growing Team</h2>
          <p className="text-muted-foreground text-lg mb-8">
            We're always looking for talented individuals passionate about healthcare innovation.
          </p>
          <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
