
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminAuth() {
//   const [mode, setMode] = useState<"signin" | "signup">("signin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const submit = async () => {
//     setLoading(true);
    
//     try {
//       // ✅ ADD YOUR RENDER BACKEND URL HERE
//       const API_URL = process.env.REACT_APP_API_URL || "https://your-render-backend.onrender.com";
      
//       const endpoint = mode === "signup"
//         ? `${API_URL}/api/admin/register`
//         : `${API_URL}/api/admin/login`;

//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!res.ok) {
//         const err = await res.json();
//         throw new Error(err.message || "Request failed");
//       }

//       const data = await res.json();

//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         navigate("/admin/dashboard");
//       }
//     } catch (err: any) {
//       alert(err.message || "Failed to connect to server");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div className="hidden md:flex w-1/2 bg-[#5f7fa3] text-white p-12 flex-col justify-center">
//         <h1 className="text-4xl font-light mb-6">HealthForAll Admin Portal</h1>
//         <p className="text-lg mb-4">
//           Manage blogs, resources, volunteers and impact stories.
//         </p>
//       </div>

//       <div className="w-full md:w-1/2 flex items-center justify-center">
//         <div className="w-full max-w-md p-8">
//           <h2 className="text-2xl font-semibold mb-6">
//             {mode === "signin" ? "Sign In" : "Sign Up"}
//           </h2>

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
//             className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 disabled:opacity-50"
//           >
//             {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Sign Up"}
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





import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAuth() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const endpoint =
        mode === "signup"
          ? "/api/admin/register"
          : "/api/admin/login";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      }
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#e6f0f5] to-[#f4f7fa]">
      
      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#0f766e] to-[#0f172a] text-white p-12 flex-col justify-center">
        <h1 className="text-4xl font-light mb-6">
          HealthForAll Admin Portal
        </h1>
        <p className="text-lg mb-4 opacity-90">
          Secure access to manage content, resources, and community impact.
        </p>
        <p className="text-sm opacity-80">
          Authorized administrators only.
        </p>
      </div>

      {/* Auth Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
          
          <h2 className="text-2xl font-semibold text-[#0f172a] mb-2">
            {mode === "signin" ? "Admin Sign In" : "Admin Sign Up"}
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            {mode === "signin"
              ? "Access the admin dashboard"
              : "Create a new admin account"}
          </p>

          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-teal-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-teal-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={submit}
            disabled={loading}
            className="w-full bg-teal-600 text-white py-3 rounded-xl shadow-md hover:bg-teal-700 transition-all duration-200 disabled:opacity-50"
          >
            {loading
              ? "Authenticating..."
              : mode === "signin"
              ? "Sign In"
              : "Sign Up"}
          </button>

          <p className="text-sm text-center mt-6">
            {mode === "signin" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  className="text-teal-600 hover:underline"
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-teal-600 hover:underline"
                  onClick={() => setMode("signin")}
                >
                  Sign In
                </button>
              </>
            )}
          </p>

        </div>
      </div>
    </div>
  );
}







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
//       alert("Please enter email and password");
//       return;
//     }

//     setLoading(true);

//     try {
//       // ✅ Relative URLs work because vercel.json proxies /api/* to Render
//       const endpoint =
//         mode === "signup"
//           ? "/api/admin/register"
//           : "/api/admin/login";

//       console.log("🔄 Hitting endpoint:", endpoint); // debug

//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       console.log("📦 Response:", data); // debug

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
//       <div className="hidden md:flex w-1/2 bg-[#5f7fa3] text-white p-12 flex-col justify-center">
//         <h1 className="text-4xl font-light mb-6">HealthForAll Admin Portal</h1>
//         <p className="text-lg mb-4">
//           Manage blogs, resources, volunteers and impact stories.
//         </p>
//         <p className="text-sm opacity-90">
//           This portal is restricted to authorized administrators only.
//         </p>
//       </div>

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