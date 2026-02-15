const stats = [
  { value: "187,839", label: "Pregnant women assisted" },
  { value: "89,604", label: "Children screened" },
  { value: "27%", label: "Reduction in child malnutrition" },
  { value: "94%", label: "Successful referrals" }
];

export default function ImpactStats() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-light mb-10">Reach & Impact</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#fdecec] p-6 rounded">
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}