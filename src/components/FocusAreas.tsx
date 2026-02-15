const focusAreas = {
  "Maternal and Child Health": [
    "Aahar Programme",
    "SNEHA Centre Programme",
    "Building Bridges Programme",
    "Healthy Cities Programme"
  ],
  "Public System Partnership": [
    "Government Health Systems",
    "Urban Health Missions"
  ],
  "Adolescent Health": [
    "Empowerment, Health and Sexuality of Adolescents"
  ],
  "Prevention of Violence": [
    "Violence against Women",
    "Child Protection"
  ],
  "Other Initiatives": [
    "Palliative Care",
    "Nurse Aide Programme",
    "COVID-19 Relief & Response"
  ]
};

export default function FocusAreas() {
  return (
    <section className="bg-[#5a96d6] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 text-sm">
        {Object.entries(focusAreas).map(([title, items]) => (
          <div key={title}>
            <h3 className="font-semibold mb-3">{title}</h3>
            <ul className="space-y-1">
              {items.map(item => (
                <li key={item} className="opacity-90 hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}