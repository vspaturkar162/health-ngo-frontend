// export default function PeopleAdmin() {
//   return (
//     <section className="mb-10">
//       <h2 className="text-xl font-semibold mb-2">People & Team</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Update leadership, staff, advisors and team members.
//       </p>
//       <button className="px-4 py-2 bg-green-600 text-white rounded">
//         Add Person
//       </button>
//     </section>
//   );
// }



// import { FiUsers, FiUserPlus, FiEdit2, FiTrash2, FiMail, FiPhone } from "react-icons/fi";

export default function PeopleAdmin() {
  const teamMembers = [
    { 
      id: 1, 
      name: "Dr. Sarah Johnson", 
      role: "Executive Director", 
      department: "Leadership",
      email: "sarah@healthforall.org",
      phone: "+1 234 567 890"
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      role: "Head of Programs", 
      department: "Programs",
      email: "michael@healthforall.org",
      phone: "+1 234 567 891"
    },
    { 
      id: 3, 
      name: "Priya Patel", 
      role: "Research Lead", 
      department: "Research",
      email: "priya@healthforall.org",
      phone: "+1 234 567 892"
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          {/* <FiUsers className="opacity-80" /> */}
          Team Management
        </h2>
        <p className="text-purple-100 mt-2 text-sm">Manage leadership, staff and team members</p>
      </div>

      <div className="p-8">
        {/* Add New Button */}
        <button className="mb-6 bg-gradient-to-r from-purple-600 to-purple-700 
          text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 
          transition-all transform hover:scale-[1.02] active:scale-[0.98] 
          shadow-lg hover:shadow-xl font-medium flex items-center gap-2">
          {/* <FiUserPlus size={20} /> */}
          Add New Team Member
        </button>

        {/* Department Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["All", "Leadership", "Programs", "Research", "Operations"].map((dept) => (
            <button key={dept} 
              className="px-4 py-2 rounded-full text-sm font-medium transition-all
                bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white">
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} 
              className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all 
                border border-gray-100 hover:border-purple-200 group">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-purple-600">{member.role}</p>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full mt-2 inline-block">
                    {member.department}
                  </span>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-white rounded-lg">
                    {/* <FiEdit2 className="text-gray-500" size={16} /> */}
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg">
                    {/* <FiTrash2 className="text-red-500" size={16} /> */}
                  </button>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  {/* <FiMail size={14} className="text-gray-400" /> */}
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <FiPhone size={14} className="text-gray-400" /> */}
                  <span>{member.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



// export default function PeopleAdmin() {
//   return (
//     <section className="mb-10 bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-semibold mb-2">People & Team</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Update leadership, staff, advisors and team members.
//       </p>

//       <button
//         onClick={() => alert("error")}
//         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//       >
//         Add Person
//       </button>
//     </section>
//   );
// }