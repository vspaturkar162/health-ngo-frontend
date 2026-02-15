// import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Research() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-6">
          Research & Evaluation
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Research and evaluation form the backbone of our work. We believe
          that strong evidence is essential for designing effective
          interventions and influencing policy and practice.
        </p>

        <h2 className="text-2xl font-light mb-4">What We Do</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Conduct operational and implementation research</li>
          <li>Evaluate programme outcomes and impact</li>
          <li>Document best practices and learnings</li>
          <li>Share evidence with policymakers and practitioners</li>
        </ul>

        <p className="text-gray-700 mt-6 leading-relaxed">
          Our research partnerships with academic institutions and public
          agencies help ensure that our programmes remain relevant,
          accountable, and impactful.
        </p>
      </section>

      <Footer />
    </>
  );
}