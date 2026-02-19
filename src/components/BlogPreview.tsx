// import { Link } from "react-router-dom";

// const blogs = [
//   {
//     title: "Improving Maternal Health in Urban Communities",
//     excerpt: "Strengthening public health systems to support mothers and newborns.",
//     image: "/maternal_health.png"
//   },
//   {
//     title: "Preventing Violence Against Women",
//     excerpt: "Community-led interventions to ensure safety and dignity.",
//     image: "/preventing_violence.png"
//   }
// ];

// export default function BlogPreview() {
//   return (
//     // <section className="py-16 bg-gray-50">
//     //   <div className="max-w-7xl mx-auto px-6">
//     //     <h2 className="text-3xl font-light mb-8">Blogs & Media</h2>

//     //     <div className="grid md:grid-cols-2 gap-8">
//     //       {blogs.map(blog => (
//     //         <div key={blog.title} className="bg-white shadow rounded overflow-hidden">
//     //           <img src={blog.image} alt="" className="h-52 w-full object-cover" />
//     //           <div className="p-6">
//     //             <h3 className="font-semibold mb-2">{blog.title}</h3>
//     //             <p className="text-sm text-gray-600 mb-3">{blog.excerpt}</p>
//     //           </div>
//     //         <Link
//     //         to="/blogs"
//     //         className="text-blue-600 hover:text-pink-600 text-sm"
//     //         >                
//     //             Read More →
//     //         </Link>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>
//     <section className="max-w-6xl mx-auto px-6 py-20">
//     <h2 className="text-3xl mb-8">Blogs & Media</h2>

//     <div className="grid md:grid-cols-2 gap-8">
//         {blogs.map((blog) => (
//         <div
//             key={blog.id}
//             className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
//         >
//             {/* Image wrapper */}
//             <div className="h-56 w-full overflow-hidden">
//             <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-full object-cover"
//             />
//             </div>

//             {/* Content */}
//             <div className="p-5">
//             <h3 className="font-semibold mb-2">{blog.title}</h3>
//             <p className="text-sm text-gray-600 mb-3">
//                 {blog.description}
//             </p>

//             <a
//                 href={`/blogs/${blog.id}`}
//                 className="text-blue-600 hover:text-pink-600"
//             >
//                 Read More →
//             </a>
//             </div>
//         </div>
//         ))}
//     </div>
//     </section>
//   );
// }


import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Blog {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  emoji: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    tag: "Maternal Health",
    title: "Improving Maternal Health in Urban Communities",
    excerpt: "Strengthening public health systems to support mothers and newborns in underserved areas with targeted community-based interventions.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    gradient: "from-[#ffecd2] to-[#fcb69f]",
    emoji: "🤱",
  },
  {
    id: 2,
    tag: "Child Protection",
    title: "Preventing Violence Against Women & Children",
    excerpt: "Community-led interventions that are creating measurable change in safety, dignity, and access to justice for survivors.",
    date: "Dec 28, 2024",
    readTime: "4 min read",
    gradient: "from-[#a8edea] to-[#fed6e3]",
    emoji: "🛡️",
  },
  {
    id: 3,
    tag: "Adolescent Health",
    title: "Empowering Adolescents with Knowledge & Life Skills",
    excerpt: "How our adolescent health programme is building a generation of informed, empowered young people in urban settlements.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    gradient: "from-[#d4efdf] to-[#a8d8c8]",
    emoji: "🌱",
  },
];

const tagColors: Record<string, string> = {
  "Maternal Health": "text-[#e05c3a] bg-[#fdf0ec]",
  "Child Protection": "text-[#0f4f7b] bg-[#e6eef5]",
  "Adolescent Health": "text-[#0f7b6c] bg-[#e6f5f3]",
};

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="section-tag">Stories & Insights</span>
            <h2 className="section-title mb-0">Blogs & Media</h2>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[#0f7b6c] font-medium text-sm hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            View All Articles <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-[#faf8f5] rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className={`h-52 bg-gradient-to-br ${blog.gradient} flex items-center justify-center text-6xl`}>
                {blog.emoji}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${tagColors[blog.tag] || "text-[#0f7b6c] bg-[#e6f5f3]"}`}>
                    {blog.tag}
                  </span>
                  <span className="text-xs text-[#5a7570]">{blog.readTime}</span>
                </div>

                <h3 className="font-semibold text-[#0d2d3a] mb-2 leading-snug group-hover:text-[#0f7b6c] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {blog.title}
                </h3>

                <p className="text-sm text-[#5a7570] leading-relaxed mb-4">{blog.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#5a7570]">{blog.date}</span>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-sm font-medium text-[#0f7b6c] hover:text-[#e05c3a] flex items-center gap-1 transition-colors group-hover:gap-2 duration-200"
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="mt-14 bg-[#e6f5f3] rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-semibold text-[#0d2d3a] mb-1">Stay updated with our work</h3>
            <p className="text-sm text-[#5a7570]">Subscribe to our newsletter for stories, updates, and impact reports.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-full border border-[#0f7b6c]/20 text-sm focus:outline-none focus:border-[#0f7b6c] bg-white"
            />
            <button className="bg-[#0f7b6c] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0a6358] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



// interface Blog {
//   id: number;
//   title: string;
//   excerpt: string;
//   image: string;
// }

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: "Improving Maternal Health in Urban Communities",
//     excerpt:
//       "Strengthening public health systems to support mothers and newborns.",
//     image:"/maternal_health.png",
//   },
//   {
//     id: 2,
//     title: "Preventing Violence Against Women",
//     excerpt:
//       "Community-led interventions to ensure safety and dignity.",
//     image:"/preventing_violence.png",
//   },
// ];

// export default function BlogPreview() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-20">
//       <h2 className="text-3xl mb-8">Blogs & Media</h2>

//       <div className="grid md:grid-cols-2 gap-8">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
//           >
//             {/* Image */}
//             <div className="h-60.5 w-full overflow-hidden">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <h3 className="font-semibold mb-2">
//                 {blog.title}
//               </h3>

//               <p className="text-sm text-gray-600 mb-3">
//                 {blog.excerpt}
//               </p>

//               <a
//                 href={`/blogs/${blog.id}`}
//                 className="text-blue-600 hover:text-pink-600"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }