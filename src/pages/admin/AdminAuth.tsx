import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAuth() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    const endpoint =
      mode === "signup"
        ? "http://localhost:4000/api/admin/register"
        : "http://localhost:4000/api/admin/login";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/admin/dashboard");
    } else {
      alert(data.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT CONTENT */}
      <div className="hidden md:flex w-1/2 bg-[#5f7fa3] text-white p-12 flex-col justify-center">
        <h1 className="text-4xl font-light mb-6">
          HealthForAll Admin Portal
        </h1>
        <p className="text-lg mb-4">
          Manage blogs, resources, volunteers, outreach programs and
          impact stories from one central dashboard.
        </p>
        <p className="text-sm opacity-90">
          This portal is restricted to authorized administrators only.
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-semibold mb-2">
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            {mode === "signin"
              ? "Access your admin dashboard"
              : "Create an admin account"}
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 mb-6 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={submit}
            className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-sm text-center mt-6">
            {mode === "signin" ? (
              <>
                Don’t have an account?{" "}
                <button
                  className="text-blue-600"
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-blue-600"
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