
// import { useState } from "react";
// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const faqs = [
//   {
//     q: "How can I get help if I am facing violence?",
//     a: "You can call our crisis helpline or visit our nearest center. All services are confidential.",
//   },
//   {
//     q: "Can I volunteer with your NGO?",
//     a: "Yes, please visit the Volunteer page and submit the application form.",
//   },
//   {
//     q: "Are your services free?",
//     a: "Yes, all our counselling and support services are provided free of cost.",
//   },
//   {
//     q: "Do you support children as well?",
//     a: "Yes, we work extensively with women, children, and adolescents.",
//   },
//   {
//     q: "Is my identity kept confidential?",
//     a: "Absolutely. We ensure full confidentiality and anonymity.",
//   },
// ];

// export default function Contact() {
//   const [open, setOpen] = useState<number | null>(null);

//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-10">Contact Us</h1>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* FAQ */}
//           <div>
//             <h2 className="text-2xl mb-4">FAQs</h2>
//             {faqs.map((f, i) => (
//               <div key={i} className="border-b py-3">
//                 <button
//                   className="w-full text-left font-medium"
//                   onClick={() => setOpen(open === i ? null : i)}
//                 >
//                   {f.q}
//                 </button>
//                 {open === i && <p className="text-sm mt-2 text-gray-600">{f.a}</p>}
//               </div>
//             ))}
//           </div>

//           {/* Info */}
//           <div className="text-sm text-gray-700">
//             <p><strong>Email:</strong> info@healthngo.org</p>
//             <p><strong>Phone:</strong> +91 97652XXXXX</p>
//             <p><strong>Address:</strong> Chhatrapati Sambhajinagar, India</p>
//           </div>
//           <li>
//            <a href="/crisis-helpline" className="hover:underline">
//                  Crisis Helpline
//            </a>
//           </li>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import { useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

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

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2d3a] to-[#0f7b6c] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 block mb-3">
            Get In Touch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h1>
          <p className="text-white/65 text-base">
            We'd love to hear from you — whether you want to volunteer, partner, or learn more.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">

          {/* ── FAQ column ── */}
          <div>
            <h2
              className="text-2xl font-light text-[#0d2d3a] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-2">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-xl overflow-hidden bg-white"
                >
                  <button
                    className="w-full text-left font-medium text-sm text-[#0d2d3a] px-5 py-4 flex items-center justify-between gap-3 hover:bg-[#faf8f5] transition-colors"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#e6f5f3] flex items-center justify-center text-[#0f7b6c] text-xs font-bold transition-transform duration-200 ${
                        open === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {open === i && (
                    <div className="px-5 pb-4 pt-0 bg-[#faf8f5]">
                      <p className="text-sm text-[#5a7570] leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Crisis Helpline link — kept from original <li> */}
            <div className="mt-6">
              <ul className="list-none">
                <li>
                  <a
                    href="/crisis-helpline"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#e05c3a] bg-[#fdf0ec] border border-[#e05c3a]/20 px-4 py-2.5 rounded-full hover:bg-[#e05c3a] hover:text-white transition-all duration-200"
                  >
                    🚨 Crisis Helpline
                  </a>
                </li>
              </ul>
            </div>
          
            <div className="mt-6">
                <ul className="list-none">
                  <li>
                    <a
                      href="/volunteer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#6e6b10] bg-[#f4f6c0] border border-[#e05c3a]/20 px-4 py-2.5 rounded-full hover:bg-[#e05c3a] hover:text-white transition-all duration-200"
                    >
                      ❇️ Serve as Volunteer
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          {/* ── Info column ── */}
          <div className="space-y-5">
            <h2
              className="text-2xl font-light text-[#0d2d3a] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Reach Us Directly
            </h2>

            {/* Contact cards */}
            {[
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "info@healthngo.org",
              },
              {
                icon: <Phone size={18} />,
                label: "Phone",
                value: "+91 97652XXXXX",
              },
              {
                icon: <MapPin size={18} />,
                label: "Address",
                value: "Chhatrapati Sambhajinagar, India",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-[#e6f5f3] rounded-xl flex items-center justify-center text-[#0f7b6c] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#5a7570] uppercase tracking-wide mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-[#0d2d3a]">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Office hours */}
            <div className="bg-[#e6f5f3] rounded-xl p-5 border border-[#0f7b6c]/10">
              <p className="text-xs font-semibold text-[#0f7b6c] uppercase tracking-wide mb-3">
                Office Hours
              </p>
              <div className="space-y-1.5 text-sm text-[#5a7570]">
                <div className="flex justify-between">
                  <span>Monday – Friday</span><span>9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span><span>10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span><span>Closed</span>
                </div>
              </div>
            </div>

            {/* Quick contact form */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="text-sm font-semibold text-[#0d2d3a] mb-4">
                Send a Quick Message
              </p>
              <div className="space-y-3">
                <input
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors"
                />
                <textarea
                  rows={3}
                  placeholder="Your message…"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors resize-none"
                />
                <button className="w-full bg-[#0f7b6c] text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-[#0a6358] transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}