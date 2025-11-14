"use client"

const trainingSteps = [
    {
        number: 1,
        title: "Apply",
        subtitle: "Submit Your Application",
        description: "Start by submitting your application to access our training programs. We will guide you through the process and assist you in finding suitable opportunities.",
        icon: "📝"
    },
    {
        number: 2,
        title: "Immerse",
        subtitle: "Engage in Practical Training",
        description: "Immerse yourself in hands-on training experiences tailored to develop your clinical and decision-making abilities. Gain exposure to diverse medical scenarios and challenges.",
        icon: "🏥"
    },
    {
        number: 3,
        title: "Collaborate",
        subtitle: "Join the Healthcare Community",
        description: "Collaborate with fellow healthcare enthusiasts, share knowledge, and grow together within our supportive community of aspiring professionals.",
        icon: "🤝"
    },
    {
        number: 4,
        title: "Connect",
        subtitle: "Get in Touch with Us",
        description: "Reach out to us to learn more about our training programs, partnerships, and how you can kickstart your career in healthcare.",
        icon: "📞"
    }
]

export default function CollaborationSection() {
    return (
        <section className="py-20 sm:py-32 bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
                    <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-400 mb-3 sm:mb-4">
                        Our Training
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
                        How It Works
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        DocDent follows a structured process to help aspiring healthcare professionals gain practical skills and real-world experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gray-800" />

                    {trainingSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group animate-fade-in-up gpu-accelerated"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative bg-gray-950 border border-gray-700 sm:border-gray-800 rounded-xl p-6 sm:p-7 h-full hover:border-gray-600 active:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50 active:shadow-lg active:shadow-gray-900/50 transition-smooth cursor-pointer touch-manipulation gpu-accelerated">
                                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                    {step.number}
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="text-4xl transform group-hover:scale-105 group-active:scale-105 transition-smooth gpu-accelerated">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                                    
                                    <p className="text-xs font-semibold text-gray-300 tracking-wide">{step.subtitle}</p>

                                    <p className="text-sm text-gray-400 leading-relaxed pt-2">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-gray-700 group-hover:w-full group-active:w-full transition-smooth gpu-accelerated" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-14 sm:mt-18 animate-fade-in-up gpu-accelerated">
                    <p className="text-sm sm:text-base text-gray-400 mb-5">
                        Ready to start your healthcare training journey?
                    </p>
                    <button className="px-8 sm:px-10 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-smooth gpu-accelerated hover:scale-105 shadow-md hover:shadow-lg text-sm">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    )
}
