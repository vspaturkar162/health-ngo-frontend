// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-3xl mb-4">About Us</h1>
        <p>
          We are a health-focused NGO working to improve the lives of
          women, children and adolescents through community-based
          interventions.
        </p>
      </div>
      <Footer />
    </>
  );
}