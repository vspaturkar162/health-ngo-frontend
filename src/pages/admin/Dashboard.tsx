import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BlogsAdmin from "./sections/BlogsAdmin";
import ResourcesAdmin from "./sections/ResourcesAdmin";
import PeopleAdmin from "./sections/PeopleAdmin";
import VolunteersAdmin from "./sections/VolunteersAdmin";
import AboutAdmin from "./sections/AboutAdmin";
import SocialLinksAdmin from "./sections/SocialLinksAdmin";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin");
    }
  }, [navigate]);

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

      <main className="flex-1 p-6 space-y-10">
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