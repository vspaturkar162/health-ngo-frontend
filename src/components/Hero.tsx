export default function Hero() {
  return (
    <section className="relative bg-[#5b7fa6] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 py-16">
        <div>
          <h1 className="text-4xl font-light mb-4">
            Women & Children at the Centre of Change
          </h1>
          <p className="text-sm leading-relaxed mb-6">
            Building evidence-based solutions with communities,
            governments and public systems to improve health outcomes
            for women and children.
          </p>
          <a
            href="/work"
            className="inline-block bg-white text-black px-6 py-2 rounded"
          >
            Know More
          </a>
        </div>

        <img
          src="/hero.jpg"
          alt="Community health work"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}