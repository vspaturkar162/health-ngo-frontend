// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function CrisisHelpline() {
//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-20 text-center max-w-4xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-4">Crisis Helpline</h1>

//         <p className="text-sm mb-6">
//           If you or someone you know is facing violence, help is available.
//           Our centres operate between <strong>10 AM – 6 PM (Mon–Sat)</strong>.
//         </p>

//         <div className="flex justify-center gap-6 mb-6">
//           <a href="tel:9892278287"
//             className="border px-6 py-3 rounded">
//             Call Us: 9892278287
//           </a>
//           <button className="border px-6 py-3 rounded">
//             Crisis Contact Form
//           </button>
//         </div>

//         <p className="italic text-gray-600">
//           You are not alone. It is NOT your fault.
//         </p>
//       </section>

//       <Footer />
//     </>
//   );
// }

// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CrisisHelpline() {
  return (
    <>
      {/* <Navbar /> */}

      {/* Emergency top bar */}
      <div className="bg-[#e05c3a] text-white text-center py-3 px-4">
        <p className="text-sm font-medium">
          🚨 If you are in immediate danger, call <strong>112</strong> (Emergency) right now.
        </p>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#c0392b] to-[#e05c3a] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 backdrop-blur-sm border border-white/20">
            🛡️
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Crisis Helpline
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-xl mx-auto mb-2">
            If you or someone you know is facing violence, help is available.
            Our centres operate between{" "}
            <strong className="text-white">10 AM – 6 PM (Mon–Sat)</strong>.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 max-w-4xl mx-auto px-6">

        {/* Call + form buttons — kept from original */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="tel:9892278287"
            className="flex items-center justify-center gap-3 bg-[#0f7b6c] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#0a6358] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 text-base"
          >
            📞 Call Us: 9892278287
          </a>
          <button className="flex items-center justify-center gap-3 border-2 border-[#e05c3a] text-[#e05c3a] font-semibold px-8 py-4 rounded-full hover:bg-[#e05c3a] hover:text-white transition-all duration-200 text-base">
            📝 Crisis Contact Form
          </button>
        </div>

        {/* You are not alone */}
        <div className="text-center mb-12">
          <p className="italic text-[#5a7570] text-lg">
            You are not alone. It is{" "}
            <strong className="text-[#e05c3a] not-italic">NOT your fault.</strong>
          </p>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: "🔒",
              title: "Confidential",
              desc: "Your conversation is private. Counsellors do not share your details without your consent.",
              bg: "bg-[#e6f5f3]",
              border: "border-[#0f7b6c]/15",
            },
            {
              icon: "🤝",
              title: "Non-Judgmental",
              desc: "You will be heard without judgment. Counsellors are trained to support, not to judge.",
              bg: "bg-[#fdf0ec]",
              border: "border-[#e05c3a]/15",
            },
            {
              icon: "💙",
              title: "Connected to Help",
              desc: "You'll be referred to local services, shelters, legal aid, or medical care as needed.",
              bg: "bg-[#e6eef5]",
              border: "border-[#0f4f7b]/15",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`${item.bg} ${item.border} border rounded-2xl p-6 text-center`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3
                className="font-semibold text-[#0d2d3a] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#5a7570] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Helpline numbers */}
        <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm mb-8">
          <h2
            className="text-xl font-semibold text-[#0d2d3a] mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            National Helpline Numbers
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "National Domestic Violence Helpline", number: "181", available: "24/7" },
              { name: "Women's Helpline", number: "1091", available: "24/7" },
              { name: "Child Helpline", number: "1098", available: "24/7" },
              { name: "iCall Mental Health", number: "9152987821", available: "Mon–Sat, 8AM–10PM" },
            ].map((h) => (
              <div key={h.name} className="flex items-center gap-4 bg-[#faf8f5] rounded-xl px-4 py-3">
                <div>
                  <p className="text-xs text-[#5a7570]">{h.name}</p>
                  <p
                    className="text-xl font-bold text-[#0f7b6c]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {h.number}
                  </p>
                  <p className="text-xs text-[#5a7570]">{h.available}</p>
                </div>
                <a
                  href={`tel:${h.number}`}
                  className="ml-auto flex-shrink-0 w-9 h-9 bg-[#e6f5f3] rounded-full flex items-center justify-center text-[#0f7b6c] hover:bg-[#0f7b6c] hover:text-white transition-colors"
                >
                  📞
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}