export default function OurWorkPreview() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-light mb-4">Our Work</h2>
          <p className="text-sm text-gray-600 mb-4">
            We work with communities and public systems to improve
            health outcomes for women and children.
          </p>
          <button className="border px-5 py-2">Know More</button>
        </div>
        <img src="/childrens.png" className="rounded shadow" alt ="child"/>
      </div>
    </section>
  );
}