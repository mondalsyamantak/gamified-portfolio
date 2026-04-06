const history = [
  {
    role: "WEB APP ENGINEER",
    place: "??????",
    date: "2026 APR",
    desc: "* Accepted the offer. Determination filled.",
  },
  {
    role: "STARTUP DEV INTERN",
    place: "Vancouver, CANADA",
    date: "2024 AUG",
    desc: "* Built UI with React. Mined data with Python.",
  },
  {
    role: "MECH MAJOR",
    place: "UNIVERSITY",
    date: "2021-2025",
    desc: "* Majoring in Mechanical Engineering. Researching Plasma Actuators.",
  },
];

export default function AboutMePage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <p className="font-8bit text-white text-2xl">* You opened your INVENTORY.</p>

      <div className="flex flex-col gap-6 pl-4 pb-10">
        {history.map(({ role, place, date, desc }) => (
          <div key={role} className="flex flex-col gap-1">
            <p className="font-press-start text-xs">
              <span className="text-yellow-400">{role}</span>
              <span className="text-white"> @ {place}</span>
            </p>
            <p className="font-8bit text-gray-500 text-xl">{date}</p>
            <p className="font-8bit text-white text-xl">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}