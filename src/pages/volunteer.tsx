// import { useState } from "react";
// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Volunteer() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const submit = () => {
//     alert("Volunteer application submitted!");
//   };

//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-16 max-w-4xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-4">Volunteer With Us</h1>
//         <p className="text-sm mb-8 text-gray-600">
//           Join our team and help create safer, healthier communities.
//         </p>
//         <form className="grid gap-4">
//           <div className="grid gap-4">
//             <input className="input" placeholder="Full Name"
//               onChange={e => setForm({ ...form, name: e.target.value })} />
//             <input className="input" placeholder="Email"
//               onChange={e => setForm({ ...form, email: e.target.value })} />
//             <input className="input" placeholder="Phone"
//               onChange={e => setForm({ ...form, phone: e.target.value })} />
//             <textarea className="input h-28" placeholder="Why do you want to volunteer?"
//               onChange={e => setForm({ ...form, message: e.target.value })} />

//             <button onClick={submit}
//               className="bg-blue-600 text-white py-2 rounded">
//               Apply Now
//             </button>
//           </div>
//         </form>
//       </section>

//       <Footer />
//     </>
//   );
// }

import { useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Volunteer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const submit = () => {
    alert("Volunteer application submitted!");
  };

  return (
    <>
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2d3a] to-[#3b6b0f] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 block mb-3">
            Volunteer
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Volunteer With Us
          </h1>
          <p className="text-sm text-white/65 max-w-md mx-auto">
            Join our team and help create safer, healthier communities.
          </p>
        </div>
      </section>

      {/* Why volunteer strip */}
      <div className="bg-white border-b border-gray-100 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: "🤝", label: "500+ Volunteers" },
            { icon: "🌍", label: "150+ Communities" },
            { icon: "❤️", label: "Real Impact" },
            { icon: "📜", label: "Certification Provided" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-xs font-medium text-[#5a7570]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Roles info */}
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0f7b6c] block mb-3">
              How You Can Help
            </span>
            <h2
              className="text-2xl font-light text-[#0d2d3a] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Open Volunteer Roles
            </h2>

            <div className="space-y-3">
              {[
                { icon: "👩‍⚕️", role: "Community Health Volunteer", commitment: "8 hrs/week" },
                { icon: "📊", role: "Research Assistant", commitment: "10 hrs/week" },
                { icon: "🎨", role: "Communications Volunteer", commitment: "6 hrs/week" },
                { icon: "🏫", role: "Education Facilitator", commitment: "4 hrs/week" },
                { icon: "💻", role: "Tech Volunteer", commitment: "Flexible" },
              ].map((item) => (
                <div
                  key={item.role}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:-translate-x-0.5 hover:shadow-sm transition-all duration-200"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#0d2d3a]">{item.role}</p>
                    <p className="text-xs text-[#5a7570]">{item.commitment}</p>
                  </div>
                  <span className="text-[#0f7b6c] text-xs">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form — all original fields kept */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h3
              className="text-lg font-semibold text-[#0d2d3a] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Apply to Volunteer
            </h3>

            <form className="grid gap-4">
              <div className="grid gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#5a7570] mb-1.5">Full Name *</label>
                  <input
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors"
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#5a7570] mb-1.5">Email *</label>
                  <input
                    placeholder="Email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#5a7570] mb-1.5">Phone</label>
                  <input
                    placeholder="Phone"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors"
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#5a7570] mb-1.5">Why do you want to volunteer?</label>
                  <textarea
                    placeholder="Why do you want to volunteer?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors resize-none h-28"
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  onClick={submit}
                  className="w-full bg-[#0f7b6c] text-white font-semibold py-3.5 rounded-xl hover:bg-[#0a6358] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}