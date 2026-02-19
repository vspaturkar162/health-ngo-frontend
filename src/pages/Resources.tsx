// import { useEffect, useState } from "react";
// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// /* ✅ TypeScript interface */
// interface Resource {
//   _id?: string;
//   title: string;
//   category: string;
//   date: string;
// }

// export default function Resources() {
//   const [resources, setResources] = useState<Resource[]>([]);
//   const [filter, setFilter] = useState<string>("All");
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   /* ✅ Fetch from backend */
//   useEffect(() => {
//     const fetchResources = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/resources");
//         if (!res.ok) {
//           throw new Error("Failed to fetch resources");
//         }
//         const data: Resource[] = await res.json();
//         setResources(data);
//       } catch (err) {
//         setError("Unable to load resources");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchResources();
//   }, []);

//   /* ✅ Filtering logic */
//   const filteredResources =
//     filter === "All"
//       ? resources
//       : resources.filter((r) => r.category === filter);

//   return (
//     <>
//       {/* <Navbar /> */}

//       {/* Header */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h1 className="text-4xl font-light mb-2">Resources</h1>
//           <p className="text-sm text-gray-600">
//             Knowledge resources, research, manuals and articles
//           </p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="pb-20">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

//           {/* Sidebar */}
//           <aside className="md:col-span-1">
//             <h3 className="font-semibold mb-4">Filter by Focus Area</h3>
//             <ul className="space-y-2 text-sm">
//               {[
//                 "All",
//                 "Violence Prevention",
//                 "Maternal & Child Health",
//                 "Research"
//               ].map((cat) => (
//                 <li key={cat}>
//                   <button
//                     onClick={() => setFilter(cat)}
//                     className={`w-full text-left px-3 py-2 rounded ${
//                       filter === cat
//                         ? "bg-[#fdecec]"
//                         : "hover:bg-gray-100"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </aside>

//           {/* Cards */}
//           <div className="md:col-span-3 grid md:grid-cols-2 gap-6">

//             {/* Loading */}
//             {loading && (
//               <p className="text-gray-500 text-sm">Loading resources...</p>
//             )}

//             {/* Error */}
//             {error && (
//               <p className="text-red-500 text-sm">{error}</p>
//             )}

//             {/* Data */}
//             {!loading &&
//               !error &&
//               filteredResources.map((res) => (
//                 <div
//                   key={res._id || res.title}
//                   className="border rounded p-5 hover:shadow"
//                 >
//                   <h4 className="font-semibold mb-2">{res.title}</h4>
//                   <p className="text-xs text-gray-500 mb-1">
//                     {res.category}
//                   </p>
//                   <p className="text-xs text-gray-400">{res.date}</p>
//                 </div>
//               ))}

//             {/* Empty state */}
//             {!loading && !error && filteredResources.length === 0 && (
//               <p className="text-sm text-gray-500">
//                 No resources found for this category.
//               </p>
//             )}

//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ✅ TypeScript interface */
interface Resource {
  _id?: string;
  title: string;
  category: string;
  date: string;
}

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  /* ✅ Fetch from backend */
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/resources");
        if (!res.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data: Resource[] = await res.json();
        setResources(data);
      } catch (err) {
        setError("Unable to load resources");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  /* ✅ Filtering logic */
  const filteredResources =
    filter === "All"
      ? resources
      : resources.filter((r) => r.category === filter);

  const categories = ["All", "Violence Prevention", "Maternal & Child Health", "Research"];

  const categoryColors: Record<string, string> = {
    "Violence Prevention": "text-[#e05c3a] bg-[#fdf0ec]",
    "Maternal & Child Health": "text-[#0f7b6c] bg-[#e6f5f3]",
    "Research": "text-[#0f4f7b] bg-[#e6eef5]",
  };

  return (
    <>
      {/* <Navbar /> */}

      {/* Header */}
      <section className="bg-gradient-to-br from-[#1a2d0d] to-[#3b6b0f] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 block mb-3">
            Knowledge Hub
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Resources
          </h1>
          <p className="text-white/65 text-base">
            Knowledge resources, research, manuals and articles
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
              <h3 className="font-semibold text-[#0d2d3a] text-sm mb-4 pb-3 border-b border-gray-100">
                Filter by Focus Area
              </h3>
              <ul className="space-y-1.5">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setFilter(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        filter === cat
                          ? "bg-[#0f7b6c] text-white shadow-sm"
                          : "text-[#5a7570] hover:bg-[#e6f5f3] hover:text-[#0f7b6c]"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Cards area */}
          <div className="md:col-span-3">

            {/* Loading */}
            {loading && (
              <div className="flex justify-center py-20">
                <div className="w-10 h-10 border-4 border-[#3b6b0f]/20 border-t-[#3b6b0f] rounded-full animate-spin" />
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-[#fdf0ec] border border-[#e05c3a]/20 text-[#e05c3a] text-sm px-5 py-4 rounded-xl">
                ⚠️ {error}
              </div>
            )}

            {/* Data */}
            {!loading && !error && filteredResources.length > 0 && (
              <div className="grid md:grid-cols-2 gap-5">
                {filteredResources.map((res) => (
                  <div
                    key={res._id || res.title}
                    className="group bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="text-3xl mb-3">📄</div>

                    {/* Category badge */}
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[res.category] || "text-[#5a7570] bg-gray-100"
                      }`}
                    >
                      {res.category}
                    </span>

                    <h4
                      className="font-semibold text-[#0d2d3a] mt-3 mb-1 group-hover:text-[#3b6b0f] transition-colors leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {res.title}
                    </h4>

                    <p className="text-xs text-[#5a7570] mb-4">{res.date}</p>

                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 text-xs font-medium text-[#3b6b0f] border border-[#3b6b0f]/30 px-3 py-1.5 rounded-full hover:bg-[#edf5e6] transition-colors">
                        Preview
                      </button>
                      <button className="flex items-center gap-1 text-xs font-medium bg-[#3b6b0f] text-white px-3 py-1.5 rounded-full hover:bg-[#2d5509] transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty state */}
            {!loading && !error && filteredResources.length === 0 && (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">📭</div>
                <p className="text-sm text-[#5a7570]">
                  No resources found for this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}