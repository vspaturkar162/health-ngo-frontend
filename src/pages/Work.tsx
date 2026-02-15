// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Work() {
  return (
    <>
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="bg-[#5b7fa6] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-light mb-4">Our Work</h1>
          <p className="max-w-3xl text-sm leading-relaxed">
            We work with vulnerable communities, public health and safety systems
            to develop evidence-based models that address urban health challenges,
            with a strong focus on women and children.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-10">
            Women & Children at the Centre of Change
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              {
                title: "Pregnancy",
                desc: "Improving maternal and newborn healthcare services."
              },
              {
                title: "Birth",
                desc: "Encouraging safe institutional deliveries."
              },
              {
                title: "Childhood",
                desc: "Preventing malnutrition and improving child health."
              },
              {
                title: "Adolescence",
                desc: "Education on nutrition, gender equity and wellbeing."
              },
              {
                title: "Adulthood",
                desc: "Empowering communities to prevent violence."
              }
            ].map((item) => (
              <div key={item.title} className="p-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#e8eef6] mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-10">
            Scaling Through Partnerships
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Government Partnerships</h3>
              <p>
                We work closely with public health systems and government agencies
                to strengthen service delivery and ensure sustainability of
                community health programmes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Funding Partnerships</h3>
              <p>
                We collaborate with corporate houses, donor agencies and
                foundations to scale proven models and maximise impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">NGO Partnerships</h3>
              <p>
                We support non-profit organisations with technical expertise and
                capacity building to implement effective health interventions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Research Partnerships</h3>
              <p>
                Our research collaborations help generate evidence to inform
                policy, practice and innovation in public health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}