import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Events from "./pages/Events";
import About from "./pages/About";
import Work from "./pages/Work";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Volunteer from "./pages/volunteer";
import CrisisHelpline from "./pages/CrisisHelpline";

// Admin
import AdminAuth from "./pages/admin/AdminAuth";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLayout from "./pages/admin/AdminLayout";

// About sub-pages
import People from "./pages/about/people";
import Research from "./pages/about/Research";
import HowWeWork from "./pages/about/HowWeWork";
import OurStory from "./pages/about/OurStory";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/crisis-helpline" element={<CrisisHelpline />} />

        {/* About sub routes */}
        <Route path="/about/how-we-work" element={<HowWeWork />} />
        <Route path="/about/research" element={<Research />} />
        <Route path="/about/people" element={<People />} />
        <Route path="/about/our-story" element={<OurStory />} />

        {/* Admin routes */}
        

        <Route path="/admin" element={<AdminAuth />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route> */}
      </Routes>

    </>
  );
}

export default App;