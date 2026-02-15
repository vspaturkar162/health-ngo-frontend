// // export default function AdminDashboard() {
// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold">Admin Panel</h1>
// //       <ul className="mt-4 space-y-2">
// //         <li>📊 Dashboard Analytics</li>
// //         <li>📝 Manage Blogs</li>
// //         <li>📅 Manage Events</li>
// //         <li>👥 Manage Volunteers</li>
// //         <li>💰 Donation Records</li>
// //       </ul>
// //     </div>
// //   );
// // }
// export default function Dashboard() {
//   return (
//     <>
//       <h1 className="text-2xl mb-6">Dashboard</h1>
//       <div className="grid md:grid-cols-4 gap-4">
//         {["Blogs", "Events", "Volunteers", "Donations"].map((item) => (
//           <div key={item} className="bg-white p-4 rounded shadow">
//             <p className="text-sm text-gray-500">{item}</p>
//             <p className="text-2xl font-semibold">24</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
import BlogsAdmin from "./sections/BlogsAdmin";
import ResourcesAdmin from "./sections/ResourcesAdmin";
import PeopleAdmin from "./sections/PeopleAdmin";
import VolunteersAdmin from "./sections/VolunteersAdmin";
import AboutAdmin from "./sections/AboutAdmin";
import SocialLinksAdmin from "./sections/SocialLinksAdmin";

const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "/admin";
}
export default function AdminDashboard() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <p>Blogs</p>
        <p>Resources</p>
        <p>People</p>
        <p>Volunteers</p>
        <p>About Pages</p>
        <p>Social Links</p>
      </aside>

      <main className="flex-1 p-6">
        <BlogsAdmin />
        <ResourcesAdmin />
        <PeopleAdmin />
        <VolunteersAdmin />
        <AboutAdmin />
        <SocialLinksAdmin />
      </main>
    </div>
  );
}