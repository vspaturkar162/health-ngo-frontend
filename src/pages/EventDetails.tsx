// import { Helmet } from 'react-helmet-async';

// export default function EventDetails() {
//   const event = {
//     name: "Free Health Camp - City X",
//     startDate: "2026-05-10T09:00",
//     endDate: "2026-05-10T16:00",
//     location: "Community Hall, City X",
//     description: "Free checkups and awareness session"
//   };

//   return (
//     <>
//       <Helmet>
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Event",
//             "name": event.name,
//             "startDate": event.startDate,
//             "endDate": event.endDate,
//             "location": {
//               "@type": "Place",
//               "name": "Community Hall",
//               "address": event.location
//             },
//             "description": event.description
//           })}
//         </script>
//       </Helmet>

//       <h1>{event.name}</h1>
//       <p>{event.description}</p>
//     </>
//   );
// }

import { Helmet } from 'react-helmet-async';
import { useState } from "react";

export default function EventDetails() {
  const event = {
    name: "Free Health Camp - City X",
    startDate: "2026-05-10T09:00",
    endDate: "2026-05-10T16:00",
    location: "Community Hall, City X",
    description: "Free checkups and awareness session"
  };

  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Helmet — kept exactly as original */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": event.name,
            "startDate": event.startDate,
            "endDate": event.endDate,
            "location": {
              "@type": "Place",
              "name": "Community Hall",
              "address": event.location
            },
            "description": event.description
          })}
        </script>
      </Helmet>

      <div className="bg-[#faf8f5] min-h-screen">
        {/* Hero banner */}
        <div className="bg-gradient-to-br from-[#0d2d3a] to-[#0f4f7b] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 block mb-3">
              Upcoming Event
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {event.name}
            </h1>
            <p className="text-white/70 text-base max-w-xl">{event.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-10">

          {/* Main details */}
          <div className="lg:col-span-2 space-y-7">

            {/* Event info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "📅", label: "Date", value: new Date(event.startDate).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) },
                { icon: "🕘", label: "Time", value: `${new Date(event.startDate).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} – ${new Date(event.endDate).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}` },
                { icon: "📍", label: "Location", value: event.location },
                { icon: "🎟️", label: "Entry", value: "Free – Registration required" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-[#5a7570] uppercase tracking-wide mb-0.5">{item.label}</p>
                    <p className="text-sm text-[#0d2d3a] font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* About the event */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <h2
                className="text-xl font-semibold text-[#0d2d3a] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About This Event
              </h2>
              <p className="text-[#5a7570] leading-relaxed text-sm">
                {event.description}. Join us for a day of free health screenings, expert consultations, and health awareness sessions. Open to all community members, with a special focus on women, children, and adolescents.
              </p>
            </div>

            {/* What to expect */}
            <div className="bg-[#e6f5f3] rounded-2xl p-7 border border-[#0f7b6c]/10">
              <h2
                className="text-lg font-semibold text-[#0d2d3a] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What to Expect
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Free health check-ups",
                  "Nutrition counselling",
                  "Child health screening",
                  "Women's health consultations",
                  "Mental health awareness",
                  "Referral to specialist services",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#3a5550]">
                    <span className="text-[#0f7b6c]">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Registration sidebar */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6">
              {registered ? (
                <div className="text-center">
                  <div className="text-5xl mb-3">🎉</div>
                  <h3
                    className="font-semibold text-[#0d2d3a] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    You're Registered!
                  </h3>
                  <p className="text-sm text-[#5a7570]">
                    A confirmation will be sent to <strong>{email}</strong>. See you there!
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-semibold text-[#0d2d3a] mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Register for Free
                  </h3>
                  <div className="space-y-3">
                    <input
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0f7b6c] transition-colors"
                    />
                    <button
                      onClick={() => { if (name && email) setRegistered(true); }}
                      className="w-full bg-[#0f7b6c] text-white font-semibold py-3 rounded-xl hover:bg-[#0a6358] transition-colors"
                    >
                      Register Now
                    </button>
                  </div>
                  <p className="text-xs text-[#5a7570] text-center mt-3">
                    Free entry. Confirmation via email.
                  </p>
                </>
              )}
            </div>

            <div className="mt-4">
              <a href="/events" className="text-sm text-[#0f7b6c] hover:underline">
                ← Back to all events
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}