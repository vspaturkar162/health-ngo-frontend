

// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// import BlogsAdmin from "./sections/BlogsAdmin";
// import ResourcesAdmin from "./sections/ResourcesAdmin";
// import PeopleAdmin from "./sections/PeopleAdmin";
// import VolunteersAdmin from "./sections/VolunteersAdmin";
// import AboutAdmin from "./sections/AboutAdmin";
// import SocialLinksAdmin from "./sections/SocialLinksAdmin";


// export default function AdminDashboard() {
//   const navigate = useNavigate();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   const blogsRef = useRef<HTMLElement | null>(null);
//   const resourcesRef = useRef<HTMLElement | null>(null);
//   const peopleRef = useRef<HTMLElement | null>(null);
//   const volunteersRef = useRef<HTMLElement | null>(null);
//   const aboutRef = useRef<HTMLElement | null>(null);
//   const socialRef = useRef<HTMLElement | null>(null);
//   const [donations, setDonations] = useState<any[]>([]);
//     useEffect(() => {
//     // auth already handled by ProtectedRoute
//   }, [navigate]);
//   useEffect(() => {
//     fetch("http://localhost:5000/api/admin/donations")
//       .then(res => res.json())
//       .then(data => setDonations(data));
//   }, []);

//   const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
//     setMobileMenuOpen(false);
//     ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/admin");
//   };

//   const navItems = [
//     { name: "Blogs", ref: blogsRef, color: "from-blue-500 to-blue-600" },
//     { name: "Resources", ref: resourcesRef, color: "from-emerald-500 to-emerald-600" },
//     { name: "People", ref: peopleRef, color: "from-purple-500 to-purple-600" },
//     { name: "Volunteers", ref: volunteersRef, color: "from-pink-500 to-pink-600" },
//     { name: "About Pages", ref: aboutRef, color: "from-amber-500 to-amber-600" },
//     { name: "Social Links", ref: socialRef, color: "from-indigo-500 to-indigo-600" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gray-900 text-white rounded-lg shadow-lg"
//       >
//         {mobileMenuOpen ? (
//           <span className="text-2xl font-bold">✕</span>   
//         ) : (
//           <span className="text-2xl font-bold">☰</span>   
//         )}
//       </button>



//       {/* Sidebar */}
//       <aside className={`
//         fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white 
//         transform transition-transform duration-300 ease-in-out z-40 shadow-2xl
//         ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
//         lg:translate-x-0
//       `}>
//         <div className="p-8">
//           {/* Logo Area */}
//           <div className="mb-10">
//             <h1 className="text-2xl font-light tracking-wider mb-1">HealthForAll</h1>
//             <div className="h-0.5 w-12 bg-pink-500"></div>
//             <p className="text-xs text-gray-400 mt-3 uppercase tracking-wider">Admin Portal</p>
//           </div>

//           {/* Navigation */}
//           {/* <nav className="space-y-2">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.ref)}
//                 className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg
//                   hover:bg-white/10 transition-all duration-200 group"
//               >
//                 <item.icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
//                 <span className="text-sm font-medium text-gray-300 group-hover:text-white">
//                   {item.name}
//                 </span>
//               </button>
//             ))}
//           </nav> */}
//           <nav className="space-y-2">
//             {navItems.map((item) => {
//               // const Icon = item.icon; // ✅ Important fix
//               return (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.ref)}
//                   className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg
//                   hover:bg-white/10 transition-all duration-200 group"
//                 >
//                   {/* <Icon
//                     className="text-gray-400 group-hover:text-white transition-colors"
//                     size={20}
//                   /> */}
//                   <span className="text-sm font-medium text-gray-300 group-hover:text-white">
//                     {item.name}
//                   </span>
//                 </button>
//               );
//             })}
//           </nav>
//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="absolute bottom-8 left-8 right-8 flex items-center space-x-3 px-4 py-3 
//               bg-red-600/20 hover:bg-red-600/30 rounded-lg transition-all duration-200 group"
//           >
//             {/* <FiLogOut className="text-red-400 group-hover:text-red-300" size={20} /> */}
//             <span className="text-sm font-medium text-red-400 group-hover:text-red-300">
//               🔙 Logout
//             </span>
//           </button>
//         </div>
//       </aside>

//       {/* Main content */}
//       <main className="lg:ml-72 p-6 lg:p-10">
//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-3xl font-light text-gray-800 mb-2">Dashboard Overview</h1>
//           <p className="text-gray-500">Manage your content and monitor site activities</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           {navItems.map((item) => (
//             <button
//               key={item.name}
//               onClick={() => scrollToSection(item.ref)}
//               className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 
//                 transform hover:-translate-y-1 overflow-hidden group"
//             >
//               <div className={`bg-gradient-to-r ${item.color} p-4`}>
//                 {/* <item.icon className="text-white opacity-80 group-hover:opacity-100 transition-opacity" size={24} /> */}
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
//                 <p className="text-sm text-gray-500">Click to manage {item.name.toLowerCase()}</p>
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* Sections */}
//         <div className="space-y-8">
//           <section ref={blogsRef} id="blogs" className="scroll-mt-6">
//             <BlogsAdmin />
//           </section>
          
