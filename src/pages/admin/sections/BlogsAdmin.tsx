// import { useState } from "react";

// export default function BlogsAdmin() {
//   const [form, setForm] = useState({
//     title: "",
//     excerpt: "",
//     content: "",
//     image: "",
//   });

//   const submit = async () => {
//     await fetch("http://localhost:4000/api/blogs", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     alert("Blog added");
//   };

//   return (
//     <section>
//       <h2 className="text-xl mb-4">Add Blog</h2>

//       <input
//         placeholder="Title"
//         className="input"
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//       />
//       <input
//         placeholder="Image URL"
//         className="input"
//         onChange={(e) => setForm({ ...form, image: e.target.value })}
//       />
//       <textarea
//         placeholder="Excerpt"
//         className="input"
//         onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
//       />
//       <textarea
//         placeholder="Full Content"
//         className="input"
//         rows={6}
//         onChange={(e) => setForm({ ...form, content: e.target.value })}
//       />

//       <button className="btn" onClick={submit}>
//         Save Blog
//       </button>
//     </section>
//   );
// }



import { useState } from "react";
import { FiUpload, FiImage, FiEdit2, FiTrash2 } from "react-icons/fi";

const API = process.env.REACT_APP_API_URL;

export default function BlogsAdmin() {
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
  });

  const submit = async () => {
    if (!form.title || !form.content) {
      alert("Title and content are required");
      return;
    }

    const payload = {
      ...form,
      slug: form.title.toLowerCase().replace(/\s+/g, "-"),
      author: "000000000000000000000000", // temporary admin author
      tags: [],
    };

    const res = await fetch(`${API}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Failed to save blog");
      return;
    }

    alert("Blog added successfully");

    setForm({
      title: "",
      excerpt: "",
      content: "",
      image: "",
    });
  };

  // Sample recent blogs (you can replace with actual data)
  const recentBlogs = [
    { id: 1, title: "Community Health Initiatives", status: "Published", date: "2024-01-15" },
    { id: 2, title: "Women Empowerment Programs", status: "Draft", date: "2024-01-10" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <FiEdit2 className="opacity-80" />
          Blog Management
        </h2>
        <p className="text-blue-100 mt-2 text-sm">Create & manage your blog posts</p>
      </div>

      <div className="p-8">
        {/* Form */}
        <div className="grid gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Blog Title
            </label>
            <input
              placeholder="e.g., Empowering Communities Through Health Education"
              className="w-full border border-gray-200 rounded-xl px-5 py-3 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all bg-gray-50 hover:bg-white"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image URL
            </label>
            <div className="flex gap-3">
              <input
                placeholder="https://example.com/image.jpg"
                className="flex-1 border border-gray-200 rounded-xl px-5 py-3 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all bg-gray-50 hover:bg-white"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
              <button className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 
                transition-all flex items-center gap-2">
                <FiImage size={20} />
                <span className="hidden sm:inline">Browse</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt / Summary
            </label>
            <textarea
              placeholder="Write a brief summary of your blog post..."
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-5 py-3 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all bg-gray-50 hover:bg-white resize-none"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Content
            </label>
            <textarea
              placeholder="Write your blog content here..."
              rows={8}
              className="w-full border border-gray-200 rounded-xl px-5 py-3 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all bg-gray-50 hover:bg-white resize-none font-mono text-sm"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </div>

          <button
            onClick={submit}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 
              rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all 
              transform hover:scale-[1.02] active:scale-[0.98] shadow-lg 
              hover:shadow-xl flex items-center justify-center gap-3 font-medium"
          >
            <FiUpload size={20} />
            Publish Blog Post
          </button>
        </div>

        {/* Recent Blogs */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Blog Posts</h3>
          <div className="space-y-3">
            {recentBlogs.map((blog) => (
              <div key={blog.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl 
                  hover:bg-gray-100 transition-all group">
                <div>
                  <h4 className="font-medium text-gray-800">{blog.title}</h4>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium
                    ${blog.status === 'Published' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'}`}>
                    {blog.status}
                  </span>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



// import { useState } from "react";

// const API = process.env.REACT_APP_API_URL;

// export default function BlogsAdmin() {
//   const [form, setForm] = useState({
//     title: "",
//     excerpt: "",
//     content: "",
//     image: "",
//   });

//   const submit = async () => {
//     if (!form.title || !form.content) {
//       alert("Title and content are required");
//       return;
//     }

//     const payload = {
//       ...form,
//       slug: form.title.toLowerCase().replace(/\s+/g, "-"),
//       author: "000000000000000000000000", // temporary admin author
//       tags: [],
//     };

//     const res = await fetch(`${API}/blogs`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) {
//       alert("Failed to save blog");
//       return;
//     }

//     alert("Blog added successfully");

//     setForm({
//       title: "",
//       excerpt: "",
//       content: "",
//       image: "",
//     });
//   };

//   return (
//     <section className="bg-white rounded-lg shadow p-6 space-y-6">
//       <h2 className="text-xl font-semibold text-gray-800">
//         Add Blog
//       </h2>

//       <div className="grid gap-4">
//         <input
//           placeholder="Title"
//           className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />

//         <input
//           placeholder="Image URL"
//           className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e) => setForm({ ...form, image: e.target.value })}
//         />

//         <textarea
//           placeholder="Excerpt"
//           rows={3}
//           className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
//         />

//         <textarea
//           placeholder="Full Content"
//           rows={6}
//           className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e) => setForm({ ...form, content: e.target.value })}
//         />
//       </div>

//       <button
//         onClick={submit}
//         className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//       >
//         Save Blog
//       </button>
//     </section>
//   );
// }