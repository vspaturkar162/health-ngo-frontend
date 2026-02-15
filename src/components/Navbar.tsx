import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between px-6 py-3">

        <Link to="/" className="font-semibold text-lg hover-link">
          HealthForAll
        </Link>

        <nav className="flex gap-6 text-sm relative">

          {/* ABOUT */}
          <div className="group relative">
            <span className="hover-link cursor-pointer">ABOUT</span>
            <div className="absolute left-0 mt-2 hidden group-hover:block
             bg-[#5a96d6] text-white w-56 z-50">              
              <Link className="dropdown-link" to="/about/our-story">Our Story</Link>
              <Link className="dropdown-link" to="/about/how-we-work">How We Work</Link>
              <Link className="dropdown-link" to="/about/research">Research & Evaluation</Link>
              <Link className="dropdown-link" to="/about/people">People</Link>
            </div>
          </div>

          {/* OUR WORK */}
          <Link to="/work" className="hover-link">OUR WORK</Link>

          <Link to="/resources" className="hover-link">RESOURCES</Link>
          <Link to="/contact" className="hover-link">CONTACT US</Link>
        </nav>

        <Link
          to="/donate"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Donate
        </Link>

      </div>
    </header>
  );
}