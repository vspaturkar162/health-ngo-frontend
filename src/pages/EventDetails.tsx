import { Helmet } from 'react-helmet-async';

export default function EventDetails() {
  const event = {
    name: "Free Health Camp - City X",
    startDate: "2026-05-10T09:00",
    endDate: "2026-05-10T16:00",
    location: "Community Hall, City X",
    description: "Free checkups and awareness session"
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": event.name,
            "startDate": event.startDate,
            "endDate": event.endDate,
            "location": {
              "@type": "Place",
              "name": "Community Hall",
              "address": event.location
            },
            "description": event.description
          })}
        </script>
      </Helmet>

      <h1>{event.name}</h1>
      <p>{event.description}</p>
    </>
  );
}