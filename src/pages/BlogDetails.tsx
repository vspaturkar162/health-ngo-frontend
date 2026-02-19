// // import { Helmet } from 'react-helmet-async';

// // export default function BlogDetails() {
// //   const blog = {
// //     title: "How to prevent seasonal flu",
// //     date: "2026-02-10",
// //     author: "Dr. Priya",
// //     image: "https://www.yourngo.org/blog/flu.png"
// //   };

// //   return (
// //     <>
// //       <Helmet>
// //         <script type="application/ld+json">
// //           {JSON.stringify({
// //             "@context": "https://schema.org",
// //             "@type": "BlogPosting",
// //             "headline": blog.title,
// //             "datePublished": blog.date,
// //             "author": {
// //               "@type": "Person",
// //               "name": blog.author
// //             },
// //             "publisher": {
// //               "@type": "Organization",
// //               "name": "The Health NGO",
// //               "logo": {
// //                 "@type": "ImageObject",
// //                 "url": "https://www.yourngo.org/logo.png"
// //               }
// //             },
// //             "image": blog.image
// //           })}
// //         </script>
// //       </Helmet>

// //       <h1>{blog.title}</h1>
// //       <p>By {blog.author}</p>
// //     </>
// //   );
// // }
// import { useParams } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function BlogDetails() {
//   const { id } = useParams();

//   return (
//     <>
//       {/* <Navbar /> */}

//       <section className="py-16 max-w-4xl mx-auto px-6">
//         <h1 className="text-3xl font-light mb-4">
//           {id?.replace("-", " ").toUpperCase()}
//         </h1>

//         <p className="text-gray-700 leading-relaxed">
//           This page contains detailed information about the selected blog or media article.
//           In the real system, this will come from the backend.
//         </p>
//       </section>

//       <Footer />
//     </>
//   );
// }


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  content: string;
  image: string;
}

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/blogs/${id}`)
      .then((res) => res.json())
      .then(setBlog);
  }, [id]);

  if (!blog)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#0f7b6c]/20 border-t-[#0f7b6c] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#5a7570] text-sm">Loading article…</p>
        </div>
      </div>
    );

  return (
    <section className="bg-[#faf8f5] min-h-screen">
      {/* Hero image */}
      <div className="w-full h-72 md:h-[440px] overflow-hidden bg-[#e6f5f3]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article card */}
      <div className="max-w-3xl mx-auto px-6 -mt-10 relative z-10 pb-20">
        <div className="bg-white rounded-3xl shadow-lg px-8 md:px-12 py-10 border border-gray-100">
          {/* Back link */}
          <a
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0f7b6c] hover:underline mb-6 block"
          >
            ← Back to all articles
          </a>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-bold text-[#0d2d3a] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {blog.title}
          </h1>

          {/* Divider */}
          <div className="w-12 h-1 bg-gradient-to-r from-[#0f7b6c] to-[#18a290] rounded-full mb-8" />

          {/* Content */}
          <p className="text-[#3a5550] leading-[1.9] whitespace-pre-line text-base">
            {blog.content}
          </p>

          {/* Share strip */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="/blogs"
              className="text-sm text-[#0f7b6c] font-medium hover:underline"
            >
              ← Back to Blogs
            </a>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#5a7570]">Share:</span>
              {["Twitter", "LinkedIn", "WhatsApp"].map((s) => (
                <button
                  key={s}
                  className="text-xs border border-gray-200 text-[#5a7570] px-3 py-1.5 rounded-full hover:border-[#0f7b6c] hover:text-[#0f7b6c] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Donate nudge */}
        <div className="mt-6 bg-gradient-to-br from-[#0f7b6c] to-[#18a290] rounded-2xl p-6 text-center text-white">
          <p className="font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            Make an Impact Today
          </p>
          <p className="text-white/70 text-sm mb-4">
            Support the work you just read about.
          </p>
          <a
            href="/donate"
            className="inline-block bg-white text-[#0f7b6c] font-semibold text-sm px-6 py-2.5 rounded-full hover:shadow-lg transition-shadow"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// interface Blog {
//   title: string;
//   content: string;
//   image: string;
// }

// export default function BlogDetail() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState<Blog | null>(null);

//   useEffect(() => {
//     fetch(`http://localhost:4000/api/blogs/${id}`)
//       .then((res) => res.json())
//       .then(setBlog);
//   }, [id]);

//   if (!blog) return <p className="text-center py-20">Loading...</p>;

//   return (
//     <section className="max-w-4xl mx-auto px-6 py-16">
//       <h1 className="text-3xl font-light mb-6">{blog.title}</h1>

//       <img
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-80 object-cover rounded mb-8"
//       />

//       <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//         {blog.content}
//       </p>
//     </section>
//   );
// }