export default function DonateBanner() {
  return (
    <section className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/donate-bg.jpg')" }}>
      <div className="bg-white/80 max-w-md mx-auto p-6 text-center rounded">
        <h2 className="text-2xl font-light mb-4">Support Us</h2>
        <p className="text-sm mb-4">
          Every woman and child deserves a safe and healthy life.
        </p>
        <a
          href="/donate"
          className="inline-block bg-pink-600 text-white px-6 py-2 rounded"
        >
          Donate
        </a>
      </div>
    </section>
  );
}