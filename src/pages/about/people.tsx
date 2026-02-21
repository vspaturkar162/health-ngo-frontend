// // import Navbar from "../../components/Navbar";

// const people = [
//   {
//     name: "Dr. Armida Fernandez",
//     role: "Founder",
//     description:
//       "A paediatrician and public health expert with decades of experience working with vulnerable communities."
//   },
//   {
//     name: "Programme Team",
//     role: "Implementation & Outreach",
//     description:
//       "Dedicated professionals working directly with communities to deliver health and protection services."
//   },
//   {
//     name: "Research & Advocacy Team",
//     role: "Evidence & Policy",
//     description:
//       "Researchers and advocates driving evidence-based practice and systemic change."
//   }
// ];

// export default function People() {
//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-10">People</h1>

//         <div className="grid md:grid-cols-3 gap-8">
//           {people.map((p) => (
//             <div
//               key={p.name}
//               className="border rounded p-6 hover:shadow transition"
//             >
//               <h3 className="font-semibold mb-1">{p.name}</h3>
//               <p className="text-sm text-blue-600 mb-2">{p.role}</p>
//               <p className="text-sm text-gray-700">{p.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

/* ✅ Backend person type */
interface Person {
  _id: string;
  name: string;
  role: string;
  department: string;
}

/* ✅ UI-mapping helper (keeps your design intact) */
const departmentUI: Record<string, { emoji: string; accent: string; bg: string }> = {
  Leadership: {
    emoji: "👩‍⚕️",
    accent: "#0f7b6c",
    bg: "bg-[#e6f5f3]",
  },
  Programs: {
    emoji: "🤝",
    accent: "#0f4f7b",
    bg: "bg-[#e6eef5]",
  },
  Research: {
    emoji: "📊",
    accent: "#6b0f7b",
    bg: "bg-[#f3e6f5]",
  },
  Operations: {
    emoji: "⚙️",
    accent: "#7b4f0f",
    bg: "bg-[#f5efe6]",
  },
};

export default function People() {
  const [people, setPeople] = useState<Person[]>([]);

  /* ✅ FETCH FROM BACKEND */
  useEffect(() => {
    fetch(`${API}/people`)
      .then((res) => res.json())
      .then(setPeople)
      .catch(() => setPeople([]));
  }, []);

  return (
    <>
      <section className="py-16 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0f7b6c] block mb-3">
            Our Team
          </span>
          <h1
            className="text-4xl font-light text-[#0d2d3a] leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The{" "}
            <em className="not-italic font-semibold text-[#0f7b6c]">People</em>{" "}
            Behind Our Work
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0f7b6c] to-[#18a290] rounded-full mb-4" />
          <p className="text-[#5a7570] text-base max-w-xl leading-relaxed">
            Our strength lies in the expertise, dedication, and compassion of the people who show up every day for the communities we serve.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {people.map((p) => {
            const ui = departmentUI[p.department] || departmentUI.Leadership;

            return (
              <div
                key={p._id}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right, ${ui.accent}, ${ui.accent}88)` }}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 ${ui.bg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {ui.emoji}
                </div>

                {/* Name */}
                <h3
                  className="font-semibold text-[#0d2d3a] text-lg mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {p.name}
                </h3>

                {/* Role */}
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: ui.accent }}
                >
                  {p.role}
                </p>

                {/* Description */}
                <p className="text-sm text-[#5a7570] leading-relaxed">
                  {p.department} Team Member
                </p>
              </div>
            );
          })}
        </div>

        {/* Join strip */}
        <div className="mt-12 bg-[#e6f5f3] rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5 border border-[#0f7b6c]/10">
          <div>
            <h3
              className="font-semibold text-[#0d2d3a] mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Want to Join Our Team?
            </h3>
            <p className="text-sm text-[#5a7570]">
              We're always looking for passionate people to grow with us.
            </p>
          </div>
          <a
            href="/volunteer"
            className="flex-shrink-0 bg-[#0f7b6c] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#0a6358] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            Volunteer With Us →
          </a>
        </div>
      </section>
    </>
  );
}