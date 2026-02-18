// export default function PeopleAdmin() {
//   return (
//     <section className="mb-10">
//       <h2 className="text-xl font-semibold mb-2">People & Team</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Update leadership, staff, advisors and team members.
//       </p>
//       <button className="px-4 py-2 bg-green-600 text-white rounded">
//         Add Person
//       </button>
//     </section>
//   );
// }
export default function PeopleAdmin() {
  return (
    <section className="mb-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">People & Team</h2>
      <p className="text-sm text-gray-600 mb-4">
        Update leadership, staff, advisors and team members.
      </p>

      <button
        onClick={() => alert("error")}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Add Person
      </button>
    </section>
  );
}