// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

//         <Link to="/" className="font-semibold text-lg hover-link">
//           HealthForAll
//         </Link>

//         <nav className="flex gap-6 text-sm relative z-40">

//           {/* ABOUT */}
//           <div className="relative group">
//             <span className="hover-link cursor-pointer">ABOUT</span>

//             <div
//               className="
//                 absolute left-0 mt-2
//                 hidden group-hover:block
//                 bg-[#5a96d6] text-white w-56
//                 shadow-lg rounded
//                 z-50
//               "
//             >
//               <Link className="dropdown-link block px-4 py-2" to="/about/our-story">
//                 Our Story
//               </Link>
//               <Link className="dropdown-link block px-4 py-2" to="/about/how-we-work">
//                 How We Work
//               </Link>
//               <Link className="dropdown-link block px-4 py-2" to="/about/research">
//                 Research & Evaluation
//               </Link>
//               <Link className="dropdown-link block px-4 py-2" to="/about/people">
//                 People
//               </Link>
//             </div>
//           </div>

//           <Link to="/work" className="hover-link">OUR WORK</Link>
//           <Link to="/resources" className="hover-link">RESOURCES</Link>
//           <Link to="/contact" className="hover-link">CONTACT US</Link>
//         </nav>

//         <Link
//           to="/donate"
//           className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
//         >
//           Donate
//         </Link>

//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const aboutLinks = [
  { to: "/about/our-story", label: "Our Story" },
  { to: "/about/how-we-work", label: "How We Work" },
  { to: "/about/research", label: "Research & Evaluation" },
  { to: "/about/people", label: "People" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0f7b6c]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f7b6c] to-[#18a290] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <Heart size={18} className="text-white fill-white" />
          </div>
          <span
            className="text-xl font-bold text-[#0f7b6c]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            HealthForAll
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="text-sm font-medium tracking-wide text-[#0d2d3a] hover:text-[#0f7b6c] transition-colors flex items-center gap-1">
              ABOUT
              <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 mt-3 w-52 bg-[#0f7b6c] rounded-xl shadow-2xl overflow-hidden z-50">
                {aboutLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="dropdown-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { to: "/work", label: "OUR WORK" },
            { to: "/resources", label: "RESOURCES" },
            { to: "/events", label: "EVENTS" },
            { to: "/contact", label: "CONTACT US" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-[#0f7b6c] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#0f7b6c] after:w-full"
                    : "text-[#0d2d3a] hover:text-[#0f7b6c] after:w-0 hover:after:w-full"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/donate"
            className="bg-gradient-to-r from-[#e05c3a] to-[#f28464] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#0d2d3a] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4 shadow-xl">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#5a7570] mb-2">ABOUT</p>
            {aboutLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-1.5 text-sm text-[#0d2d3a] hover:text-[#0f7b6c] pl-3"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {[
            { to: "/work", label: "Our Work" },
            { to: "/resources", label: "Resources" },
            { to: "/events", label: "Events" },
            { to: "/contact", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-[#0d2d3a] hover:text-[#0f7b6c] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="btn-coral text-center text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}