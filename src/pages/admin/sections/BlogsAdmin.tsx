// export default function BlogsAdmin() {
//   return (
//     <section className="mb-10">
//       <h2 className="text-xl font-semibold mb-2">Manage Blogs</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Add, edit or delete blog posts and media articles.
//       </p>
//       <button className="px-4 py-2 bg-pink-600 text-white rounded">
//         Add New Blog
//       </button>
//     </section>
//   );
// }
import { useState } from "react";

export default function BlogsAdmin() {
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
  });

  const submit = async () => {
    await fetch("http://localhost:4000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Blog added");
  };

  return (
    <section>
      <h2 className="text-xl mb-4">Add Blog</h2>

      <input
        placeholder="Title"
        className="input"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Image URL"
        className="input"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <textarea
        placeholder="Excerpt"
        className="input"
        onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
      />
      <textarea
        placeholder="Full Content"
        className="input"
        rows={6}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button className="btn" onClick={submit}>
        Save Blog
      </button>
    </section>
  );
}