//           <section ref={resourcesRef} id="resources" className="scroll-mt-6">
//             <ResourcesAdmin />
//           </section>
          
//           <section ref={peopleRef} id="people" className="scroll-mt-6">
//             <PeopleAdmin />
//           </section>
          
//           <section ref={volunteersRef} id="volunteers" className="scroll-mt-6">
//             <VolunteersAdmin />
//           </section>
          
//           <section ref={aboutRef} id="about" className="scroll-mt-6">
//             <AboutAdmin />
//           </section>
          
//           <section ref={socialRef} id="social" className="scroll-mt-6">
//             <SocialLinksAdmin />
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import BlogsAdmin from "./sections/BlogsAdmin";
import ResourcesAdmin from "./sections/ResourcesAdmin";
import PeopleAdmin from "./sections/PeopleAdmin";
import VolunteersAdmin from "./sections/VolunteersAdmin";
import AboutAdmin from "./sections/AboutAdmin";
import SocialLinksAdmin from "./sections/SocialLinksAdmin";
import EventsAdmin from "./sections/EventsAdmin";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const blogsRef = useRef<HTMLElement | null>(null);
  const resourcesRef = useRef<HTMLElement | null>(null);
  const peopleRef = useRef<HTMLElement | null>(null);
  const volunteersRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const socialRef = useRef<HTMLElement | null>(null);
  const donationsRef = useRef<HTMLElement | null>(null);

  const [donations, setDonations] = useState<any[]>([]);
  const [crisisRequests, setCrisisRequests] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/donations`)
      .then(res => res.json())
      .then(data => setDonations(data))
      .catch(err => console.error("Donation fetch error:", err));
  }, []);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/crisis`)
      .then(res => res.json())
      .then(data => setCrisisRequests(data));
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const navItems = [
    { name: "Blogs", ref: blogsRef, color: "from-blue-500 to-blue-600" },
    { name: "Resources", ref: resourcesRef, color: "from-emerald-500 to-emerald-600" },
    { name: "People", ref: peopleRef, color: "from-purple-500 to-purple-600" },
    { name: "Volunteers", ref: volunteersRef, color: "from-pink-500 to-pink-600" },
    { name: "About Pages", ref: aboutRef, color: "from-amber-500 to-amber-600" },
    { name: "Social Links", ref: socialRef, color: "from-indigo-500 to-indigo-600" },
    { name: "Donations", ref: donationsRef, color: "from-rose-500 to-rose-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gray-900 text-white rounded-lg shadow-lg"
      >
        {mobileMenuOpen ? <span className="text-2xl font-bold">✕</span> : <span className="text-2xl font-bold">☰</span>}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white 
        transform transition-transform duration-300 ease-in-out z-40 shadow-2xl
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0
      `}>
        <div className="p-8">
          <div className="mb-10">
            <h1 className="text-2xl font-light tracking-wider mb-1">HealthForAll</h1>
            <div className="h-0.5 w-12 bg-pink-500"></div>
            <p className="text-xs text-gray-400 mt-3 uppercase tracking-wider">Admin Portal</p>
          </div>

          <nav className="space-y-2">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                  {item.name}
                </span>
              </button>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="absolute bottom-8 left-8 right-8 px-4 py-3 bg-red-600/20 hover:bg-red-600/30 rounded-lg transition-all duration-200"
          >
            <span className="text-sm font-medium text-red-400">🔙 Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-72 p-6 lg:p-10">
        <div className="mb-10">
          <h1 className="text-3xl font-light text-gray-800 mb-2">Dashboard Overview</h1>
          <p className="text-gray-500">Manage your content and monitor site activities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${item.color} p-4`} />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500">Click to manage {item.name.toLowerCase()}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="space-y-8">
          <section ref={blogsRef}><BlogsAdmin /></section>
          <section ref={resourcesRef}><ResourcesAdmin /></section>
          <section ref={peopleRef}><PeopleAdmin /></section>
          <section ref={volunteersRef}><VolunteersAdmin /></section>
          <section ref={aboutRef}><AboutAdmin /></section>
          <section ref={socialRef}><SocialLinksAdmin /></section>
          <section className="space-y-8">
            <EventsAdmin />   {/* ✅ ADD THIS */}
          </section>
          {/* DONATIONS SECTION */}
          <section ref={donationsRef} className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Donations</h2>

            {donations.length === 0 ? (
              <p className="text-gray-500 text-sm">No donations yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Donor</th>
                      <th className="text-left py-2">Amount</th>
                      <th className="text-left py-2">Transaction ID</th>
                      <th className="text-left py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map(d => (
                      <tr key={d._id} className="border-b">
                        <td className="py-2">{d.donorName}</td>
                        <td className="py-2">₹{d.amount}</td>
                        <td className="py-2">{d.transactionId}</td>
                        <td className="py-2">
                          {new Date(d.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
          {/* // Crisis Requests Section (similar structure to Donations) */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Crisis Requests</h2>

            {crisisRequests.map((r) => (
              <div key={r._id} className="border-b py-3">
                <p><strong>Name:</strong> {r.name}</p>
                <p><strong>Phone:</strong> {r.phone}</p>
                <p><strong>Message:</strong> {r.message}</p>
                <p className="text-sm text-gray-500">
                  {new Date(r.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}