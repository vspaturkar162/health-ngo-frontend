// import Navbar from "../components/Navbar";
import { Link, Outlet, Route } from "react-router-dom";
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
export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-3xl mb-4">About Us</h1>
        <p>
          We are a health-focused NGO working to improve the lives of
          women, children and adolescents through community-based
          interventions.
        </p>
        <div className="flex gap-6 mb-8 text-sm font-medium">
          <Link
            to="our-story"
            className="text-blue-600 hover:underline"
          >
            Our Story
          </Link>

          <Link
            to="how-we-work"
            className="text-blue-600 hover:underline"
          >
            How We Work
          </Link>

          <Link
            to="people"
            className="text-blue-600 hover:underline"
          >
            People
          </Link>
          <Link
            to="research"
            className="text-blue-600 hover:underline"
          >
            Research & Evaluation
          </Link>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}