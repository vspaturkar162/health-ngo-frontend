// export default function OurWorkPreview() {
//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
//         <div>
//           <h2 className="text-3xl font-light mb-4">Our Work</h2>
//           <p className="text-sm text-gray-600 mb-4">
//             We work with communities and public systems to improve
//             health outcomes for women and children.
//           </p>
//           <button className="border px-5 py-2">Know More</button>
//         </div>
//         <img src="/childrens.png" className="rounded shadow" alt ="child"/>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

const programs = [
  {
    icon: "🍎",
    name: "Aahar Nutrition Programme",
    desc: "Addressing malnutrition among children under 5 and pregnant women through community-based nutrition management.",
    stat: "50,000+ children",
    color: "bg-[#fdf0ec]",
  },
  {
    icon: "🏠",
    name: "SNEHA Centre Programme",
    desc: "Safe spaces and comprehensive health services for women and children in vulnerable urban communities.",
    stat: "12 active centres",
    color: "bg-[#e6f5f3]",
  },
  {
    icon: "🤝",
    name: "Building Bridges",
    desc: "Connecting communities with public health services to improve utilisation and health outcomes at scale.",
    stat: "150+ communities",
    color: "bg-[#e6eef5]",
  },
  {
    icon: "🌇",
    name: "Healthy Cities Programme",
    desc: "Creating urban environments that support the health and well-being of all residents through systems-level change.",
    stat: "5 cities engaged",
    color: "bg-[#edf5e6]",
  },
];

export default function OurWorkPreview() {
  return (
    <section className="py-20 bg-[#e6f5f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="section-tag">Our Programmes</span>
            <h2 className="section-title">Flagship Programmes Making Real Difference</h2>
            <p className="section-desc mb-8 leading-relaxed">
              Each programme is designed with communities at the centre, ensuring relevance, ownership, and lasting impact through evidence-based design and grassroots engagement.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/work" className="btn-coral">
                Explore All Programmes
              </Link>
              <Link to="/about/research" className="inline-flex items-center gap-2 text-[#0f7b6c] font-medium text-sm hover:underline">
                Read Research Reports →
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { num: "22+", label: "Years" },
                { num: "2.5L+", label: "Women" },
                { num: "98%", label: "Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="text-center bg-white rounded-xl p-4 border border-[#0f7b6c]/10">
                  <p className="text-2xl font-bold text-[#0f7b6c]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
                  <p className="text-xs text-[#5a7570] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right programme cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programs.map((prog) => (
              <div
                key={prog.name}
                className={`${prog.color} rounded-2xl p-5 border border-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-3xl mb-3">{prog.icon}</div>
                <h4 className="font-semibold text-[#0d2d3a] text-sm mb-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {prog.name}
                </h4>
                <p className="text-xs text-[#5a7570] leading-relaxed mb-3">{prog.desc}</p>
                <span className="text-xs font-semibold text-[#0f7b6c] bg-white px-2.5 py-1 rounded-full">
                  {prog.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}