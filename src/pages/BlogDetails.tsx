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

  if (!blog) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-light mb-6">{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded mb-8"
      />

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
    </section>
  );
}