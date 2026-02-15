import { useEffect, useState } from "react";
import api from "../services/api";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    api.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Upcoming Health Camps</h1>
      {events.map(event => (
        <div key={event._id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">{event.title}</h2>
          <p>{event.description}</p>
          <p className="text-sm text-gray-500">{event.location}</p>
        </div>
      ))}
    </div>
  );
}