
" use client"

export default function TermsAndconditions() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-400 mb-12">
          Last updated: {new Date().toDateString()}
        </p>

        {/* Introduction */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            These Terms & Conditions govern your access and use of our healthcare
            technology services, platforms, mobile applications, and tools
            (collectively referred to as the “Services”). By accessing or using
            our Services, you agree to be bound by these Terms.
          </p>

          <p>
            If you do not agree with these Terms, please discontinue use of the
            Services immediately. These Terms apply to all users, including
            doctors, healthcare providers, clinics, patients, institutions, and
            administrative staff.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">1. Medical Disclaimer</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Our platform provides digital tools, decision-support systems, and
            AI-powered insights to assist healthcare professionals. However:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              The Services <span className="text-white font-medium">do not provide medical diagnosis</span>.
            </li>
            <li>
              The final decision must always be made by a licensed healthcare professional.
            </li>
            <li>
              Information provided is for educational and supportive purposes only.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">2. User Responsibilities</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>Users agree to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide accurate and updated information.</li>
            <li>Use the Services in compliance with medical ethics and legal guidelines.</li>
            <li>Not misuse, copy, or redistribute any part of the platform without permission.</li>
            <li>Ensure patient confidentiality as required by healthcare regulations.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">3. Data Privacy & Confidentiality</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            We are committed to protecting patient and user data. All stored or processed information
            is handled in accordance with applicable data protection laws.
          </p>
          <p>
            However, users are responsible for maintaining the security of their accounts and login credentials.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">4. Use of AI & Automation</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Our platform may include AI-generated insights, predictions, or suggestions. You acknowledge that:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>AI predictions may not always be accurate.</li>
            <li>AI tools are supplementary and not replacements for clinical judgment.</li>
            <li>Healthcare providers should independently verify AI outputs before clinical use.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">5. Limitation of Liability</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            We are not liable for:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Clinical decisions made based on platform outputs.</li>
            <li>Any delays, interruptions, or errors in the Services.</li>
            <li>Loss of data due to external factors or user actions.</li>
            <li>Unintended misuse of the platform by healthcare staff or patients.</li>
          </ul>
        </div>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">6. Account & Access Policies</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Users must maintain the confidentiality of login credentials. Sharing accounts, unauthorized
            access, or tampering with platform operations is strictly prohibited.
          </p>
        </div>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">7. Termination of Access</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            We reserve the right to suspend or terminate user accounts without prior notice if misuse,
            data breaches, or unethical behavior is detected.
          </p>
        </div>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">8. Changes to Terms</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            We may update these Terms at any time. Continued use of the Services after updates
            implies acceptance of the revised Terms.
          </p>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-10">
          If you have questions regarding these Terms, please contact us at:
          <span className="text-white"> info@docdent.com</span>
        </p>
      </div>
    </section>
  );
}
