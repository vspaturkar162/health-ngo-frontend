// export default function SocialLinksAdmin() {
//   return (
//     <section className="mb-10">
//       <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>

//       <input
//         placeholder="Facebook URL"
//         className="w-full border p-2 mb-2"
//       />
//       <input
//         placeholder="Twitter URL"
//         className="w-full border p-2 mb-2"
//       />
//       <input
//         placeholder="Instagram URL"
//         className="w-full border p-2 mb-4"
//       />

//       <button className="px-4 py-2 bg-indigo-600 text-white rounded">
//         Update Links
//       </button>
//     </section>
//   );
// }



import { FiLink, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiSave } from "react-icons/fi";
import { useState } from "react";

export default function SocialLinksAdmin() {
  const [links, setLinks] = useState({
    facebook: "https://facebook.com/healthforall",
    twitter: "https://twitter.com/healthforall",
    instagram: "https://instagram.com/healthforall",
    linkedin: "https://linkedin.com/company/healthforall",
    youtube: "https://youtube.com/healthforall"
  });

  const socialIcons = {
    facebook: FiFacebook,
    twitter: FiTwitter,
    instagram: FiInstagram,
    linkedin: FiLinkedin,
    youtube: FiYoutube
  };

  const socialColors = {
    facebook: "bg-blue-600",
    twitter: "bg-sky-500",
    instagram: "bg-pink-600",
    linkedin: "bg-blue-700",
    youtube: "bg-red-600"
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <FiLink className="opacity-80" />
          Social Media Links
        </h2>
        <p className="text-indigo-100 mt-2 text-sm">Manage your social media presence</p>
      </div>

      <div className="p-8">
        <div className="grid gap-5">
          {Object.entries(links).map(([platform, url]) => {
            // const Icon = socialIcons[platform as keyof typeof socialIcons];
            const color = socialColors[platform as keyof typeof socialColors];
            
            return (
              <div key={platform} className="flex items-center gap-4 group">
                <div className={`${color} p-3 rounded-xl text-white shadow-md`}>
                  {/* <Icon size={20} /> */}
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 capitalize mb-1 block">
                    {platform}
                  </label>
                  <input
                    value={url}
                    onChange={(e) => setLinks({...links, [platform]: e.target.value})}
                    placeholder={`https://${platform}.com/your-profile`}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                      transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Preview Section */}
        <div className="mt-8 p-5 bg-gray-50 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Preview</h3>
          <div className="flex gap-3">
            {Object.entries(links).map(([platform, url]) => {
              // const Icon = socialIcons[platform as keyof typeof socialIcons];
              const color = socialColors[platform as keyof typeof socialColors];
              
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color} p-3 rounded-xl text-white hover:scale-110 
                    transition-transform shadow-md hover:shadow-lg`}
                >
                  {/* <Icon size={18} /> */}
                </a>
              );
            })}
          </div>
        </div>

        <button
          className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 
            text-white px-6 py-4 rounded-xl hover:from-indigo-700 hover:to-indigo-800 
            transition-all transform hover:scale-[1.02] active:scale-[0.98] 
            shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
        >
          <FiSave size={20} />
          Update Social Links
        </button>
      </div>
    </div>
  );
}



// export default function SocialLinksAdmin() {
//   return (
//     <section className="mb-10 bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Social Media Links</h2>

//       <input
//         placeholder="Facebook URL"
//         className="w-full border rounded p-2 mb-2"
//       />
//       <input
//         placeholder="Twitter URL"
//         className="w-full border rounded p-2 mb-2"
//       />
//       <input
//         placeholder="Instagram URL"
//         className="w-full border rounded p-2 mb-4"
//       />

//       <button
//         onClick={() => alert("error")}
//         className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//       >
//         Update Links
//       </button>
//     </section>
//   );
// }