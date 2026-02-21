// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

// const blogs = [
//   {
//     id: "maternal-health",
//     title: "Improving Maternal Health in Urban Communities",
//     content:
//       "We work closely with public health systems to ensure quality care for mothers and newborns..."
//   },
//   {
//     id: "violence-prevention",
//     title: "Preventing Violence Against Women",
//     content:
//       "Community-led interventions play a critical role in preventing violence..."
//   }
// ];

// export default function Blogs() {
//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h1 className="text-4xl font-light mb-8">Blogs & Media</h1>

//         <div className="space-y-8">
//           {blogs.map((b) => (
//             <div key={b.id} className="border-b pb-6">
//               <h2 className="text-xl font-semibold mb-2">{b.title}</h2>
//               <p className="text-sm text-gray-600 mb-3">{b.content}</p>

//               <Link
//                 to={`/blogs/${b.id}`}
//                 className="text-blue-600 hover:text-pink-600"
//               >
//                 Read full article →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

interface Blog {
  _id: string;
  title: string;
  excerpt?: string;
  content: string;
}

const gradients = [
  "from-[#ffecd2] to-[#fcb69f]",
  "from-[#a8edea] to-[#fed6e3]",
  "from-[#d4efdf] to-[#a8d8c8]",
  "from-[#e0c3fc] to-[#8ec5fc]",
  "from-[#fccb90] to-[#d57eeb]",
  "from-[#84fab0] to-[#8fd3f4]",
];
const emojis = ["🤱", "🛡️", "🌱", "📊", "🏥", "🍎"];

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      (b.excerpt || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#0d2d3a] to-[#0f7b6c] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 block mb-3">
            Stories & Insights
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Blogs
          </h1>
          <p className="text-white/65 mb-8 text-base">
            Insights, research highlights, and stories from our work on the ground.
          </p>
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5a7570] text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full text-sm bg-white/95 text-[#0d2d3a] focus:outline-none focus:ring-2 focus:ring-white/40 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#0f7b6c]/20 border-t-[#0f7b6c] rounded-full animate-spin" />
          </div>
        )}

        {/* Empty */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 text-[#5a7570]">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-base">No articles found.</p>
          </div>
        )}

        {/* Cards */}
        {!loading && filtered.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((blog, i) => (
              <article
                key={blog._id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient placeholder (replace with blog.image if available) */}
                <div
                  className={`h-48 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-5xl`}
                >
                  {emojis[i % emojis.length]}
                </div>

                <div className="p-6">
                  <h2
                    className="font-semibold text-[#0d2d3a] mb-2 leading-snug group-hover:text-[#0f7b6c] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {blog.title}
                  </h2>

                  {blog.excerpt && (
                    <p className="text-sm text-[#5a7570] leading-relaxed mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  )}

                  <Link
                    to={`/blogs/${blog._id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#0f7b6c] hover:text-[#e05c3a] transition-colors group-hover:gap-2 duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}


// import { useEffect, useState } from "react";

// const API = process.env.REACT_APP_API_URL;

// interface Blog {
//   _id: string;
//   title: string;
//   excerpt?: string;
//   content: string;
// }

// export default function Blogs() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);

//   useEffect(() => {
//     fetch(`${API}/api/blogs`)
//       .then((res) => res.json())
//       .then(setBlogs);
//   }, []);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-semibold">Blogs</h1>

//       {blogs.map((blog) => (
//         <div key={blog._id} className="border p-4 rounded">
//           <h2 className="text-xl font-bold">{blog.title}</h2>
//           <p className="text-gray-600">{blog.excerpt}</p>
//         </div>
//       ))}
//     </div>
//   );
// }