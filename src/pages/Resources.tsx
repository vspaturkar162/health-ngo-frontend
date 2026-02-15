import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ✅ TypeScript interface */
interface Resource {
  _id?: string;
  title: string;
  category: string;
  date: string;
}

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  /* ✅ Fetch from backend */
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/resources");
        if (!res.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data: Resource[] = await res.json();
        setResources(data);
      } catch (err) {
        setError("Unable to load resources");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  /* ✅ Filtering logic */
  const filteredResources =
    filter === "All"
      ? resources
      : resources.filter((r) => r.category === filter);

  return (
    <>
      {/* <Navbar /> */}

      {/* Header */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-light mb-2">Resources</h1>
          <p className="text-sm text-gray-600">
            Knowledge resources, research, manuals and articles
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <h3 className="font-semibold mb-4">Filter by Focus Area</h3>
            <ul className="space-y-2 text-sm">
              {[
                "All",
                "Violence Prevention",
                "Maternal & Child Health",
                "Research"
              ].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setFilter(cat)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      filter === cat
                        ? "bg-[#fdecec]"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Cards */}
          <div className="md:col-span-3 grid md:grid-cols-2 gap-6">

            {/* Loading */}
            {loading && (
              <p className="text-gray-500 text-sm">Loading resources...</p>
            )}

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Data */}
            {!loading &&
              !error &&
              filteredResources.map((res) => (
                <div
                  key={res._id || res.title}
                  className="border rounded p-5 hover:shadow"
                >
                  <h4 className="font-semibold mb-2">{res.title}</h4>
                  <p className="text-xs text-gray-500 mb-1">
                    {res.category}
                  </p>
                  <p className="text-xs text-gray-400">{res.date}</p>
                </div>
              ))}

            {/* Empty state */}
            {!loading && !error && filteredResources.length === 0 && (
              <p className="text-sm text-gray-500">
                No resources found for this category.
              </p>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}