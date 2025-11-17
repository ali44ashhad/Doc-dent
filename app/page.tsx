"use client"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ReviewsSection from "@/components/reviews-section"
import TeamsSection from "@/components/teams"
import ContactForm from "@/components/ctaForm"
import Collaboration from "@/components/collaboration"
import FaqSection from "@/components/faq"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"  

export default function SyntheticV0PageForDeployment() {

  return <div>

    <Navbar/>
    <HeroSection />
    <AboutSection/>
    <ReviewsSection/>
    <TeamsSection/>
    <Collaboration/>
    <ContactForm/>
    <FaqSection/>
    <Footer/>
  </div>
}