import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

interface Volunteer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role?: string;
  location?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export default function VolunteersAdmin() {
  const [applications, setApplications] = useState<Volunteer[]>([]);

  useEffect(() => {
    fetch(`${API}/volunteers`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(setApplications);
  }, []);

  /* ---------- ACTIONS ---------- */

  const approve = async (id: string) => {
    await fetch(`${API}/volunteers/${id}/approve`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setApplications((apps) =>
      apps.map((a) =>
        a._id === id ? { ...a, status: "approved" } : a
      )
    );
  };

  const reject = async (id: string) => {
    await fetch(`${API}/volunteers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setApplications((apps) => apps.filter((a) => a._id !== id));
  };

  /* ---------- STATS ---------- */

  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "pending").length,
    approved: applications.filter((a) => a.status === "approved").length,
    reviewed: applications.filter((a) => a.status !== "pending").length,
  };

  /* ---------- HELPERS (UNCHANGED STYLES) ---------- */

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <h6 className="text-green-600">✓</h6>;
      case "pending":
        return <h6 className="text-yellow-600">⏳</h6>;
      case "rejected":
        return <h6 className="text-red-600">✕</h6>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          Volunteer Applications
        </h2>
        <p className="text-pink-100 mt-2 text-sm">
          Review and manage volunteer applications
        </p>
      </div>

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Applications",
              value: stats.total,
              color: "bg-pink-100 text-pink-700",
            },
            {
              label: "Pending Review",
              value: stats.pending,
              color: "bg-yellow-100 text-yellow-700",
            },
            {
              label: "Approved",
              value: stats.approved,
              color: "bg-green-100 text-green-700",
            },
            {
              label: "In Review",
              value: stats.reviewed,
              color: "bg-blue-100 text-blue-700",
            },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.color} rounded-xl p-4`}>
              <p className="text-sm opacity-80">{stat.label}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app._id}
              className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all 
              border border-gray-100 hover:border-pink-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-800">
                      {app.name}
                    </h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 ${getStatusColor(
                        app.status
                      )}`}
                    >
                      {getStatusIcon(app.status)}
                      {app.status.charAt(0).toUpperCase() +
                        app.status.slice(1)}
                    </span>
                  </div>

                  <p className="text-sm text-pink-600 mb-2">
                    {app.role || "Volunteer"}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                    <span>{app.email}</span>
                    <span>{app.phone}</span>
                    <span>{app.location || "—"}</span>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Applied: {new Date(app.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {app.status === "pending" && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => approve(app._id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg 
                      hover:bg-green-700 transition-all text-sm font-medium"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => reject(app._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg 
                      hover:bg-red-700 transition-all text-sm font-medium"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-6 w-full bg-gradient-to-r from-pink-600 to-pink-700 
          text-white px-6 py-3 rounded-xl hover:from-pink-700 hover:to-pink-800 
          transition-all transform hover:scale-[1.02] active:scale-[0.98] 
          shadow-lg hover:shadow-xl font-medium"
        >
          View All Applications
        </button>
      </div>
    </div>
  );
}