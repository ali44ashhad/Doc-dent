"use client"

import React, { useState, useRef, useEffect } from "react"

// change this if you want to use the color elsewhere
const ACCENT_COLOR = "#00a9b3"

const faqs = [
  {
    q: "Who is this training platform targeted to?",
    a:
      "Our training platform caters to students at all levels of medical education. We provide comprehensive guidance and support to ensure a seamless learning experience.",
  },
  {
    q: "I am a medical student and want to work in the healthcare sector, how can I get started?",
    a:
      "Please submit an application through our online platform, and our team shall assist you throughout the process. We'll guide you with program selection, required documentation and next steps.",
  },
  {
    q: "Can I gain real-world experience through the programs?",
    a:
      "Yes — many of our programs include simulated clinical scenarios, augmented-reality labs and supervised shifts or placements with partner hospitals and clinics to provide hands-on, real-world experience.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  // refs to each answer panel so we can read scrollHeight
  const panelsRef = useRef([])

  // ensure the refs array has correct length
  useEffect(() => {
    panelsRef.current = panelsRef.current.slice(0, faqs.length)
  }, [])

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-4">FAQ</h2>
      <p className="text-sm text-gray-300 mb-6">
        Answers to common questions about our training platform. Click a question to expand.
      </p>

      <div className="space-y-3">
        {faqs.map((item, i) => {
          const open = openIndex === i
          return (
            <div
              key={i}
              className="border border-gray-700 rounded-lg overflow-hidden bg-black shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                className="w-full flex items-center justify-between gap-4 p-4 text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  {/* circle icon with accent color */}
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="10" fill={ACCENT_COLOR} opacity="0.20" />
                    <path
                      d="M12 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 12.5v2"
                      stroke={ACCENT_COLOR}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="font-medium text-white">{item.q}</span>
                </div>

                {/* chevron */}
                <svg
                  className={`transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke={ACCENT_COLOR}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Answer panel */}
              <div
                id={`faq-panel-${i}`}
                ref={(el) => (panelsRef.current[i] = el)}
                className="px-4 pb-4 text-gray-300 overflow-hidden transition-[max-height] duration-300"
                style={{
                  // use the measured scrollHeight when open, otherwise 0
                  maxHeight: open && panelsRef.current[i] ? `${panelsRef.current[i].scrollHeight}px` : "0px",
                  whiteSpace: "pre-line",
                }}
              >
                {/* inner wrapper adds some top padding only when open to avoid jump */}
                <div className={`pt-1 ${open ? "visible" : "invisible"}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
