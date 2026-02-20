export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">
          At <strong>HealthForAll</strong>, we respect your privacy and are
          committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your data.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We may collect personal information such as your name, email address,
          phone number, and any details you provide while contacting us,
          volunteering, donating, or accessing our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>To provide and improve our services</li>
          <li>To communicate important updates</li>
          <li>To process donations and volunteer requests</li>
          <li>To maintain transparency and accountability</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Data Protection
        </h2>
        <p className="text-gray-600 mb-4">
          We implement appropriate security measures to protect your personal
          data from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Third-Party Services
        </h2>
        <p className="text-gray-600 mb-4">
          We do not sell or share your personal information with third parties
          except where required by law or to operate our services securely.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Your Rights
        </h2>
        <p className="text-gray-600 mb-4">
          You have the right to access, update, or request deletion of your
          personal information by contacting us.
        </p>

        <p className="text-gray-500 text-sm mt-8">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}