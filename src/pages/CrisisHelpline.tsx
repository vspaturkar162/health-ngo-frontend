// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CrisisHelpline() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-4">Crisis Helpline</h1>

        <p className="text-sm mb-6">
          If you or someone you know is facing violence, help is available.
          Our centres operate between <strong>10 AM – 6 PM (Mon–Sat)</strong>.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="tel:9892278287"
            className="border px-6 py-3 rounded">
            Call Us: 9892278287
          </a>
          <button className="border px-6 py-3 rounded">
            Crisis Contact Form
          </button>
        </div>

        <p className="italic text-gray-600">
          You are not alone. It is NOT your fault.
        </p>
      </section>

      <Footer />
    </>
  );
}