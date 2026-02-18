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

  return (
    <section className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Add Blog
      </h2>

      <div className="grid gap-4">
        <input
          placeholder="Title"
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          placeholder="Image URL"
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <textarea
          placeholder="Excerpt"
          rows={3}
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
        />

        <textarea
          placeholder="Full Content"
          rows={6}
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
      </div>

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Save Blog
      </button>
    </section>
  );
}