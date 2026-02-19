// import Navbar from "../../components/Navbar";


export default function HowWeWork() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-6">How We Work</h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Our approach is rooted in community engagement, evidence-based
          interventions, and strong partnerships with public systems. We work
          closely with women, children, and adolescents in urban informal
          settlements to address health, nutrition, and safety challenges.
        </p>

        <h2 className="text-2xl font-light mb-4">Our Approach</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Community-centred programme design</li>
          <li>Strengthening public health and protection systems</li>
          <li>Building local capacity and leadership</li>
          <li>Using research and data to guide action</li>
        </ul>

        <p className="text-gray-700 mt-6 leading-relaxed">
          By combining grassroots engagement with system-level change, we aim
          to create sustainable and scalable solutions that improve the lives
          of women and children.
        </p>
      </section>

    </>
  );
}