// // import Navbar from "../../components/Navbar";

// export default function Research() {
//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-16 max-w-5xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-6">
//           Research & Evaluation
//         </h1>

//         <p className="text-gray-700 mb-6 leading-relaxed">
//           Research and evaluation form the backbone of our work. We believe
//           that strong evidence is essential for designing effective
//           interventions and influencing policy and practice.
//         </p>

//         <h2 className="text-2xl font-light mb-4">What We Do</h2>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           <li>Conduct operational and implementation research</li>
//           <li>Evaluate programme outcomes and impact</li>
//           <li>Document best practices and learnings</li>
//           <li>Share evidence with policymakers and practitioners</li>
//         </ul>

//         <p className="text-gray-700 mt-6 leading-relaxed">
//           Our research partnerships with academic institutions and public
//           agencies help ensure that our programmes remain relevant,
//           accountable, and impactful.
//         </p>
//       </section>
//     </>
//   );
// }

// import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
const activities = [
  {
    icon: "🔬",
    title: "Conduct operational and implementation research",
    desc: "Field-based research that generates real-world evidence on what works in community health settings.",
    color: "bg-[#e6eef5]",
  },
  {
    icon: "📈",
    title: "Evaluate programme outcomes and impact",
    desc: "Rigorous evaluation frameworks that measure change at individual, household, and community levels.",
    color: "bg-[#e6f5f3]",
  },
  {
    icon: "📝",
    title: "Document best practices and learnings",
    desc: "Capturing knowledge from the field so it can be adapted, replicated, and scaled by others.",
    color: "bg-[#edf5e6]",
  },
  {
    icon: "🏛️",
    title: "Share evidence with policymakers and practitioners",
    desc: "Translating research into policy briefs, publications, and advocacy that drives systemic change.",
    color: "bg-[#fdf0ec]",
  },
];

export default function Research() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/about`)
      .then(res => res.json())
      .then(data => setContent(data?.research || ""));
  }, []);
  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0f7b6c] block mb-3">
            Knowledge & Evidence
          </span>
          <h1
            className="text-4xl font-light text-[#0d2d3a] leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Research &{" "}
            <em className="not-italic font-semibold text-[#0f7b6c]">
              Evaluation
            </em>
          </h1>
          <p>{content}</p>;
          <div className="w-16 h-1 bg-gradient-to-r from-[#0f7b6c] to-[#18a290] rounded-full" />
        </div>

        {/* Intro */}
        <p className="text-[#3a5550] leading-[1.85] text-base mb-10 max-w-3xl">
          Research and evaluation form the backbone of our work. We believe
          that strong evidence is essential for designing effective
          interventions and influencing policy and practice.
        </p>

        {/* What We Do heading */}
        <h2
          className="text-2xl font-light text-[#0d2d3a] mb-7"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What We Do
        </h2>

        {/* Activity cards — original 4 list items as cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {activities.map((item) => (
            <div
              key={item.title}
              className={`${item.color} border border-white rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300`}
            >
              <div className="text-3xl mb-3"></div>
              <h3
                className="font-semibold text-[#0d2d3a] text-sm mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-xs text-[#5a7570] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing paragraph — preserved exactly */}
        <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm flex gap-5 items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-[#e6f5f3] rounded-xl flex items-center justify-center text-2xl">
            🤝
          </div>
          <p className="text-[#3a5550] leading-[1.85] text-base">
            Our research partnerships with academic institutions and public
            agencies help ensure that our programmes remain relevant,
            accountable, and impactful.
          </p>
        </div>

        {/* Resources link */}
        <div className="mt-8 text-center">
          <a
            href="/resources"
            className="inline-flex items-center gap-2 bg-[#0f7b6c] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#0a6358] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm"
          >
            View Publications & Reports →
          </a>
        </div>
      </section>
    </>
  );
}