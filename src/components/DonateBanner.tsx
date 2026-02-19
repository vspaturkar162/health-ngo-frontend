export default function DonateBanner() {
  return (
    <section className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/donate-bg.jpg')" }}>
      <div className="bg-white/80 max-w-md mx-auto p-6 text-center rounded">
        <h2 className="text-2xl font-light mb-4">Support Us</h2>
        <p className="text-sm mb-4">
          Every woman and child deserves a safe and healthy life.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4 bg-sky-100 p-5 rounded-lg">
          Your support helps us reach women and children who lack access to
          essential healthcare, nutrition, and protection services. Every
          contribution strengthens community-based programmes that create
          lasting and measurable impact.
          <br />
          By partnering with us, you are not just donating — you are helping
          build healthier families, safer communities, and a future where
          every child and woman has the opportunity to thrive.
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