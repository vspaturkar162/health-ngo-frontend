// import { useEffect } from "react";
// import api from "../services/api";

// import Hero from "../components/Hero";
// import FocusAreas from "../components/FocusAreas";
// import ImpactStats from "../components/ImpactStats";
// import DonateBanner from "../components/DonateBanner";
// import Footer from "../components/Footer";
// import BlogPreview from "../components/BlogPreview";

// export default function Home() {
//   useEffect(() => {
//     api
//       .get("/health")
//       .then((res) => {
//         console.log("✅ Backend connected:", res.data);
//       })
//       .catch((err) => {
//         console.error("❌ Backend connection failed:", err);
//       });
//   }, []);

//   return (
//   <>
//     <Hero />

//     {/* NGO Introduction Section */}
//     <section className="max-w-6xl mx-auto px-6 py-16 text-center">
//       <h2 className="text-3xl font-semibold mb-6">
//         Empowering Communities Through Health & Dignity
//       </h2>

//       <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
//         HealthForAll is a community-driven non-governmental organisation
//         committed to improving the health, safety, and well-being of
//         women, children, and adolescents living in vulnerable urban
//         settlements. We work at the grassroots level to strengthen
//         public health systems, promote preventive care, and create
//         sustainable change through community engagement.
//       </p>

//       <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
//         Through evidence-based interventions, partnerships with public
//         institutions, and dedicated outreach teams, we aim to ensure
//         that every individual—regardless of socio-economic status—
//         has access to quality healthcare, protection, and opportunities
//         to thrive.
//       </p>
//     </section>

//     <ImpactStats />
//     <BlogPreview />
//     <DonateBanner />
//     <FocusAreas />
//     <Footer />
//   </>
// );
// }

import { useEffect } from "react";
import api from "../services/api";

import Hero from "../components/Hero";
import FocusAreas from "../components/FocusAreas";
import ImpactStats from "../components/ImpactStats";
import DonateBanner from "../components/DonateBanner";
import Footer from "../components/Footer";
import BlogPreview from "../components/BlogPreview";
import OurWorkPreview from "../components/OurWorkPreview";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    api
      .get("/health")
      .then((res) => console.log("✅ Backend connected:", res.data))
      .catch((err) => console.error("❌ Backend connection failed:", err));
  }, []);

  return (
    <>
      
      <Hero />

      {/* NGO Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">
                Empowering Communities Through <em style={{ fontStyle: "italic" }}>Health & Dignity</em>
              </h2>
              <p className="section-desc leading-relaxed mb-5">
                HealthForAll is a community-driven non-governmental organisation committed to improving the health, safety,
                and well-being of women, children, and adolescents living in vulnerable urban settlements.
              </p>
              <p className="section-desc leading-relaxed mb-8">
                Through evidence-based interventions, partnerships with public institutions, and dedicated outreach teams,
                we ensure that every individual—regardless of socio-economic status—has access to quality healthcare,
                protection, and opportunities to thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about/our-story" className="btn-coral">Our Story</Link>
                <Link to="/work" className="inline-flex items-center gap-2 text-[#0f7b6c] font-medium text-sm hover:underline">
                  See Our Work →
                </Link>
              </div>
            </div>

            {/* Right: Feature highlights */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "🔬", title: "Evidence-Based", desc: "Research-driven interventions designed for measurable, lasting impact.", bg: "bg-[#e6f5f3]" },
                { icon: "🤝", title: "Community-Led", desc: "Solutions built with communities, not just for them.", bg: "bg-[#fdf0ec]" },
                { icon: "🏛️", title: "System Partnerships", desc: "Collaborating with government health systems for scale and sustainability.", bg: "bg-[#e6eef5]" },
                { icon: "📈", title: "Sustainable Change", desc: "Building local capacity that outlasts individual programmes.", bg: "bg-[#edf5e6]" },
              ].map((f) => (
                <div key={f.title} className={`${f.bg} rounded-2xl p-5 border border-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300`}>
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h4 className="font-semibold text-[#0d2d3a] text-sm mb-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>{f.title}</h4>
                  <p className="text-xs text-[#5a7570] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImpactStats />
      <OurWorkPreview />
      <FocusAreas />
      <BlogPreview />
      <DonateBanner />
      <Footer />
    </>
  );
}