// export default function VolunteersAdmin() {
//   return (
//     <section className="mb-10">
//       <h2 className="text-xl font-semibold mb-2">Volunteer Applications</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Review volunteer applications and manage approvals.
//       </p>
//       <button className="px-4 py-2 bg-purple-600 text-white rounded">
//         View Applications
//       </button>
//     </section>
//   );
// }



import { FiHeart, FiCheckCircle, FiXCircle, FiClock, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function VolunteersAdmin() {
  const applications = [
    {
      id: 1,
      name: "Emily Watson",
      email: "emily.w@email.com",
      phone: "+1 234 567 893",
      location: "New York, NY",
      role: "Community Health Worker",
      appliedDate: "2024-01-20",
      status: "pending"
    },
    {
      id: 2,
      name: "David Kim",
      email: "david.k@email.com",
      phone: "+1 234 567 894",
      location: "Los Angeles, CA",
      role: "Event Coordinator",
      appliedDate: "2024-01-19",
      status: "approved"
    },
    {
      id: 3,
      name: "Lisa Fernandez",
      email: "lisa.f@email.com",
      phone: "+1 234 567 895",
      location: "Chicago, IL",
      role: "Research Assistant",
      appliedDate: "2024-01-18",
      status: "reviewed"
    },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'approved': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'reviewed': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'approved': return <FiCheckCircle className="text-green-600" size={16} />;
      case 'pending': return <FiClock className="text-yellow-600" size={16} />;
      case 'reviewed': return <FiCheckCircle className="text-blue-600" size={16} />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <FiHeart className="opacity-80" />
          Volunteer Applications
        </h2>
        <p className="text-pink-100 mt-2 text-sm">Review and manage volunteer applications</p>
      </div>

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Applications", value: "24", color: "bg-pink-100 text-pink-700" },
            { label: "Pending Review", value: "8", color: "bg-yellow-100 text-yellow-700" },
            { label: "Approved", value: "12", color: "bg-green-100 text-green-700" },
            { label: "In Review", value: "4", color: "bg-blue-100 text-blue-700" },
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
            <div key={app.id} 
              className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all 
                border border-gray-100 hover:border-pink-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-800">{app.name}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 ${getStatusColor(app.status)}`}>
                      {getStatusIcon(app.status)}
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                
                  <p className="text-sm text-pink-600 mb-2">{app.role}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FiMail size={14} className="text-gray-400" />
                      <span>{app.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone size={14} className="text-gray-400" />
                      <span>{app.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={14} className="text-gray-400" />
                      <span>{app.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">Applied: {app.appliedDate}</p>
                </div>
                
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg 
                    hover:bg-green-700 transition-all text-sm font-medium flex items-center gap-1">
                    <FiCheckCircle size={16} />
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg 
                    hover:bg-red-700 transition-all text-sm font-medium flex items-center gap-1">
                    <FiXCircle size={16} />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full bg-gradient-to-r from-pink-600 to-pink-700 
          text-white px-6 py-3 rounded-xl hover:from-pink-700 hover:to-pink-800 
          transition-all transform hover:scale-[1.02] active:scale-[0.98] 
          shadow-lg hover:shadow-xl font-medium">
          View All Applications
        </button>
      </div>
    </div>
  );
}



// export default function VolunteersAdmin() {
//   return (
//     <section className="mb-10 bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-semibold mb-2">Volunteer Applications</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Review volunteer applications and manage approvals.
//       </p>

//       <button
//         onClick={() => alert("error")}
//         className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
//       >
//         View Applications
//       </button>
//     </section>
//   );
// }