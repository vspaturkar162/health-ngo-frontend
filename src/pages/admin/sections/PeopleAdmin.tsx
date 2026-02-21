import { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_URL;

interface Person {
  _id: string;
  name: string;
  role: string;
  department: string;
  email?: string;
  phone?: string;
}
export default function PeopleAdmin() {
  const [people, setPeople] = useState<Person[]>([]);
  const [filter, setFilter] = useState("All");

  const [form, setForm] = useState({
    name: "",
    role: "",
    department: "Leadership",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetch(`${API}/people`)
      .then(res => res.json())
      .then(setPeople);
  }, []);
  const addPerson = async () => {
    if (!form.name || !form.role) {
      alert("Name and role required");
      return;
    }

    const res = await fetch(`${API}/people`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const newPerson = await res.json();
    setPeople(prev => [newPerson, ...prev]);
    setForm({
      name: "",
      role: "",
      department: "Leadership",
      email: "",
      phone: "",
    });
  };

  const deletePerson = async (id: string) => {
    const ok = window.confirm("Delete this member?");
    if (!ok) return;

    await fetch(`${API}/people/${id}`, {
      method: "DELETE",
    });
    setPeople(prev => prev.filter(p => p._id !== id));
  };

  const filtered =
    filter === "All"
      ? people
      : people.filter(p => p.department === filter);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          {/* <FiUsers className="opacity-80" /> */}
          Team Management
        </h2>
        <p className="text-purple-100 mt-2 text-sm">Manage leadership, staff and team members</p>
      </div>
      {/* FORM */}
        <div className="grid gap-4 mb-8">
          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border px-4 py-2 rounded"
          />

          <input
            placeholder="Role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="border px-4 py-2 rounded"
          />
          <select
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            className="border px-4 py-2 rounded"
          >
            <option>Leadership</option>
            <option>Programs</option>
            <option>Research</option>
            <option>Operations</option>
          </select>
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border px-4 py-2 rounded"
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border px-4 py-2 rounded"
          />
      <div className="p-8">
        {/* Add New Button */}
        <button onClick={addPerson} className="mb-6 bg-gradient-to-r from-purple-600 to-purple-700 
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
            onClick={() => setFilter(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white${filter === dept
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100"}`}>
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((member) => (
            <div key={member._id} 
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
              <button
                onClick={() => deletePerson(member._id)}
                className="text-red-600 text-sm mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}



