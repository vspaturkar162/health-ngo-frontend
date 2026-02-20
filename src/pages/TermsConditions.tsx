export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-4">
          Welcome to <strong>HealthForAll</strong>. By accessing or using our
          website and services, you agree to comply with the following Terms
          and Conditions.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Use of Website
        </h2>
        <p className="text-gray-600 mb-4">
          Our website is intended to provide information about our health
          initiatives, programs, and services. You agree not to misuse the
          content or attempt unauthorized access to our systems.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Content Accuracy
        </h2>
        <p className="text-gray-600 mb-4">
          While we strive to keep information accurate and up to date,
          HealthForAll does not guarantee the completeness or accuracy of all
          content at all times.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Donations & Volunteering
        </h2>
        <p className="text-gray-600 mb-4">
          Donations made through our platform are voluntary and non-refundable.
          Volunteer participation is subject to eligibility and availability.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Intellectual Property
        </h2>
        <p className="text-gray-600 mb-4">
          All content, logos, text, and materials on this website are the
          property of HealthForAll and may not be copied or reused without
          written permission.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          HealthForAll shall not be held responsible for any direct or indirect
          damages arising from the use of our website or services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Changes to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update these Terms & Conditions at any time.
          Continued use of the website implies acceptance of the updated terms.
        </p>

        <p className="text-gray-500 text-sm mt-8">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}