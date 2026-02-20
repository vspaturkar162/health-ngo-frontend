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

export default function ResourcesAdmin() {
  const recentResources = [
    { id: 1, name: "Annual Report 2023.pdf", type: "PDF", size: "2.4 MB", date: "2024-01-20" },
    { id: 2, name: "Community Health Guide.docx", type: "Document", size: "1.1 MB", date: "2024-01-18" },
    { id: 3, name: "Research Paper - Maternal Health.pdf", type: "PDF", size: "3.7 MB", date: "2024-01-15" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          {/* <FiBookOpen className="opacity-80" /> */}
          Resource Library
        </h2>
        <p className="text-emerald-100 mt-2 text-sm">Upload and manage resources, PDFs and documents</p>
      </div>

      <div className="p-8">
        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 mb-8 
          hover:border-emerald-500 transition-all group cursor-pointer">
          <div className="text-center">
            {/* <FiUpload className="mx-auto text-4xl text-gray-400 group-hover:text-emerald-500 mb-3" /> */}
            <p className="text-gray-600 font-medium">Drag & drop files here or click to browse</p>
            <p className="text-sm text-gray-500 mt-1">Supports PDF, DOC, DOCX, PPT (Max 10MB)</p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {["Research Papers", "Reports", "Guidelines"].map((category) => (
            <button key={category} 
              className="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 
                transition-all text-left group">
              {/* <FiFile className="text-emerald-600 mb-2" size={20} /> */}
              <h4 className="font-medium text-gray-800">{category}</h4>
              <p className="text-xs text-gray-500">12 items</p>
            </button>
          ))}
        </div>

        {/* Resource List */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Uploads</h3>
          <div className="space-y-3">
            {recentResources.map((resource) => (
              <div key={resource.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl 
                  hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-4">
                  {/* <FiFile className="text-emerald-600" size={24} /> */}
                  <div>
                    <h4 className="font-medium text-gray-800">{resource.name}</h4>
                    <p className="text-xs text-gray-500">{resource.type} • {resource.size} • {resource.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    {/* <FiDownload className="text-gray-500" size={18} /> */}
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    {/* <FiTrash2 className="text-red-500" size={18} /> */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-6 w-full bg-gradient-to-r from-emerald-600 to-emerald-700 
          text-white px-6 py-3 rounded-xl hover:from-emerald-700 hover:to-emerald-800 
          transition-all transform hover:scale-[1.02] active:scale-[0.98] 
          shadow-lg hover:shadow-xl font-medium">
          Add New Resource
        </button>
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