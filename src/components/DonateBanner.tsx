// export default function DonateBanner() {
//   return (
//     <section className="relative bg-cover bg-center py-20"
//       style={{ backgroundImage: "url('/donate-bg.jpg')" }}>
//       <div className="bg-white/80 max-w-md mx-auto p-6 text-center rounded">
//         <h2 className="text-2xl font-light mb-4">Support Us</h2>
//         <p className="text-sm mb-4">
//           Every woman and child deserves a safe and healthy life.
//         </p>
//         <p className="text-gray-700 leading-relaxed mb-4 bg-sky-100 p-5 rounded-lg">
//           Your support helps us reach women and children who lack access to
//           essential healthcare, nutrition, and protection services. Every
//           contribution strengthens community-based programmes that create
//           lasting and measurable impact.
//           <br />
//           By partnering with us, you are not just donating — you are helping
//           build healthier families, safer communities, and a future where
//           every child and woman has the opportunity to thrive.
//         </p>
//         <a
//           href="/donate"
//           className="inline-block bg-pink-600 text-white px-6 py-2 rounded"
//         >
//           Donate
//         </a>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const amounts = ["₹500", "₹1,000", "₹2,500", "₹5,000"];

const impactMap: Record<string, string> = {
  "₹500": "provides a nutrition kit for one child for a month",
  "₹1,000": "funds a community health worker visit for a week",
  "₹2,500": "supports a woman through antenatal care",
  "₹5,000": "equips a SNEHA Centre for one day",
};

export default function DonateBanner() {
  const [selected, setSelected] = useState("₹1,000");

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#e05c3a] to-[#c0392b] overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
      </div>
      

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
          <Heart size={28} className="text-white fill-white" />
        </div>

        <span className="text-xs font-semibold tracking-widest uppercase text-white/70 block mb-4">Make a Difference</span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Every Contribution <em className="not-italic text-[#ffddb4]">Changes a Life</em>
        </h2>

        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Your support helps us reach women and children who lack access to essential healthcare, nutrition, and protection.
          By giving, you help build healthier families and safer communities.
        </p>

        {/* Amount Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelected(amount)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 ${
                selected === amount
                  ? "bg-white text-[#e05c3a] border-white shadow-lg"
                  : "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10"
              }`}
            >
              {amount}
            </button>
          ))}
        </div>

        {/* Impact text */}
        {selected && (
          <p className="text-white/65 text-sm mb-10 italic">
            {selected} {impactMap[selected]}
          </p>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 bg-white text-[#e05c3a] font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 text-base"
          >
            <Heart size={16} className="fill-[#e05c3a]" /> Donate {selected}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-200 text-base"
          >
            Partner With Us
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/50 text-xs">
          <span className="flex items-center gap-1.5">✓ 80G Tax Exemption</span>
          <span className="flex items-center gap-1.5">✓ FCRA Registered</span>
          <span className="flex items-center gap-1.5">✓ Secure Payment</span>
          <span className="flex items-center gap-1.5">✓ Annual Reports Published</span>
        </div>
      </div>
    </section>
  );
}