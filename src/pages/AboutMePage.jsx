import Typewriter from "@/components/Typewriter";

const history = [
  {
    heading1: "NAME",
    val: "SYAMANTAK MONDAL",
    desc: "^ nice to meet you!",
  },
  {
    heading1: "AGE",
    val: "19",
    desc: "^ as of 2026",
  },
  {
    heading1: "EDUCATION",
    val: "B.E. INSTRUMENTATION N' ELECTRONICS ENGG, JADAVPUR UNIVERSITY",
    desc: "^ #cazzz",
  },
  {
    heading1: "YEAR OF GRADUATION",
    val: "2029",
    desc: "^ only if all goes well",
  }
];

export default function AboutMePage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Typewriter className="font-8bit text-white text-2xl">* About Me.</Typewriter>

      <div className="flex flex-col gap-5 pl-4 pb-10">
        {history.map(({ heading1, val, date, desc }) => (
          <div key={heading1} className="flex flex-col gap-0">
            <p className="font-press-start text-sm flex">
              <p className="text-yellow-400">{heading1}</p>
              <Typewriter className="text-white">:&nbsp;{val}</Typewriter>
            </p>
            <Typewriter className="font-8bit text-gray-500 text-xl">{date}</Typewriter>
            <Typewriter className="font-8bit text-xl text-gray-300">{desc}</Typewriter>
          </div>
        ))}
      </div>
    </div>
  );
}