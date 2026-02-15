// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: "maternal-health",
    title: "Improving Maternal Health in Urban Communities",
    content:
      "We work closely with public health systems to ensure quality care for mothers and newborns..."
  },
  {
    id: "violence-prevention",
    title: "Preventing Violence Against Women",
    content:
      "Community-led interventions play a critical role in preventing violence..."
  }
];

export default function Blogs() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-8">Blogs & Media</h1>

        <div className="space-y-8">
          {blogs.map((b) => (
            <div key={b.id} className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-2">{b.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{b.content}</p>

              <Link
                to={`/blogs/${b.id}`}
                className="text-blue-600 hover:text-pink-600"
              >
                Read full article →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}