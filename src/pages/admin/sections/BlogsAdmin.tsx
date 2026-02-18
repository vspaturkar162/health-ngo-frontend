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

    const res = await fetch(`${API}/api/blogs`, {
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
    <section>
      <h2 className="text-xl mb-4">Add Blog</h2>

      <input
        placeholder="Title"
        className="input"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Image URL"
        className="input"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <textarea
        placeholder="Excerpt"
        className="input"
        value={form.excerpt}
        onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
      />
      <textarea
        placeholder="Full Content"
        className="input"
        rows={6}
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button className="btn" onClick={submit}>
        Save Blog
      </button>
    </section>
  );
}