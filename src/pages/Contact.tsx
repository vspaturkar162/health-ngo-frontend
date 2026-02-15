// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Contact() {
//   return (
//     <>
//       <Navbar />
//       <div className="max-w-5xl mx-auto p-10">
//         <h1 className="text-3xl mb-4">Contact Us</h1>
//         <p>Email: info@healthforall.org</p>
//         <p>Phone: +91 9XXXXXXXXX</p>
//       </div>
//       <Footer />
//     </>
//   );
// }
import { useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "How can I get help if I am facing violence?",
    a: "You can call our crisis helpline or visit our nearest center. All services are confidential.",
  },
  {
    q: "Can I volunteer with your NGO?",
    a: "Yes, please visit the Volunteer page and submit the application form.",
  },
  {
    q: "Are your services free?",
    a: "Yes, all our counselling and support services are provided free of cost.",
  },
  {
    q: "Do you support children as well?",
    a: "Yes, we work extensively with women, children, and adolescents.",
  },
  {
    q: "Is my identity kept confidential?",
    a: "Absolutely. We ensure full confidentiality and anonymity.",
  },
];

export default function Contact() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* FAQ */}
          <div>
            <h2 className="text-2xl mb-4">FAQs</h2>
            {faqs.map((f, i) => (
              <div key={i} className="border-b py-3">
                <button
                  className="w-full text-left font-medium"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {f.q}
                </button>
                {open === i && <p className="text-sm mt-2 text-gray-600">{f.a}</p>}
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="text-sm text-gray-700">
            <p><strong>Email:</strong> info@healthngo.org</p>
            <p><strong>Phone:</strong> +91 97652XXXXX</p>
            <p><strong>Address:</strong> Chhatrapati Sambhajinagar, India</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}