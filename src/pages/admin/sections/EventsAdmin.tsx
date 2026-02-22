import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token");
/* ✅ Event interface matching backend */
interface EventItem {
  _id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export default function EventsAdmin() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  /* ✅ Fetch events */
  useEffect(() => {
    fetch(`${API}/events`)
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  /* ✅ Add event */
  const addEvent = async () => {
    if (!title || !description || !location || !startDate || !endDate) {
      alert("All fields are required");
      return;
    }

    const payload = {
      title,
      description,
      location,
      startDate,
      endDate,
    };

    const res = await fetch(`${API}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
       },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Failed to add event");
      return;
    }

    const newEvent: EventItem = await res.json();
    setEvents((prev) => [newEvent, ...prev]);

    setTitle("");
    setDescription("");
    setLocation("");
    setStartDate("");
    setEndDate("");
  };

  /* ✅ Delete event */
  const deleteEvent = async (id: string) => {
    const ok = window.confirm("Delete this event?");
    if (!ok) return;

    await fetch(`${API}/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
    },
    });

    setEvents((prev) => prev.filter((e) => e._id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6">
        <h2 className="text-2xl font-semibold text-white">
          Events Management
        </h2>
        <p className="text-indigo-100 mt-2 text-sm">
          Create and manage health camps & community events
        </p>
      </div>

      <div className="p-8">
        {/* Add event */}
        <div className="grid gap-4 mb-8">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event title"
            className="border rounded-xl px-4 py-3"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event description"
            className="border rounded-xl px-4 py-3"
          />

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <button
            onClick={addEvent}
            className="bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Add Event
          </button>
        </div>

        {/* Event list */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>

          <div className="space-y-3">
            {events.map((event) => (
              <div
                key={event._id}
                className="flex items-start justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div>
                  <h4 className="font-medium text-gray-800">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {event.location} •{" "}
                    {new Date(event.startDate).toLocaleDateString("en-IN")}
                  </p>
                </div>

                <button
                  onClick={() => deleteEvent(event._id)}
                  className="text-red-600 hover:underline text-sm"
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