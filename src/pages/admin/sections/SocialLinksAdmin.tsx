export default function SocialLinksAdmin() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>

      <input
        placeholder="Facebook URL"
        className="w-full border p-2 mb-2"
      />
      <input
        placeholder="Twitter URL"
        className="w-full border p-2 mb-2"
      />
      <input
        placeholder="Instagram URL"
        className="w-full border p-2 mb-4"
      />

      <button className="px-4 py-2 bg-indigo-600 text-white rounded">
        Update Links
      </button>
    </section>
  );
}