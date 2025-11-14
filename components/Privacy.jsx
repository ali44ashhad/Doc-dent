// "use client"

// export default function PrivacyPage() {
//   return (
//     <section className="min-h-screen bg-black text-white py-20 px-6">
//       <div className="max-w-4xl mx-auto">

//         {/* Header */}
//         <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
//         <p className="text-gray-400 mb-8">Last updated: {new Date().toDateString()}</p>

//         {/* Intro */}
//         <div className="space-y-6 text-gray-300 leading-relaxed">
//           <p>
//             This Privacy Policy explains how we collect, use, disclose, and protect personal data
//             when you access or use our healthcare technology services, platforms, mobile applications,
//             and tools (collectively, the "Services"). We are committed to protecting the privacy and
//             confidentiality of patients, healthcare professionals, and institutional users.
//           </p>

//           <p>
//             By using our Services, you consent to the practices described in this policy. If you do not
//             agree with this policy, please do not use our Services.
//           </p>
//         </div>

//         {/* 1 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">1. Data We Collect</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>We may collect the following categories of data:</p>
//           <ul className="list-disc ml-6 space-y-2">
//             <li><strong>Personal identification:</strong> name, email, phone number, professional credentials.</li>
//             <li><strong>Patient clinical data:</strong> medical history, symptoms, diagnoses, medications, lab results, imaging (when uploaded) — provided by clinicians or patients.</li>
//             <li><strong>Usage data:</strong> logs, device and browser information, IP addresses, feature usage.</li>
//             <li><strong>Administrative data:</strong> organization, role, and billing/contract details for institutional customers.</li>
//           </ul>
//         </div>

//         {/* 2 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">2. How We Use Data</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>We use data to:</p>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Provide, maintain, and improve our Services and clinical decision-support tools.</li>
//             <li>Deliver personalized insights, analytics, and AI-assisted recommendations to clinicians.</li>
//             <li>Communicate important updates, security notices, and support information.</li>
//             <li>Comply with legal, regulatory, and contractual obligations (e.g., audits, reporting).</li>
//           </ul>
//         </div>

//         {/* 3 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">3. Legal Basis for Processing</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             For users in jurisdictions with data protection laws (e.g., GDPR), our processing is based on
//             one or more lawful bases including: consent (where applicable), performance of a contract,
//             legitimate interests (e.g., improving Services, securing systems), and compliance with legal obligations.
//           </p>
//         </div>

//         {/* 4 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">4. Sharing & Disclosure</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>We do not sell personal health information. We may disclose data to:</p>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Authorized healthcare providers and institutions for patient care coordination.</li>
//             <li>Third-party service providers who perform functions on our behalf (hosting, analytics, payment processing) under contract and confidentiality obligations.</li>
//             <li>Regulatory authorities or law enforcement when required by law or to protect safety.</li>
//             <li>Other parties with patient or clinician consent.</li>
//           </ul>
//         </div>

//         {/* 5 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">5. Security Measures</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             We implement administrative, technical, and physical safeguards to protect data against
//             unauthorized access, use, alteration, and disclosure. These measures include encryption in transit,
//             role-based access controls, secure hosting environments, regular security assessments, and employee training.
//           </p>
//           <p>
//             Despite these steps, no system can be guaranteed fully secure. If a breach is discovered, we will take
//             steps required by law, which may include notifying affected parties and regulators.
//           </p>
//         </div>

//         {/* 6 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">6. Patient Rights</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             Subject to applicable law, patients and users may have rights such as:
//           </p>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>Accessing their personal data and medical records stored by the Services.</li>
//             <li>Requesting correction of inaccurate data.</li>
//             <li>Requesting deletion or restriction of processing (where legally permitted).</li>
//             <li>Obtaining a copy of their data in a structured, machine-readable format.</li>
//           </ul>
//           <p>To exercise these rights, contact us at: <span className="text-white">info@docdent.com</span>. Certain requests may require identity verification or may be limited for legal/clinical reasons.</p>
//         </div>

//         {/* 7 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">7. Data Retention</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             We retain personal and clinical data as long as necessary to provide Services, fulfill contractual
//             obligations, comply with legal requirements, and resolve disputes. Retention periods vary by data type
//             and jurisdiction; institutional contracts may define specific retention schedules.
//           </p>
//         </div>

//         {/* 8 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">8. Cookies & Tracking</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             We use cookies and similar technologies to operate the Services, remember preferences, analyze usage,
//             and support security. You may manage cookie preferences via browser settings or our consent controls where provided.
//           </p>
//         </div>

//         {/* 9 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">9. Third-Party Services</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             Our Services may integrate with third-party platforms (e.g., analytics, cloud hosting, lab systems).
//             These third parties have their own privacy practices; we recommend reviewing their policies. We only
//             share data with third parties under contractual safeguards.
//           </p>
//         </div>

//         {/* 10 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">10. International Transfers</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             Data may be processed or stored in locations outside your country. When transferring personal data across
//             borders, we use legal mechanisms and safeguards (e.g., Standard Contractual Clauses) as required by law.
//           </p>
//         </div>

//         {/* 11 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">11. Children's Data</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             Our Services are not directed to children under the age of 16. We do not knowingly collect or solicit personal
//             information from children under this age. If you believe a child has provided personal data, please contact us
//             immediately so we can delete such information as required by applicable law.
//           </p>
//         </div>

//         {/* 12 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">12. Changes to This Policy</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal obligations,
//             or business operations. We will post the revised policy and update the "Last updated" date. Continued use after changes
//             indicates acceptance of the updated policy.
//           </p>
//         </div>

//         {/* 13 */}
//         <h2 className="text-2xl font-semibold mt-10 mb-3 text-white">13. Contact Us</h2>
//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             If you have questions, concerns, or requests regarding this Privacy Policy, please contact:
//           </p>
//           <p className="text-white font-medium">Email: info@docdent.com</p>
//           <p className="text-gray-500 text-sm mt-6">
//             This policy is provided for informational purposes and does not constitute legal advice. Organizations and
//             healthcare providers should consult legal counsel to ensure compliance with applicable laws and regulations
//             (e.g., HIPAA, GDPR, local healthcare privacy statutes).
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
