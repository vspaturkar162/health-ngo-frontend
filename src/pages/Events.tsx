// import { useEffect, useState } from "react";
// import api from "../services/api";

// export default function Events() {
//   const [events, setEvents] = useState<any[]>([]);

//   useEffect(() => {
//     api.get("/events").then(res => setEvents(res.data));
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Upcoming Health Camps</h1>
//       {events.map(event => (
//         <div key={event._id} className="border p-4 rounded mb-4">
//           <h2 className="text-xl font-semibold">{event.title}</h2>
//           <p>{event.description}</p>
//           <p className="text-sm text-gray-500">{event.location}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/events")
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#faf8f5] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2d3a] to-[#0f4f7b] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 block mb-3">
            Events
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Upcoming Health Camps
          </h1>
          <p className="text-white/65 text-base max-w-xl mx-auto">
            Free health screenings, awareness drives, and community gatherings — open to all.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto p-6 py-14">

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#0f4f7b]/20 border-t-[#0f4f7b] rounded-full animate-spin" />
          </div>
        )}

        {/* No events */}
        {!loading && events.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📅</div>
            <p className="text-[#5a7570] text-base">No upcoming events at the moment.</p>
            <p className="text-[#5a7570] text-sm mt-1">Check back soon or subscribe to our newsletter.</p>
          </div>
        )}

        {/* Events grid — API data */}
        {!loading && events.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {events.map(event => (
              <div
                key={event._id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Colour bar */}
                <div className="h-2 bg-gradient-to-r from-[#0f4f7b] to-[#1a6e9e]" />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2
                      className="text-lg font-semibold text-[#0d2d3a] group-hover:text-[#0f4f7b] transition-colors leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {event.title}
                    </h2>
                    <span className="flex-shrink-0 text-xs font-semibold text-[#0f4f7b] bg-[#e6eef5] px-2.5 py-1 rounded-full">
                      Upcoming
                    </span>
                  </div>

                  <p className="text-sm text-[#5a7570] leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {event.location && (
                    <div className="flex items-center gap-2 text-xs text-[#5a7570] mb-4">
                      <span className="text-[#0f4f7b]">📍</span>
                      {event.location}
                    </div>
                  )}

                  {event.date && (
                    <div className="flex items-center gap-2 text-xs text-[#5a7570] mb-5">
                      <span className="text-[#0f4f7b]">📅</span>
                      {event.date}
                    </div>
                  )}

                  <Link
                    to={`/events/${event._id}`}
                    className="block text-center bg-[#0f4f7b] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#0d3b5e] transition-colors"
                  >
                    Register / Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info strip at bottom */}
        <div className="mt-12 bg-[#e6eef5] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5 border border-[#0f4f7b]/10">
          <div>
            <h3
              className="font-semibold text-[#0d2d3a] mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Want to Organise a Health Camp?
            </h3>
            <p className="text-sm text-[#5a7570]">
              Partner with us to bring free health services to your community.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 bg-[#0f4f7b] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#0d3b5e] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 whitespace-nowrap"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </div>
  );
}