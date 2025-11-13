"use client"

export default function AboutSection() {
  const features = [
    {
      image: "health1.jpg",
      title: "AI-Powered Diagnostics",
      description:
        "Advanced machine learning algorithms provide accurate, instant medical insights and recommendations for better clinical outcomes.",
        
    },
    {
      image: "health1.jpg",
      title: "Real-Time Monitoring",
      description:
        "Continuous health tracking with live patient data and instant alert systems for critical changes in patient conditions.",
    },
    {
      image: "health1.jpg",
      title: "Enterprise Security",
      description:
        "HIPAA-compliant infrastructure with end-to-end encryption protecting sensitive patient data at all times.",
    },
  ]

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center mb-20 last:mb-0 animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Image */}
            <div className="flex-1">
              <div className="relative h-96 bg-card border border-border rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="p-8 bg-card border border-border rounded-xl">
                <h3 className="text-3xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                <div className="mt-6 h-1 w-12 bg-accent rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}