
// import { useEffect, useState } from "react";

// const API = process.env.REACT_APP_API_URL;

// /* ✅ Correct frontend Resource interface */
// interface Resource {
//   _id: string;
//   title: string;
//   category: string;
//   date: string;
// }

// export default function ResourcesAdmin() {
//   const [resources, setResources] = useState<Resource[]>([]);
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("Research");

//   /* ✅ Fetch resources */
//   useEffect(() => {
//     fetch(`${API}/resources`)
//       .then((res) => res.json())
//       .then(setResources)
//       .catch(console.error);
//   }, []);

//   /* ✅ Add resource */
//   const addResource = async () => {
//     if (!title.trim()) {
//       alert("Title required");
//       return;
//     }

//     const payload = {
//       title,
//       category,
//       date: new Date().toLocaleDateString("en-IN", {
//         month: "short",
//         year: "numeric",
//       }),
//     };

//     const res = await fetch(`${API}/resources`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) {
//       alert("Failed to add resource");
//       return;
//     }

//     const newResource: Resource = await res.json();
//     setResources((prev) => [newResource, ...prev]);
//     setTitle("");
//   };

//   /* ✅ Delete resource */
//   const deleteResource = async (id: string) => {
//     const ok = window.confirm("Delete this resource?");
//     if (!ok) return;

//     await fetch(`${API}/resources/${id}`, {
//       method: "DELETE",
//     });

//     setResources((prev) => prev.filter((r) => r._id !== id));
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
//         <h2 className="text-2xl font-semibold text-white">
//           Resource Library
//         </h2>
//         <p className="text-emerald-100 mt-2 text-sm">
//           Upload and manage resources
//         </p>
//       </div>

//       <div className="p-8">
//         {/* Add resource */}
//         <div className="grid gap-4 mb-8">
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Resource title"
//             className="border rounded-xl px-4 py-3"
//           />

//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="border rounded-xl px-4 py-3"
//           >
//             <option>Research</option>
//             <option>Maternal & Child Health</option>
//             <option>Violence Prevention</option>
//           </select>

//           <button
//             onClick={addResource}
//             className="bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition"
//           >
//             Add Resource
//           </button>
//         </div>

//         {/* Resource list */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Recent Uploads</h3>

//           <div className="space-y-3">
//             {resources.map((resource) => (
//               <div
//                 key={resource._id}
//                 className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
//               >
//                 <div>
//                   <h4 className="font-medium text-gray-800">
//                     {resource.title}
//                   </h4>
//                   <p className="text-xs text-gray-500">
//                     {resource.category} • {resource.date}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => deleteResource(resource._id)}
//                   className="text-red-600 hover:underline text-sm"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

/* ✅ Resource interface (added fileUrl) */
interface Resource {
  _id: string;
  title: string;
  category: string;
  date: string;
  fileUrl: string;
}

export default function ResourcesAdmin() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Research");
  const [file, setFile] = useState<File | null>(null);

  /* ✅ Fetch resources */
  useEffect(() => {
    fetch(`${API}/resources`)
      .then((res) => res.json())
      .then(setResources)
      .catch(console.error);
  }, []);

  /* ✅ Add resource with PDF */
  const addResource = async () => {
    if (!title.trim()) {
      alert("Title required");
      return;
    }

    if (!file) {
      alert("Please upload a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append(
      "date",
      new Date().toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      })
    );
    formData.append("file", file);

    const res = await fetch(`${API}/resources`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      alert("Failed to add resource");
      return;
    }

    const newResource: Resource = await res.json();
    setResources((prev) => [newResource, ...prev]);
    setTitle("");
    setFile(null);

    alert("Resource added successfully");
  };

  /* ✅ Delete resource */
  const deleteResource = async (id: string) => {
    const ok = window.confirm("Delete this resource?");
    if (!ok) return;

    await fetch(`${API}/resources/${id}`, {
      method: "DELETE",
    });

    setResources((prev) => prev.filter((r) => r._id !== id));
    alert("Resource deleted");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white">
          Resource Library
        </h2>
        <p className="text-emerald-100 mt-2 text-sm">
          Upload and manage resources
        </p>
      </div>

      <div className="p-8">
        {/* Add resource */}
        <div className="grid gap-4 mb-8">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Resource title"
            className="border rounded-xl px-4 py-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option>Research</option>
            <option>Maternal & Child Health</option>
            <option>Violence Prevention</option>
          </select>

          {/* ✅ PDF Upload Field */}
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="border rounded-xl px-4 py-3 bg-white"
          />

          <button
            onClick={addResource}
            className="bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition"
          >
            Add Resource
          </button>
        </div>

        {/* Resource list */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Uploads</h3>

          <div className="space-y-3">
            {resources.map((resource) => (
              <div
                key={resource._id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div>
                  <h4 className="font-medium text-gray-800">
                    {resource.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {resource.category} • {resource.date}
                  </p>
                </div>

                <button
                  onClick={() => deleteResource(resource._id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}