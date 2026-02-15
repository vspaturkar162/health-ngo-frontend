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
interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Improving Maternal Health in Urban Communities",
    excerpt:
      "Strengthening public health systems to support mothers and newborns.",
    image:"/maternal_health.png",
  },
  {
    id: 2,
    title: "Preventing Violence Against Women",
    excerpt:
      "Community-led interventions to ensure safety and dignity.",
    image:"/preventing_violence.png",
  },
];

export default function BlogPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl mb-8">Blogs & Media</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className="h-60.5 w-full overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold mb-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                {blog.excerpt}
              </p>

              <a
                href={`/blogs/${blog.id}`}
                className="text-blue-600 hover:text-pink-600"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}