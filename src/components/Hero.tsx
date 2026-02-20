// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// const slides = [
//   {
//     title: "Women & Children at the Centre of Change",
//     description:
//       "Building evidence-based solutions with communities, governments and public systems to improve health outcomes for women and children.",
//   },
//   {
//     title: "Strengthening Community Health Systems",
//     description:
//       "Working at the grassroots level to improve access to preventive care, nutrition, and protection services.",
//   },
//   {
//     title: "Evidence-Driven Impact",
//     description:
//       "Using research, data, and partnerships to design sustainable and scalable health interventions.",
//   },
//   {
//     title: "Health, Dignity, and Opportunity for All",
//     description:
//       "Ensuring every woman and child has the opportunity to live a healthy and secure life.",
//   },
// ];
// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <section className="bg-[#5f7fa3] text-white py-24">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-light mb-6 transition-all duration-500">
//             {slides[index].title}
//           </h1>

//           <p className="text-lg mb-8 max-w-xl transition-all duration-500">
//             {slides[index].description}
//           </p>
//           <Link
//             to="/work"
//             className="inline-block bg-white text-black px-6 py-2 rounded"
//           >
//             Know More
//           </Link>

//         </div>
//         <div className=" md:block h-40 bg-white/20 rounded flex items-center justify-center text-sm">
//           Community health work
//         </div>
//         <img
//             src="HealthcareFront.jpg"
//             alt="Community health work"
//             className="rounded-lg shadow-lg w-full h-full object-cover"
//           />
//       </div>

//       {/* DOT INDICATORS */}
//       <div className="flex justify-center mt-10 gap-2">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-2 w-2 rounded-full cursor-pointer transition ${
//               i === index ? "bg-white" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
import { useEffect, useState, useCallback } from "react";import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Women & Children at the",
    highlight: "Centre of Change",
    desc: "Building evidence-based solutions with communities, governments and public systems to improve health outcomes for women and children.",
    emoji: "👩‍⚕️",
    bg: "from-[#0d3b30] via-[#0f7b6c] to-[#1a9e8a]",
  },
  {
    title: "Strengthening",
    highlight: "Community Health Systems",
    desc: "Working at the grassroots level to improve access to preventive care, nutrition, and protection services across urban settlements.",
    emoji: "🏥",
    bg: "from-[#0d2d3a] via-[#0f4f7b] to-[#1a6e9e]",
  },
  {
    title: "Evidence-Driven",
    highlight: "Impact at Scale",
    desc: "Using research, data, and community partnerships to design sustainable, scalable health interventions that create measurable change.",
    emoji: "📊",
    bg: "from-[#2d0d2a] via-[#6b0f7b] to-[#8e1a9e]",
  },
  {
    title: "Health, Dignity &",
    highlight: "Opportunity for All",
    desc: "Ensuring every woman and child has access to quality healthcare, protection, and opportunities to thrive, regardless of socio-economic status.",
    emoji: "🌿",
    bg: "from-[#1a2d0d] via-[#3b6b0f] to-[#4e8e1a]",
  },
];

const stats = [
  { num: "2.5L+", label: "Women Reached" },
  { num: "80K+", label: "Children Supported" },
  { num: "150+", label: "Communities" },
  { num: "22+", label: "Years of Impact" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      if (animating) return;

      setAnimating(true);

      setTimeout(() => {
        setIndex((i + slides.length) % slides.length);
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  useEffect(() => {
  const timer = setInterval(() => {
    goTo(index + 1);
  }, 5500);

  return () => clearInterval(timer);
}, [index, goTo]);

  const slide = slides[index];

  return (
    <section className={`relative min-h-[92vh] flex flex-col justify-center bg-gradient-to-br ${slide.bg} transition-all duration-700 overflow-hidden`}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className={`transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Serving communities since 2002
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {slide.title}{" "}
              <em className="not-italic text-[#ffddb4]">{slide.highlight}</em>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-10">
              {slide.desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/work" className="inline-flex items-center gap-2 bg-white text-[#0f7b6c] font-semibold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200">
                Know More <ArrowRight size={16} />
              </Link>
              <Link to="/donate" className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 hover:border-white transition-all duration-200">
                Support Our Work
              </Link>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-3 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-white" : "w-2 bg-white/35 hover:bg-white/60"}`}
                />
              ))}
              <div className="ml-4 flex gap-2">
                <button onClick={() => goTo(index - 1)} className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <ChevronLeft size={14} />
                </button>
                <button onClick={() => goTo(index + 1)} className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`hidden md:flex flex-col gap-4 transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
            {/* Main visual card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl h-72 flex flex-col items-center justify-center gap-3">
              <div className="text-7xl">{slide.emoji}</div>
              <p className="text-white/70 text-sm font-medium">Community Health in Action</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
                  <p className="text-white/60 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
              <p className="text-white/55 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}