// const stats = [
//   { value: "187,839", label: "Pregnant women assisted" },
//   { value: "89,604", label: "Children screened" },
//   { value: "27%", label: "Reduction in child malnutrition" },
//   { value: "94%", label: "Successful referrals" }
// ];

// export default function ImpactStats() {
//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-light mb-10">Reach & Impact</h2>

//         <div className="grid md:grid-cols-4 gap-6">
//           {stats.map((s) => (
//             <div key={s.label} className="bg-[#fdecec] p-6 rounded">
//               <div className="text-3xl font-bold">{s.value}</div>
//               <div className="text-sm mt-2">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: "👩",
    number: 250000,
    suffix: "+",
    display: "2.5L+",
    label: "Women reached through health programmes",
    color: "from-[#0f7b6c] to-[#18a290]",
  },
  {
    icon: "👶",
    number: 80000,
    suffix: "+",
    display: "80K+",
    label: "Children supported through nutrition & care",
    color: "from-[#e05c3a] to-[#f28464]",
  },
  {
    icon: "🏘️",
    number: 150,
    suffix: "+",
    display: "150+",
    label: "Urban communities actively engaged",
    color: "from-[#0f4f7b] to-[#1a6e9e]",
  },
  {
    icon: "📋",
    number: 12,
    suffix: "",
    display: "12",
    label: "Active SNEHA Centres across the city",
    color: "from-[#6b0f7b] to-[#8e1a9e]",
  },
  {
    icon: "🌐",
    number: 22,
    suffix: "+",
    display: "22+",
    label: "Years of continuous community service",
    color: "from-[#3b6b0f] to-[#4e8e1a]",
  },
  {
    icon: "🤝",
    number: 98,
    suffix: "%",
    display: "98%",
    label: "Programme beneficiary satisfaction rate",
    color: "from-[#7b6c0f] to-[#a29018]",
  },
];

function useInView(ref: React.RefObject<Element>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

export default function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref);

  return (
    <section className="bg-gradient-to-br from-[#0d2d3a] to-[#0f3d2e] py-20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0f7b6c]/20 blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#e05c3a]/10 blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#ffddb4]/80 block mb-3">Our Reach</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Impact That Speaks for Itself
          </h2>
          <p className="text-white/55 max-w-xl mx-auto leading-relaxed">
            Over two decades of sustained effort — measured in lives transformed, communities strengthened, and systems improved.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group bg-white/5 border border-white/10 rounded-2xl p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.display}
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-white/50 text-sm mb-5">Want to know more about our reach and impact?</p>
          <a
            href="/about/research"
            className="inline-flex items-center gap-2 border border-white/25 text-white/80 text-sm font-medium px-6 py-3 rounded-full hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            View Research & Evaluation →
          </a>
        </div>
      </div>
    </section>
  );
}