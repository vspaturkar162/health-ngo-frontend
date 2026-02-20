// export default function AboutAdmin() {
//   return (
//     <section className="mb-10 bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">About Pages</h2>

//       <textarea
//         placeholder="Our Story"
//         className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
//         rows={3}
//       />
//       <textarea
//         placeholder="How We Work"
//         className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
//         rows={3}
//       />
//       <textarea
//         placeholder="Research & Evaluation"
//         className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
//         rows={3}
//       />
//       <textarea
//         placeholder="Reach & Impact"
//         className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
//         rows={3}
//       />

//       <button
//         onClick={() => alert("About page update coming soon")}
//         className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
//       >
//         Save Changes
//       </button>
//     </section>
//   );
// }


// import { FiInfo, FiSave, FiEye, FiEdit3 } from "react-icons/fi";
import { useState } from "react";

export default function AboutAdmin() {
  const [aboutContent, setAboutContent] = useState({
    story: "HealthForAll was founded in 2002 with a mission to improve health outcomes for women and children in underserved communities...",
    howWeWork: "Our approach combines grassroots engagement, public system partnerships, and evidence-based design to create lasting change...",
    research: "We conduct rigorous research and evaluation to ensure our programs are effective and scalable...",
    impact: "Over 2.5L+ women reached across 80K+ communities with 22+ years of continuous impact..."
  });
  const saveAbout = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/about`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aboutContent),
    });

    alert("About content updated");
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          {/* <FiInfo className="opacity-80" /> */}
          About Pages    
        </h2>
        <p className="text-amber-100 mt-2 text-sm">Manage content for About, Approach, and Impact pages</p>
      </div>

      <div className="p-8">
        <div className="grid gap-6">
          {/* Our Story */}
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                {/* <FiEdit3 className="text-amber-600" /> */}
                Our Story
              </label>
              <button className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1">
                {/* <FiEye size={16} /> */}
                Preview
              </button>
            </div>
            <textarea
              value={aboutContent.story}
              onChange={(e) => setAboutContent({...aboutContent, story: e.target.value})}
              className="w-full border border-gray-200 rounded-xl px-5 py-3 
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
                transition-all bg-white hover:bg-gray-50"
              rows={4}
            />
          </div>

          {/* How We Work */}
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                {/* <FiEdit3 className="text-amber-600" /> */}
                How We Work
              </label>
            </div>
            <textarea
              value={aboutContent.howWeWork}
              onChange={(e) => setAboutContent({...aboutContent, howWeWork: e.target.value})}
              className="w-full border border-gray-200 rounded-xl px-5 py-3 
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
                transition-all bg-white hover:bg-gray-50"
              rows={4}
            />
          </div>

          {/* Research & Evaluation */}
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                {/* <FiEdit3 className="text-amber-600" /> */}
                Research & Evaluation
              </label>
            </div>
            <textarea
              value={aboutContent.research}
              onChange={(e) => setAboutContent({...aboutContent, research: e.target.value})}
              className="w-full border border-gray-200 rounded-xl px-5 py-3 
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
                transition-all bg-white hover:bg-gray-50"
              rows={4}
            />
          </div>

          {/* Reach & Impact */}
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                {/* <FiEdit3 className="text-amber-600" /> */}
                Reach & Impact
              </label>
            </div>
            <textarea
              value={aboutContent.impact}
              onChange={(e) => setAboutContent({...aboutContent, impact: e.target.value})}
              className="w-full border border-gray-200 rounded-xl px-5 py-3 
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
                transition-all bg-white hover:bg-gray-50"
              rows={4}
            />
          </div>

          <button
            onClick={saveAbout}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 
              rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all 
              transform hover:scale-[1.02] active:scale-[0.98] shadow-lg 
              hover:shadow-xl flex items-center justify-center gap-3 font-medium"
          >
            {/* <FiSave size={20} /> */}
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}