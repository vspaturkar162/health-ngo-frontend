// // import Navbar from "../components/Navbar";
// import { Link, Outlet, Route } from "react-router-dom";
// import Footer from "../components/Footer";
// import OurStory from "../pages/about/OurStory";
// import HowWeWork from "./about/HowWeWork";
// import People from "./about/people";
// import Research from "./about/Research";
// <Route path="/about" element={<About />}>
//   <Route path="our-story" element={<OurStory />} />
//   <Route path="how-we-work" element={<HowWeWork />} />
//   <Route path="people" element={<People />} />
//   <Route path="research" element={<Research />} />
// </Route>
// export default function About() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="max-w-5xl mx-auto p-10">
//         <h1 className="text-3xl mb-4">About Us</h1>
//         <p>
//           We are a health-focused NGO working to improve the lives of
//           women, children and adolescents through community-based
//           interventions.
//         </p>
//         <div className="flex gap-6 mb-8 text-sm font-medium">
//           <Link
//             to="our-story"
//             className="text-blue-600 hover:underline"
//           >
//             Our Story
//           </Link>

//           <Link
//             to="how-we-work"
//             className="text-blue-600 hover:underline"
//           >
//             How We Work
//           </Link>

//           <Link
//             to="people"
//             className="text-blue-600 hover:underline"
//           >
//             People
//           </Link>
//           <Link
//             to="research"
//             className="text-blue-600 hover:underline"
//           >
//             Research & Evaluation
//           </Link>
//         </div>
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   );
// }

// import Navbar from "../components/Navbar";
import { NavLink, Outlet, Route } from "react-router-dom";
import Footer from "../components/Footer";
import OurStory from "../pages/about/OurStory";
import HowWeWork from "./about/HowWeWork";
import People from "./about/people";
import Research from "./about/Research";
<Route path="/about" element={<About />}>
  <Route path="our-story" element={<OurStory />} />
  <Route path="how-we-work" element={<HowWeWork />} />
  <Route path="people" element={<People />} />
  <Route path="research" element={<Research />} />
</Route>

const navLinks = [
  { to: "our-story", label: "Our Story" },
  { to: "how-we-work", label: "How We Work" },
  { to: "people", label: "People" },
  { to: "research", label: "Research & Evaluation" },
];

export default function About() {
  return (
    <>
      {/* <Navbar /> */}

      {/* ── Hero Banner ── */}
      <section className="relative bg-gradient-to-br from-[#0d3b30] via-[#0f7b6c] to-[#18a290] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-4"
          >
            Who We Are
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Two Decades of{" "}
            <em className="not-italic text-[#ffddb4]">Community-Driven</em>{" "}
            Health Impact
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            We are a health-focused NGO working to improve the lives of women,
            children and adolescents through community-based interventions.
          </p>
        </div>

        {/* ── Sub-navigation tabs ── */}
        <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex gap-1 overflow-x-auto py-1 scrollbar-none">
              {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="
                  flex-shrink-0 px-5 py-3 text-sm font-medium text-white/70
                  rounded-t-lg hover:text-white hover:bg-white/10
                  border-b-2 border-transparent
                  hover:border-white/40
                  transition-all duration-200
                  whitespace-nowrap
                "
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                        borderBottomColor: "white",
                        backgroundColor: "rgba(255,255,255,0.12)",
                      }
                    : {}
                }
              >
    {item.label}
  </NavLink>
))}

            </div>
          </div>
        </div>
      </section>

      {/* ── Outlet content ── */}
      <div className="min-h-[60vh] bg-[#faf8f5]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}