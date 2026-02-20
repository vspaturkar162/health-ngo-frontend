// // import Navbar from "../../components/Navbar";


// export default function HowWeWork() {
//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-16 max-w-5xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-6">How We Work</h1>

//         <p className="text-gray-700 mb-6 leading-relaxed">
//           Our approach is rooted in community engagement, evidence-based
//           interventions, and strong partnerships with public systems. We work
//           closely with women, children, and adolescents in urban informal
//           settlements to address health, nutrition, and safety challenges.
//         </p>

//         <h2 className="text-2xl font-light mb-4">Our Approach</h2>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           <li>Community-centred programme design</li>
//           <li>Strengthening public health and protection systems</li>
//           <li>Building local capacity and leadership</li>
//           <li>Using research and data to guide action</li>
//         </ul>

//         <p className="text-gray-700 mt-6 leading-relaxed">
//           By combining grassroots engagement with system-level change, we aim
//           to create sustainable and scalable solutions that improve the lives
//           of women and children.
//         </p>
//       </section>

//     </>
//   );
// }

// import Navbar from "../../components/Navbar";

const approach = [
  {
    icon: "🤝",
    title: "Community-centred programme design",
    desc: "Every intervention starts with listening. We co-design with the communities we serve to ensure relevance and ownership.",
    color: "bg-[#e6f5f3]",
    border: "border-[#0f7b6c]/15",
  },
  {
    icon: "🏛️",
    title: "Strengthening public health and protection systems",
    desc: "We work alongside government institutions, not around them, to create change that outlasts our direct involvement.",
    color: "bg-[#e6eef5]",
    border: "border-[#0f4f7b]/15",
  },
  {
    icon: "🌱",
    title: "Building local capacity and leadership",
    desc: "We invest in training, mentorship, and community leader development so that our impact grows roots.",
    color: "bg-[#edf5e6]",
    border: "border-[#3b6b0f]/15",
  },
  {
    icon: "📊",
    title: "Using research and data to guide action",
    desc: "Evidence drives every decision. We measure, evaluate, and adapt continuously to improve outcomes.",
    color: "bg-[#fdf0ec]",
    border: "border-[#e05c3a]/15",
  },
];

export default function HowWeWork() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0f7b6c] block mb-3">
            Our Methodology
          </span>
          <h1
            className="text-4xl font-light text-[#0d2d3a] leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How We{" "}
            <em className="not-italic font-semibold text-[#0f7b6c]">Work</em>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0f7b6c] to-[#18a290] rounded-full" />
        </div>

        {/* Intro text */}
        <p className="text-[#3a5550] leading-[1.85] text-base mb-10 max-w-3xl">
          Our approach is rooted in community engagement, evidence-based
          interventions, and strong partnerships with public systems. We work
          closely with women, children, and adolescents in urban informal
          settlements to address health, nutrition, and safety challenges.
        </p>

        {/* Approach heading */}
        <h2
          className="text-2xl font-light text-[#0d2d3a] mb-7"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Approach
        </h2>

        {/* Approach cards — keeping original 4 list items as cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {approach.map((item) => (
            <div
              key={item.title}
              className={`${item.color} ${item.border} border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300`}
            >
              <div className="text-3xl mb-3"></div>
              <h3
                className="font-semibold text-[#0d2d3a] text-sm mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-xs text-[#5a7570] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing paragraph */}
        <div className="bg-gradient-to-br from-[#0f7b6c] to-[#18a290] rounded-2xl p-7 text-white">
          <p className="text-white/85 leading-[1.85] text-base">
            By combining grassroots engagement with system-level change, we aim
            to create sustainable and scalable solutions that improve the lives
            of women and children.
          </p>
        </div>
      </section>
    </>
  );
}