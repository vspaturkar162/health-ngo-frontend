// import Navbar from "../../components/Navbar";

const people = [
  {
    name: "Dr. Armida Fernandez",
    role: "Founder",
    description:
      "A paediatrician and public health expert with decades of experience working with vulnerable communities."
  },
  {
    name: "Programme Team",
    role: "Implementation & Outreach",
    description:
      "Dedicated professionals working directly with communities to deliver health and protection services."
  },
  {
    name: "Research & Advocacy Team",
    role: "Evidence & Policy",
    description:
      "Researchers and advocates driving evidence-based practice and systemic change."
  }
];

export default function People() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-10">People</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {people.map((p) => (
            <div
              key={p.name}
              className="border rounded p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-blue-600 mb-2">{p.role}</p>
              <p className="text-sm text-gray-700">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}