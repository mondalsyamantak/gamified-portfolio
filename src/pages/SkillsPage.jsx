const skills = [
  
  { name: "REACTJS", lv: 74, xp: 74, desc: "* Adept at constructing dynamic user interfaces" },
  { name: "NEXT.JS", lv: 88, xp: 88, desc: "* Server-side rendering with Determination." },
  { name: "TAILWINDCSS", lv: 76, xp: 76, desc: "* Trained at building visually appealing interfaces" },
  { name: "JAVASCRIPT", lv: 88, xp: 88, desc: "* Prefers simplicity over type safety (MAJOR FLAW ALERT!)" },
  { name: "GIT", lv: 62, xp: 62, desc: "* Time travel capability (Save/Load)." },
  { name: "COFFEE", lv: 99, xp: 99, desc: "* Restores HP. Essential for survival." },
];

import Typewriter from "@/components/Typewriter";
function SkillBar({ name, lv, xp, desc }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-yellow-400 text-xs">
        <span>{name}</span>
        <span className="text-white">LV {lv}</span>
      </div>
      <div className="w-full h-3 bg-red-800">
        <div className="h-full bg-yellow-400" style={{ width: `${xp}%` }} />
      </div>
      <p className="text-xl font-8bit text-white">{desc}</p>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-1 p-6 pb-20">
      <Typewriter className="text-white text-2xl font-8bit mb-4" speed={40}>* My STATS.</Typewriter>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
        {skills.map(s => <SkillBar key={s.name} {...s} />)}
      </div>
    </div>
  );
}