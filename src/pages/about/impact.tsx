import { useEffect, useState } from "react";

export default function Impact() {
  const [impact, setImpact] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/about`)
      .then((res) => res.json())
      .then((data) => {
        setImpact(data?.impact || "");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-500">
        Loading impact data…
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2
        className="text-3xl font-semibold text-gray-800 mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Reach & Impact
      </h2>

      {impact ? (
        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
          {impact}
        </p>
      ) : (
        <p className="text-gray-500">
          Impact information will be updated soon.
        </p>
      )}
    </section>
  );
}