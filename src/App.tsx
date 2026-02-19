

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminAuth() {
//   const [mode, setMode] = useState<"signin" | "signup">("signin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const submit = async () => {
//     if (!email || !password) {
//       alert("Please enter your email and password");
//       return;
//     }

//     setLoading(true);

//     try {
//       // ✅ Relative URLs — vercel.json proxies /api/* → Render backend
//       // ✅ /api/admin/register and /api/admin/login are correct
//       const endpoint =
//         mode === "signup"
//           ? "/api/admin/register"
//           : "/api/admin/login";

//       console.log("🔄 Submitting to:", endpoint);

//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       console.log("📦 Response:", res.status, data);

//       if (!res.ok) {
//         throw new Error(data.message || "Authentication failed");
//       }

//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         navigate("/admin/dashboard");
//       }
//     } catch (err: any) {
//       console.error("❌ Error:", err);
//       alert(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* LEFT CONTENT */}
//       <div className="hidden md:flex w-1/2 bg-[#5f7fa3] text-white p-12 flex-col justify-center">
//         <h1 className="text-4xl font-light mb-6">
//           HealthForAll Admin Portal
//         </h1>
//         <p className="text-lg mb-4">
//           Manage blogs, resources, volunteers, outreach programs and
//           impact stories from one central dashboard.
//         </p>
//         <p className="text-sm opacity-90">
//           This portal is restricted to authorized administrators only.
//         </p>
//       </div>

//       {/* RIGHT FORM */}
//       <div className="w-full md:w-1/2 flex items-center justify-center">
//         <div className="w-full max-w-md p-8">
//           <h2 className="text-2xl font-semibold mb-2">
//             {mode === "signin" ? "Sign In" : "Sign Up"}
//           </h2>

//           <p className="text-sm text-gray-600 mb-6">
//             {mode === "signin"
//               ? "Access your admin dashboard"
//               : "Create an admin account"}
//           </p>

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border p-3 mb-4 rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border p-3 mb-6 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onClick={submit}
//             disabled={loading}
//             className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition disabled:opacity-50"
//           >
//             {loading
//               ? "Please wait..."
//               : mode === "signin"
//               ? "Sign In"
//               : "Sign Up"}
//           </button>

//           <p className="text-sm text-center mt-6">
//             {mode === "signin" ? (
//               <>
//                 Don't have an account?{" "}
//                 <button
//                   className="text-blue-600"
//                   onClick={() => setMode("signup")}
//                 >
//                   Sign Up
//                 </button>
//               </>
//             ) : (
//               <>
//                 Already have an account?{" "}
//                 <button
//                   className="text-blue-600"
//                   onClick={() => setMode("signin")}
//                 >
//                   Sign In
//                 </button>
//               </>
//             )}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Public pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Events from "./pages/Events";
import About from "./pages/About";
import OurStory from "./pages/about/OurStory";
import HowWeWork from "./pages/about/HowWeWork";
import People from "./pages/about/people";
import Research from "./pages/about/Research";
import Work from "./pages/Work";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Volunteer from "./pages/volunteer";
import CrisisHelpline from "./pages/CrisisHelpline";

// Admin pages
import AdminAuth from "./pages/admin/AdminAuth";
import AdminDashboard from "./pages/admin/Dashboard";

function App() {
  const location = useLocation();

  // ❌ Hide navbar on admin routes
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />}>
        {/* DEFAULT CONTENT for /about */}
        <Route index element={<OurStory />} />
        {/* Sub-pages */}
        <Route path="our-story" element={<OurStory />} />
        <Route path="how-we-work" element={<HowWeWork />} />
        <Route path="people" element={<People />} />
        <Route path="research" element={<Research />} />
      </Route>
        <Route path="/work" element={<Work />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/crisis-helpline" element={<CrisisHelpline />} />

        {/* ===== ADMIN ROUTES ===== */}
        <Route path="/admin" element={<AdminAuth />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;