"use client";

import Image from "next/image";

export default function AboutSection() {
  const missionContent = {
    title: "Our Mission",
    description:
      "More than 60% of medical students now balance part-time work alongside their studies. DocDent was created to turn this challenge into an opportunity.",
    fullText:
      "Our mission is to bridge the gap between medical education and clinical practice, integrating medical curriculums with real time shifts available.",
    image: "/aboutimg.jpg",
  };

  const offerings = [
    {
      image: "/offertech.jpg",
      title: "Blockchain Technology",
      description:
        "Blockchain is our backbone—helping us make compliance and onboarding simple, secure, and stress-free for all our medical students.",
    },
    {
      image: "/offerinstrument.jpg",
      title: "Augmented Reality",
      description:
        "Immersive cutting-edge augmented reality training designed to simulate real-life medical scenarios.",
    },
    {
      image: "/offercolaboration.jpg",
      title: "Collaborations",
      description:
        "Established partnerships with leading medical schools & NHS Trusts across Scotland, to develop bespoke matching algorithms that seamlessly integrate medical curricula with real-time shift opportunities within NHS hospitals.",
    },
    {
      image: "/offerlearning.jpg",
      title: "Machine Learning",
      description:
        "Almost 10% of medical students do not complete their studies, with financial pressures playing a major role. At DocDent, we're committed to changing that. Using machine learning, we aim to identify early signs of burnout and provide timely support—helping students protect their wellbeing, stay on track, and achieve their full potential.",
    },
  ];

  return (
    <section className="space-y-0">
      {/* Mission Section */}
      <div className="py-16 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* inner content constrained to 95% width on mobile */}
          <div className="w-[95%] mx-auto sm:w-full sm:mx-0">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center animate-fade-in-up gpu-accelerated">
              {/* Left Image */}
              <div className="flex-1 w-full">
                <div className="relative h-64 md:h-80 lg:h-96 bg-card border border-border rounded-xl overflow-hidden gpu-accelerated">
                  <Image
                    src={missionContent.image || "/placeholder.svg"}
                    alt={missionContent.title}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover gpu-accelerated"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 w-full">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-foreground">
                      {missionContent.title}
                    </h2>
                    <p className="text-base md:text-lg text-accent font-semibold mb-2">
                      {missionContent.description}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {missionContent.fullText}
                    </p>
                  </div>
                  <div className="h-1 w-12 bg-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="w-[95%] mx-auto sm:w-full sm:mx-0 mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-foreground">
              What We Offer
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Innovative solutions designed for healthcare professionals
            </p>
            <div className="mt-4 h-1 w-12 bg-accent rounded-full" />
          </div>

          <div className="w-[95%] mx-auto sm:w-full sm:mx-0">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 lg:gap-12 items-center mb-12 last:mb-0 animate-fade-in-up gpu-accelerated`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative h-64 md:h-80 lg:h-96 bg-card border border-border rounded-xl overflow-hidden gpu-accelerated">
                    <Image
                      src={offering.image || "/placeholder.svg"}
                      alt={offering.title}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover gpu-accelerated"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  {/* reduced padding on mobile, more on larger screens */}
                  <div className="p-4 sm:p-6 md:p-8 bg-card border border-border rounded-xl">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-foreground">
                      {offering.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {offering.description}
                    </p>
                    <div className="mt-4 md:mt-6 h-1 w-12 bg-accent rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
