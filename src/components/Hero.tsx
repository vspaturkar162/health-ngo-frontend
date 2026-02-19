import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const slides = [
  {
    title: "Women & Children at the Centre of Change",
    description:
      "Building evidence-based solutions with communities, governments and public systems to improve health outcomes for women and children.",
  },
  {
    title: "Strengthening Community Health Systems",
    description:
      "Working at the grassroots level to improve access to preventive care, nutrition, and protection services.",
  },
  {
    title: "Evidence-Driven Impact",
    description:
      "Using research, data, and partnerships to design sustainable and scalable health interventions.",
  },
  {
    title: "Health, Dignity, and Opportunity for All",
    description:
      "Ensuring every woman and child has the opportunity to live a healthy and secure life.",
  },
];
export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  // return (
  //   <section className="relative z-10 bg-[#5b7fa6] text-white">
  //     <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 py-16 gap-10">

  //       <div>
  //         <h1 className="text-4xl font-light mb-4">
  //           Women & Children at the Centre of Change
  //         </h1>
  //         <p className="text-sm leading-relaxed mb-6">
  //           Building evidence-based solutions with communities,
  //           governments and public systems to improve health outcomes
  //           for women and children.
  //         </p>

  //         {/* IMPORTANT: use Link, not <a> */}
  //         <Link
  //           to="/work"
  //           className="inline-block bg-white text-black px-6 py-2 rounded"
  //         >
  //           Know More
  //         </Link>
  //       </div>

  //       <img
  //         src="/hero.jpg"
  //         alt="Community health work"
  //         className="rounded-lg shadow-lg"
  //       />
  //     </div>
  //   </section>
  // );
  return (
    <section className="bg-[#5f7fa3] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-light mb-6 transition-all duration-500">
            {slides[index].title}
          </h1>

          <p className="text-lg mb-8 max-w-xl transition-all duration-500">
            {slides[index].description}
          </p>
          <Link
            to="/work"
            className="inline-block bg-white text-black px-6 py-2 rounded"
          >
            Know More
          </Link>

        </div>
        <div className=" md:block h-40 bg-white/20 rounded flex items-center justify-center text-sm">
          Community health work
        </div>
        <img
            src="HealthcareFront.jpg"
            alt="Community health work"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
      </div>

      {/* DOT INDICATORS */}
      <div className="flex justify-center mt-10 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}