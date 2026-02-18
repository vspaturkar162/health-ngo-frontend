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

export default function ResourcesAdmin() {
  return (
    <section className="mb-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Manage Resources</h2>
      <p className="text-sm text-gray-600 mb-4">
        Control PDFs, research articles, manuals and learning resources.
      </p>

      <button
        onClick={() => alert("error")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add Resource
      </button>
    </section>
  );
}