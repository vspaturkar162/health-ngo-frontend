export default function AboutAdmin() {
  return (
    <section className="mb-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">About Pages</h2>

      <textarea
        placeholder="Our Story"
        className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
        rows={3}
      />
      <textarea
        placeholder="How We Work"
        className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
        rows={3}
      />
      <textarea
        placeholder="Research & Evaluation"
        className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
        rows={3}
      />
      <textarea
        placeholder="Reach & Impact"
        className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        rows={3}
      />

      <button
        onClick={() => alert("About page update coming soon")}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Save Changes
      </button>
    </section>
  );
}