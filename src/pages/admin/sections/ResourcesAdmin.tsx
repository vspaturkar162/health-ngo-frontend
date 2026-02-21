// export default function ResourcesAdmin() {
//   return (
//     <section className="mb-10">
//       <h2 className="text-xl font-semibold mb-2">Manage Resources</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Control PDFs, research articles, manuals and learning resources.
//       </p>
//       <button className="px-4 py-2 bg-blue-600 text-white rounded">
//         Add Resource
//       </button>
//     </section>
//   );
// }



// import { FiBookOpen, FiUpload, FiFile, FiDownload, FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

/* ✅ Correct frontend Resource interface */
interface Resource {
  _id: string;
  title: string;
  category: string;
  date: string;
}

export default function ResourcesAdmin() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Research");

  /* ✅ Fetch resources */
  useEffect(() => {
    fetch(`${API}/resources`)
      .then((res) => res.json())
      .then(setResources)
      .catch(console.error);
  }, []);

  /* ✅ Add resource */
  const addResource = async () => {
    if (!title.trim()) {
      alert("Title required");
      return;
    }

    const payload = {
      title,
      category,
      date: new Date().toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      }),
    };

    const res = await fetch(`${API}/resources`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Failed to add resource");
      return;
    }

    const newResource: Resource = await res.json();
    setResources((prev) => [newResource, ...prev]);
    setTitle("");
  };

  /* ✅ Delete resource */
  const deleteResource = async (id: string) => {
    const ok = window.confirm("Delete this resource?");
    if (!ok) return;

    await fetch(`${API}/resources/${id}`, {
      method: "DELETE",
    });

    setResources((prev) => prev.filter((r) => r._id !== id));
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



// export default function ResourcesAdmin() {
//   return (
//     <section className="mb-10 bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-semibold mb-2">Manage Resources</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Control PDFs, research articles, manuals and learning resources.
//       </p>

//       <button
//         onClick={() => alert("error")}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//       >
//         Add Resource
//       </button>
//     </section>
//   );
// }