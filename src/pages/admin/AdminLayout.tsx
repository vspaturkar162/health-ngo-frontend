import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-lg mb-6">Admin Panel</h2>
        <nav className="space-y-3 text-sm">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/blogs">Blogs</Link>
          <Link to="/admin/events">Events</Link>
          <Link to="/admin/volunteers">Volunteers</Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
}