"use client"


const colleges = [
    {
        name: "St Andrews university",
        abbr: "STANFORD",
        description: "Center for Advanced Healthcare Innovation",
        icon: "🏥",
        image: "/st-andrew.png",
        info: "Leading research institution focused on precision health and medical innovation with cutting-edge facilities.",
    },
    {
        name: "MIT Medical",
        abbr: "MIT",
        description: "Institute for Health & Technology Research",
        icon: "🔬",
        image: "/glasgow.jpg",
        info: "Pioneering biomedical research combining engineering excellence with healthcare advancement.",
    },
    {
        name: "NHS ggc",
        abbr: "HARVARD",
        description: "Leading Clinical Excellence Network",
        icon: "📚",
        image: "/nhs-gcc.jpg",
        info: "World's premier medical institution with global influence in clinical practice and research.",
    },
    {
        name: "NHS Lanarkshire Healthcare related tech",
        abbr: "JHU",
        description: "Center for Research & Patient Care",
        icon: "⚕️",
        image: "/nhs-lanarkshire.png",
        info: "Renowned for breakthrough discoveries and comprehensive patient care programs.",
    },
    {
        name: "University of Glasgow ",
        abbr: "YALE",
        description: "Healthcare Innovation Lab",
        icon: "🏆",
        image: "/uni-glasgow.jpg",
        info: "Focused on translating innovative research into transformative clinical solutions.",
    },
]

export default function CollaborationSection() {
    return (
        <section className="py-24 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground text-balance">Our Collaborations</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Partnering with leading academic and medical institutions worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {colleges.map((college, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-card border border-border rounded-2xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card Background Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            <div className="relative h-48 w-full overflow-hidden bg-black flex items-center justify-center">
                                <img
                                    src={college.image || "/placeholder.svg"}
                                    alt={college.name}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8">
                                {/* Icon */}
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {college.icon}
                                </div>

                                {/* Name and Abbreviation */}
                                <h3 className="text-xl font-semibold text-foreground mb-2">{college.name}</h3>
                                <p className="text-xs font-mono text-accent font-semibold tracking-wider mb-3">{college.abbr}</p>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{college.description}</p>

                                <p className="text-sm text-foreground leading-relaxed mb-4 italic">{college.info}</p>

                                {/* Divider */}
                                <div className="h-0.5 w-6 bg-accent group-hover:w-full transition-all duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 animate-fade-in-up">
                    <p className="text-muted-foreground mb-4">Interested in collaborating with us?</p>
                    <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105">
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    )
}