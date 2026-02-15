export default function AboutAdmin() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">About Pages</h2>

      <textarea
        placeholder="Our Story"
        className="w-full border p-2 mb-3"
      />
      <textarea
        placeholder="How We Work"
        className="w-full border p-2 mb-3"
      />
      <textarea
        placeholder="Research & Evaluation"
        className="w-full border p-2 mb-3"
      />
      <textarea
        placeholder="Reach & Impact"
        className="w-full border p-2 mb-3"
      />

      <button className="px-4 py-2 bg-black text-white rounded">
        Save Changes
      </button>
    </section>
  );
}