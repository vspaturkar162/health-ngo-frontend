import { useEffect } from "react";
import api from "../services/api";

import Hero from "../components/Hero";
import FocusAreas from "../components/FocusAreas";
import ImpactStats from "../components/ImpactStats";
import DonateBanner from "../components/DonateBanner";
import Footer from "../components/Footer";
import BlogPreview from "../components/BlogPreview";

export default function Home() {
  useEffect(() => {
    api
      .get("/health")
      .then((res) => {
        console.log("✅ Backend connected:", res.data);
      })
      .catch((err) => {
        console.error("❌ Backend connection failed:", err);
      });
  }, []);

  return (
  <>
    <Hero />

    {/* NGO Introduction Section */}
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-semibold mb-6">
        Empowering Communities Through Health & Dignity
      </h2>

      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
        HealthForAll is a community-driven non-governmental organisation
        committed to improving the health, safety, and well-being of
        women, children, and adolescents living in vulnerable urban
        settlements. We work at the grassroots level to strengthen
        public health systems, promote preventive care, and create
        sustainable change through community engagement.
      </p>

      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Through evidence-based interventions, partnerships with public
        institutions, and dedicated outreach teams, we aim to ensure
        that every individual—regardless of socio-economic status—
        has access to quality healthcare, protection, and opportunities
        to thrive.
      </p>
    </section>

    <ImpactStats />
    <BlogPreview />
    <DonateBanner />
    <FocusAreas />
    <Footer />
  </>
);
}