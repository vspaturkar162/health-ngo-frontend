
// import { useState } from "react";
// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Donate() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-6">Donate</h1>
//         <p className="mb-10 text-gray-600">
//           Your contribution helps improve the health and safety of women and children.
//         </p>
//         <p className="text-gray-700 leading-relaxed mb-4 bg-gray-100 p-5 rounded-lg">
//           Your donation directly supports community-based health programmes
//           that improve access to healthcare, nutrition, and protection for
//           women, children, and adolescents in underserved communities.
//           <br />
//           Every contribution, big or small, helps strengthen sustainable
//           initiatives and enables us to reach those who need support the
//           most. Together, we can create lasting change.
//         </p>

//         <button
//           onClick={() => setOpen(true)}
//           className="bg-pink-600 text-white px-6 py-3 rounded"
//         >
//           Donate Now
//         </button>
//       </section>

//       {/* MODAL */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-[#eef3ff] p-8 rounded-lg w-full max-w-xl relative">
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-3 right-4 text-xl"
//             >
//               ✕
//             </button>

//             <h2 className="text-xl mb-6">Donor Information</h2>

//             <form className="grid grid-cols-2 gap-4 text-sm">
//               <input placeholder="First Name" className="input" />
//               <input placeholder="Last Name" className="input" />
//               <input placeholder="Email" className="input" />
//               <input placeholder="Mobile Number" className="input" />
//               <input placeholder="Address" className="input col-span-2" />
//               <input placeholder="City" className="input" />
//               <input placeholder="PIN Code" className="input" />
//               <input placeholder="PAN Card" className="input col-span-2" />

//               <label className="col-span-2 flex items-start gap-2 text-xs">
//                 <input type="checkbox" />
//                 I declare that I am an Indian citizen and this donation is from my own funds.
//               </label>

//               <button className="col-span-2 bg-blue-600 text-white py-2 rounded">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// }

import { useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Donate() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("₹1,000");

  const amounts = ["₹500", "₹1,000", "₹2,500", "₹5,000"];

  const impactMap: Record<string, string> = {
    "₹500": "provides a nutrition kit for one child for a month",
    "₹1,000": "funds a community health worker visit for a week",
    "₹2,500": "supports a woman through antenatal care",
    "₹5,000": "equips a SNEHA Centre for one full day",
  };

  return (
    <>
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#c0392b] to-[#e05c3a] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 backdrop-blur-sm border border-white/20">
            ❤️
          </div>
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/60 block mb-3">
            Make a Difference
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Donate
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Your contribution helps improve the health and safety of women and children.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Description */}
          <div>
            <span className="section-tag text-[#0f7b6c] text-xs font-semibold tracking-widest uppercase block mb-3">
              Why Give
            </span>
            <h2
              className="text-3xl font-light text-[#0d2d3a] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Contribution <em className="not-italic font-semibold text-[#0f7b6c]">Changes a Life</em>
            </h2>

            {/* Original description paragraph — kept exactly */}
            <p className="text-[#3a5550] leading-relaxed mb-5 bg-[#e6f5f3] p-5 rounded-2xl border border-[#0f7b6c]/10">
              Your donation directly supports community-based health programmes
              that improve access to healthcare, nutrition, and protection for
              women, children, and adolescents in underserved communities.
              <br />
              Every contribution, big or small, helps strengthen sustainable
              initiatives and enables us to reach those who need support the
              most. Together, we can create lasting change.
            </p>

            {/* Amount selector */}
            <div className="mb-5">
              <p className="text-sm font-medium text-[#0d2d3a] mb-3">Select an Amount</p>
              <div className="flex flex-wrap gap-3">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelected(amt)}
                    className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 ${
                      selected === amt
                        ? "bg-[#e05c3a] text-white border-[#e05c3a] shadow-md"
                        : "border-gray-200 text-[#5a7570] hover:border-[#e05c3a] hover:text-[#e05c3a]"
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
              {selected && (
                <p className="text-xs text-[#0f7b6c] mt-3 bg-[#e6f5f3] px-4 py-2 rounded-full inline-block">
                  💡 {selected} {impactMap[selected]}
                </p>
              )}
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3 mt-6">
              {["80G Tax Exemption", "FCRA Registered", "Secure Payment"].map((t) => (
                <span
                  key={t}
                  className="text-xs text-[#5a7570] border border-gray-200 px-3 py-1.5 rounded-full"
                >
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA + testimonial */}
          <div className="space-y-5">
            {/* Donate button — original kept, just styled */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center">
              <p className="text-[#5a7570] text-sm mb-2">You are donating</p>
              <p
                className="text-4xl font-bold text-[#e05c3a] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selected}
              </p>
              <button
                onClick={() => setOpen(true)}
                className="w-full bg-gradient-to-r from-[#e05c3a] to-[#c0392b] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-base"
              >
                ❤️ Donate Now
              </button>
              <p className="text-xs text-[#5a7570] mt-3">SSL Secured · Instant Confirmation</p>
            </div>

            {/* Testimonial */}
            <div className="bg-[#fdf0ec] rounded-2xl p-6 border border-[#e05c3a]/10">
              <p className="text-sm text-[#5a7570] italic leading-relaxed mb-3">
                "The SNEHA Centre was the only place I could go when I had nowhere else to turn. They helped me deliver safely and get my daughter vaccinated on schedule."
              </p>
              <p className="text-xs font-semibold text-[#0d2d3a]">— Savita, Programme Beneficiary, 2024</p>
            </div>

            {/* Impact grid */}
            <div className="bg-gradient-to-br from-[#0f7b6c] to-[#18a290] rounded-2xl p-6 text-white">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Your Impact</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "2.5L+", label: "Women reached" },
                  { num: "80K+", label: "Children supported" },
                  { num: "150+", label: "Communities" },
                  { num: "22 yrs", label: "Of service" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-xl font-bold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.num}
                    </p>
                    <p className="text-white/60 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL — all original fields kept exactly ── */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-xl relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-5 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors text-sm"
            >
              ✕
            </button>

            <h2
              className="text-xl font-semibold text-[#0d2d3a] mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Donor Information
            </h2>
            <p className="text-sm text-[#5a7570] mb-6">Donating: <strong className="text-[#e05c3a]">{selected}</strong></p>

            <form className="grid grid-cols-2 gap-4 text-sm">
              <input
                placeholder="First Name"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0f7b6c] transition-colors"
              />
              <input
                placeholder="Last Name"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0f7b6c] transition-colors"
              />
              <input
                placeholder="Email"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0f7b6c] transition-colors"
              />
              <input
                placeholder="Mobile Number"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0f7b6c] transition-colors"
              />
              <input
                placeholder="Address"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0f7b6c] col-span-2 transition-colors"
              />
              <input
                placeholder="City"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0f7b6c] transition-colors"
              />
              <input
                placeholder="PIN Code"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0f7b6c] transition-colors"
              />
              <input
                placeholder="PAN Card"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0f7b6c] col-span-2 transition-colors"
              />

              <label className="col-span-2 flex items-start gap-2.5 text-xs text-[#5a7570] bg-[#faf8f5] p-3 rounded-xl">
                <input type="checkbox" className="mt-0.5 accent-[#0f7b6c]" />
                I declare that I am an Indian citizen and this donation is from my own funds.
              </label>

              <button className="col-span-2 bg-gradient-to-r from-[#e05c3a] to-[#c0392b] text-white font-bold py-3.5 rounded-xl hover:shadow-lg transition-all">
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}