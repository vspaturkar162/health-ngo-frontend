// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Work() {
//   return (
//     <>
//       {/* <Navbar /> */}

//       {/* Hero */}
//       <section className="bg-[#5b7fa6] text-white py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h1 className="text-4xl font-light mb-4">Our Work</h1>
//           <p className="max-w-3xl text-sm leading-relaxed">
//             We work with vulnerable communities, public health and safety systems
//             to develop evidence-based models that address urban health challenges,
//             with a strong focus on women and children.
//           </p>
//         </div>
//       </section>

//       {/* Approach */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-light mb-10">
//             Women & Children at the Centre of Change
//           </h2>

//           <div className="grid md:grid-cols-5 gap-6 text-center">
//             {[
//               {
//                 title: "Pregnancy",
//                 desc: "Improving maternal and newborn healthcare services."
//               },
//               {
//                 title: "Birth",
//                 desc: "Encouraging safe institutional deliveries."
//               },
//               {
//                 title: "Childhood",
//                 desc: "Preventing malnutrition and improving child health."
//               },
//               {
//                 title: "Adolescence",
//                 desc: "Education on nutrition, gender equity and wellbeing."
//               },
//               {
//                 title: "Adulthood",
//                 desc: "Empowering communities to prevent violence."
//               }
//             ].map((item) => (
//               <div key={item.title} className="p-4">
//                 <div className="w-20 h-20 mx-auto rounded-full bg-[#e8eef6] mb-4" />
//                 <h3 className="font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partnerships */}
//       <section className="bg-[#f7f9fc] py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-light mb-10">
//             Scaling Through Partnerships
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
//             <div>
//               <h3 className="font-semibold mb-2">Government Partnerships</h3>
//               <p>
//                 We work closely with public health systems and government agencies
//                 to strengthen service delivery and ensure sustainability of
//                 community health programmes.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-2">Funding Partnerships</h3>
//               <p>
//                 We collaborate with corporate houses, donor agencies and
//                 foundations to scale proven models and maximise impact.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-2">NGO Partnerships</h3>
//               <p>
//                 We support non-profit organisations with technical expertise and
//                 capacity building to implement effective health interventions.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-2">Research Partnerships</h3>
//               <p>
//                 Our research collaborations help generate evidence to inform
//                 policy, practice and innovation in public health.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const lifecycle = [
  {
    title: "Pregnancy",
    desc: "Improving maternal and newborn healthcare services.",
    icon: "🤰",
    color: "bg-[#fdf0ec]",
    border: "border-[#e05c3a]/15",
  },
  {
    title: "Birth",
    desc: "Encouraging safe institutional deliveries.",
    icon: "👶",
    color: "bg-[#e6f5f3]",
    border: "border-[#0f7b6c]/15",
  },
  {
    title: "Childhood",
    desc: "Preventing malnutrition and improving child health.",
    icon: "🧒",
    color: "bg-[#edf5e6]",
    border: "border-[#3b6b0f]/15",
  },
  {
    title: "Adolescence",
    desc: "Education on nutrition, gender equity and wellbeing.",
    icon: "🌱",
    color: "bg-[#f3e6f5]",
    border: "border-[#6b0f7b]/15",
  },
  {
    title: "Adulthood",
    desc: "Empowering communities to prevent violence.",
    icon: "👩",
    color: "bg-[#e6eef5]",
    border: "border-[#0f4f7b]/15",
  },
];

const partnerships = [
  {
    title: "Government Partnerships",
    desc: "We work closely with public health systems and government agencies to strengthen service delivery and ensure sustainability of community health programmes.",
    icon: "🏛️",
    color: "bg-[#e6f5f3]",
  },
  {
    title: "Funding Partnerships",
    desc: "We collaborate with corporate houses, donor agencies and foundations to scale proven models and maximise impact.",
    icon: "💼",
    color: "bg-[#fdf0ec]",
  },
  {
    title: "NGO Partnerships",
    desc: "We support non-profit organisations with technical expertise and capacity building to implement effective health interventions.",
    icon: "🤝",
    color: "bg-[#edf5e6]",
  },
  {
    title: "Research Partnerships",
    desc: "Our research collaborations help generate evidence to inform policy, practice and innovation in public health.",
    icon: "🔬",
    color: "bg-[#e6eef5]",
  },
];

export default function Work() {
  return (
    <>
      {/* <Navbar /> */}

      {/* Hero — original bg-[#5b7fa6] preserved as gradient base */}
      <section className="bg-gradient-to-br from-[#3a5f80] via-[#5b7fa6] to-[#0f7b6c] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 block mb-4">
            What We Do
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Work
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/80">
            We work with vulnerable communities, public health and safety systems
            to develop evidence-based models that address urban health challenges,
            with a strong focus on women and children.
          </p>
        </div>
      </section>

      {/* Women & Children lifecycle section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0f7b6c] block mb-3">
              Our Approach
            </span>
            <h2
              className="text-3xl font-light text-[#0d2d3a] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Women &amp; Children at the Centre of Change
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0f7b6c] to-[#18a290] rounded-full mx-auto" />
          </div>

          {/* 5 lifecycle cards — original content kept */}
          <div className="grid md:grid-cols-5 gap-5">
            {lifecycle.map((item, i) => (
              <div
                key={item.title}
                className={`group ${item.color} ${item.border} border rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
              >
                {/* Step number */}
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#0f7b6c] mx-auto mb-3 shadow-sm">
                  {i + 1}
                </div>
                {/* Icon (replaces original empty circle div) */}
                <div className="text-3xl mb-3"></div>
                <h3
                  className="font-semibold text-[#0d2d3a] mb-2 text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-[#5a7570] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Connecting line */}
          <div className="flex justify-center mt-6">
            <p className="text-xs text-[#5a7570] bg-[#faf8f5] px-4 py-2 rounded-full border border-gray-100">
              Integrated care across the full lifecycle of women and children
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships section — original bg-[#f7f9fc] preserved */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0f7b6c] block mb-3">
              How We Scale
            </span>
            <h2
              className="text-3xl font-light text-[#0d2d3a] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Scaling Through Partnerships
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0f7b6c] to-[#18a290] rounded-full mx-auto" />
          </div>

          {/* 4 partnership cards — all original h3 + p text kept */}
          <div className="grid md:grid-cols-2 gap-5">
            {partnerships.map((p) => (
              <div
                key={p.title}
                className={`${p.color} rounded-2xl p-7 border border-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{p.icon}</div>
                  <div>
                    <h3
                      className="font-semibold text-[#0d2d3a] mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#5a7570] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0f7b6c] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#0a6358] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Partner With Us →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}