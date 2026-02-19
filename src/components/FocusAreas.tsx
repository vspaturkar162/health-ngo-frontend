// const focusAreas = {
//   "Maternal and Child Health": [
//     "Aahar Programme",
//     "SNEHA Centre Programme",
//     "Building Bridges Programme",
//     "Healthy Cities Programme"
//   ],
//   "Public System Partnership": [
//     "Government Health Systems",
//     "Urban Health Missions"
//   ],
//   "Adolescent Health": [
//     "Empowerment, Health and Sexuality of Adolescents"
//   ],
//   "Prevention of Violence": [
//     "Violence against Women",
//     "Child Protection"
//   ],
//   "Other Initiatives": [
//     "Palliative Care",
//     "Nurse Aide Programme",
//     "COVID-19 Relief & Response"
//   ]
// };

// export default function FocusAreas() {
//   return (
//     <section className="bg-[#5a96d6] text-white py-16">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 text-sm">
//         {Object.entries(focusAreas).map(([title, items]) => (
//           <div key={title}>
//             <h3 className="font-semibold mb-3">{title}</h3>
//             <ul className="space-y-1">
//               {items.map(item => (
//                 <li key={item} className="opacity-90 hover:underline cursor-pointer">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

const focusAreas = [
  {
    icon: "🤱",
    title: "Maternal & Child Health",
    desc: "Comprehensive support for mothers and newborns through evidence-based care and community health workers.",
    items: ["Aahar Nutrition Programme", "SNEHA Centre Programme", "Building Bridges Programme", "Healthy Cities Initiative"],
    href: "/work#maternal",
    accent: "#0f7b6c",
    bg: "bg-[#e6f5f3]",
  },
  {
    icon: "🏛️",
    title: "Public System Partnership",
    desc: "Strengthening government health systems to deliver quality care at scale and improve accountability.",
    items: ["Government Health Systems", "Urban Health Mission", "PHC Strengthening"],
    href: "/work#systems",
    accent: "#0f4f7b",
    bg: "bg-[#e6eef5]",
  },
  {
    icon: "🌸",
    title: "Adolescent Health",
    desc: "Empowering young people with knowledge about health, sexuality, and life skills for informed choices.",
    items: ["Empowerment & Health", "Adolescent Sexuality Education", "Life Skills Training"],
    href: "/work#adolescent",
    accent: "#7b0f4f",
    bg: "bg-[#f5e6f0]",
  },
  {
    icon: "🛡️",
    title: "Prevention of Violence",
    desc: "Community-led interventions to protect women and children from violence, ensuring safety and dignity.",
    items: ["Violence Against Women", "Child Protection Services", "Crisis Support"],
    href: "/work#violence",
    accent: "#e05c3a",
    bg: "bg-[#fdf0ec]",
  },
  {
    icon: "💊",
    title: "Other Key Initiatives",
    desc: "Addressing critical healthcare gaps through innovative programmes and emergency response efforts.",
    items: ["Palliative Care Programme", "Nurse Aide Training", "COVID-19 Relief & Response"],
    href: "/work#initiatives",
    accent: "#6b0f7b",
    bg: "bg-[#f3e6f5]",
  },
  {
    icon: "📊",
    title: "Research & Evaluation",
    desc: "Generating evidence to refine our approach, share learnings, and influence policy for system-wide change.",
    items: ["Community-Based Research", "Programme Evaluation", "Policy Advocacy"],
    href: "/about/research",
    accent: "#3b6b0f",
    bg: "bg-[#edf5e6]",
  },
];

export default function FocusAreas() {
  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Areas of Focus</h2>
          <p className="section-desc max-w-xl mx-auto">
            Comprehensive programmes addressing the most critical health and protection needs of women, children, and adolescents in urban communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-300 rounded-l-2xl"
                style={{ backgroundColor: area.accent }}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 ${area.bg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {area.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#0d2d3a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {area.title}
              </h3>
              <p className="text-[#5a7570] text-sm leading-relaxed mb-4">{area.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#5a7570]">
                    <span className="text-xs" style={{ color: area.accent }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to={area.href}
                className="text-sm font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                style={{ color: area.accent }}
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0f7b6c] to-[#18a290] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Want to understand how we work?
            </h3>
            <p className="text-white/75 text-sm max-w-lg">
              Our approach combines grassroots engagement, public system partnerships, and evidence-based design to create lasting change.
            </p>
          </div>
          <Link
            to="/about/how-we-work"
            className="flex-shrink-0 bg-white text-[#0f7b6c] font-semibold px-7 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            How We Work →
          </Link>
        </div>
      </div>
    </section>
  );
}