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
      <ImpactStats />
      <BlogPreview />
      <DonateBanner />
      <FocusAreas />
      <Footer />
    </>
  );
}