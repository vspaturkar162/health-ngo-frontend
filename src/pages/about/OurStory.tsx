// // import Navbar from "../../components/Navbar";

// export default function OurStory() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <section className="py-16 max-w-5xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-4">Our Story</h1>
//         <p className="text-gray-700 mb-4 leading-relaxed">
//         HealthForAll was founded with a simple yet powerful belief —
//         that access to good health, safety, and dignity should not be
//         determined by where a person is born or the resources they have.
//         Our journey began when a group of healthcare professionals,
//         social workers, and community volunteers came together after
//         witnessing preventable health challenges faced daily by women
//         and children in underserved urban communities.
//       </p>

//       <p className="text-gray-700 mb-4 leading-relaxed">
//         What inspired us was not just the scale of the problems, but the
//         strength and resilience of the communities themselves. Mothers
//         walking long distances for basic care, adolescents navigating
//         health challenges without guidance, and frontline workers doing
//         their best with limited resources showed us that meaningful
//         change was possible — if communities were supported, listened
//         to, and empowered.
//       </p>
//       <p className="text-gray-700 mb-4 leading-relaxed">
//         From small health camps and awareness sessions, our work has
//         grown into structured programmes focused on preventive
//         healthcare, nutrition, protection, research, and community
//         leadership. We work closely with local partners, public health
//         systems, and grassroots organisations to ensure our
//         interventions are culturally sensitive, evidence-based, and
//         sustainable.
//       </p>

//       <p className="text-gray-700 mb-4 leading-relaxed">
//         Our goal is to build healthier and safer communities by
//         strengthening systems and supporting individuals — especially
//         women, children, and adolescents — to make informed choices
//         about their health and well-being. We believe lasting impact
//         comes not from short-term solutions, but from long-term
//         partnerships and shared responsibility.
//       </p>
//       <p className="text-gray-700 leading-relaxed">
//         This journey would not be possible without the trust of the
//         communities we serve, the dedication of our field teams, and the
//         support of our partners, donors, researchers, and volunteers.
//         Together, we continue to work towards a future where everyone
//         has the opportunity to live a healthy, dignified life.
//       </p>

//       </section>
//     </>
//   );
// }

// import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
export default function OurStory() {
  const [story, setStory] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/about`)
      .then(res => res.json())
      .then(data => setStory(data?.story || ""));
  }, []);
  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-5xl mx-auto px-6">

        {/* Section heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0f7b6c] block mb-3">
            Our Story
          </span>
          <h1
            className="text-4xl font-light text-[#0d2d3a] mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Born From a{" "}
            <em className="not-italic font-semibold text-[#0f7b6c]">
              Community's Need
            </em>
          </h1>
          <h2 className="text-lg text-[#3a5550] leading-relaxed">{story}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0f7b6c] to-[#18a290] rounded-full" />
        </div>

        {/* Main content — two-column on md+ */}
        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* ── Left: story text ── */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-[#3a5550] leading-[1.85] text-base">
              HealthForAll was founded with a simple yet powerful belief —
              that access to good health, safety, and dignity should not be
              determined by where a person is born or the resources they have.
              Our journey began when a group of healthcare professionals,
              social workers, and community volunteers came together after
              witnessing preventable health challenges faced daily by women
              and children in underserved urban communities.
            </p>

            <p className="text-[#3a5550] leading-[1.85] text-base">
              What inspired us was not just the scale of the problems, but the
              strength and resilience of the communities themselves. Mothers
              walking long distances for basic care, adolescents navigating
              health challenges without guidance, and frontline workers doing
              their best with limited resources showed us that meaningful
              change was possible — if communities were supported, listened
              to, and empowered.
            </p>

            <p className="text-[#3a5550] leading-[1.85] text-base">
              From small health camps and awareness sessions, our work has
              grown into structured programmes focused on preventive
              healthcare, nutrition, protection, research, and community
              leadership. We work closely with local partners, public health
              systems, and grassroots organisations to ensure our
              interventions are culturally sensitive, evidence-based, and
              sustainable.
            </p>

            <p className="text-[#3a5550] leading-[1.85] text-base">
              Our goal is to build healthier and safer communities by
              strengthening systems and supporting individuals — especially
              women, children, and adolescents — to make informed choices
              about their health and well-being. We believe lasting impact
              comes not from short-term solutions, but from long-term
              partnerships and shared responsibility.
            </p>

            <p className="text-[#3a5550] leading-[1.85] text-base">
              This journey would not be possible without the trust of the
              communities we serve, the dedication of our field teams, and the
              support of our partners, donors, researchers, and volunteers.
              Together, we continue to work towards a future where everyone
              has the opportunity to live a healthy, dignified life.
            </p>
          </div>

          {/* ── Right: milestones & stat card ── */}
          <div className="md:col-span-2 space-y-5">

            {/* Stat highlight */}
            <div className="bg-gradient-to-br from-[#0f7b6c] to-[#18a290] rounded-2xl p-7 text-white shadow-lg">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
                Impact at a Glance
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "22+", label: "Years" },
                  { num: "2.5L+", label: "Women" },
                  { num: "150+", label: "Communities" },
                  { num: "98%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-2xl font-bold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.num}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#5a7570] mb-5">
                Key Milestones
              </p>
              <div className="space-y-4">
                {[
                  { year: "2002", text: "Founded with first community health centre." },
                  { year: "2006", text: "Launched Aahar Nutrition Programme." },
                  { year: "2010", text: "Expanded to 5 cities." },
                  { year: "2016", text: "Introduced the SNEHA Centre model." },
                  { year: "2020", text: "Led COVID-19 relief for 50,000+ families." },
                  { year: "2024", text: "Crossed 2.5L women reached." },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-11 h-11 bg-[#e6f5f3] rounded-full flex items-center justify-center text-xs font-bold text-[#0f7b6c]">
                      {item.year.slice(2)}
                    </span>
                    <div className="pt-2.5 border-l-2 border-dashed border-[#0f7b6c]/20 pl-4 flex-1">
                      <p className="text-xs text-[#5a7570] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}