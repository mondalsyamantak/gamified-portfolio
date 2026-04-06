import { useEffect, useState } from "react";
import shoya from "@/assets/sans-dancing.gif"; // your character image
import { Progress } from "./components/ui/progress";
import Typewriter from "./components/Typewriter";
import AnimatedContent from "./components/AnimatedContent";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";

export default function Page4Sample() {
  const [hp, setHp] = useState(0);
  const maxHp = 101;
  const [blinker, setBlinker] = useState(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setHp(v => {
  //       if (v >= maxHp) { clearInterval(timer); return v; }
  //       return v + 1;
  //     });
  //   }, 30);
  //   return () => clearInterval(timer);
  // }, []);
  const [val, setVal] = useState(0);

  const [activePage, setActivePage] = useState("HOME");

  // useEffect(() => {
  //     const timer = setInterval(() => {
  //       setVal(v => v + 17);
  //     }, 720);

  //     const timer2 = setInterval(() => {
  //       setHp(v => {
  //         if (v >= maxHp) { clearInterval(timer2); return v; }
  //         return v + 1;
  //       });
  //     }, 30);


  //       return () => {
  //         clearInterval(timer);
  //         clearInterval(timer2);
  //       };
  //     }, []);

    useEffect(() => {
      const timer = setInterval(() => {
        setVal(v => {
          const next = v + 27;
          if (next >= 100) {
            clearInterval(timer);
            // start HP timer only after loading finishes
            const timer2 = setInterval(() => {
              setHp(v => {
                if (v >= maxHp) { setBlinker(true); clearInterval(timer2); return v; }
                return v + 1;
              });
            }, 30);
          }
          return next;
        });
      }, 520);

      return () => clearInterval(timer);
    }, []);

  // if (val < 100) {
  if (val<=100) {
    return (
      <div
        // onClick={() => setStarted(true)}
        className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white cursor-pointer 
        gap-6
        text-2xl"
      >
        <p className="font-press-start">LOADING INTERFACE</p>
        <Progress value={val} className={"max-w-120 bg-gray-600 text-white"}/>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen w-screen font-press-start text-white flex flex-col items-center justify-center  gap-6 p-10">
      
      {/* TOP BAR */}
            <AnimatedContent
        distance={150}
        direction="vertical"
        duration={1.3}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={1}
        className="flex w-full max-w-4xl justify-between items-center"
      >
        <p className="text-white text-sm tracking-widest">SAM &nbsp; LV 19</p>
        <div className="flex items-center gap-4 text-sm">
          <span>HP</span>
          <div className="bg-yellow-400 px-4 py-1 text-black font-bold text-sm min-w-32 text-center">
            {hp} / {maxHp}
          </div>
        </div>
      </AnimatedContent>
      {/* <div className="flex w-full max-w-4xl justify-between items-center">
        <p className="text-white text-sm tracking-widest">SAM &nbsp; LV 19</p>
        <div className="flex items-center gap-4 text-sm">
          <span>HP</span>
          <div className="bg-yellow-400 px-4 py-1 text-black font-bold text-sm min-w-32 text-center">
            {hp} / {maxHp}
          </div>
        </div>
      </div> */}

      {/* CENTER BOX */}
      <div className="border border-white w-full max-w-4xl flex flex-col z-10 bg-black">
        <CenterContent activePage={activePage} />
      </div>
      {/* BOTTOM BUTTONS */}
      {/* <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
        {["PROJECTS", "SKILLS", "HISTORY", "CONTACT"].map(label => (
          <button
            key={label}
            className="border-2 border-yellow-400 text-yellow-400 py-3 text-sm tracking-widest hover:bg-yellow-400 hover:text-black transition-colors"
          >
            {label}
          </button>
        ))}
      </div> */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse
        duration={1.3}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={1.3}
        className="grid grid-cols-4 gap-4 w-full max-w-4xl"
      >
          {["PROFILE", "SKILLS", "ABOUT ME", "CONTACT"].map(label => (
            <button
              key={label}
              className="border-2 border-yellow-400 text-yellow-400 py-3 text-sm tracking-widest hover:bg-yellow-400 hover:text-black transition-colors"
              onClick={() => {
                setActivePage(label)
                console.log("Clicked", label);
                console.log("Active page:", activePage);
              }}
            >
              {label}
            </button>
          ))}
      </AnimatedContent>

      {<p className="bounce blink font-8bit text-xl text-gray-700">Click on any of the buttons to continue!</p>}

    </div>
  );
}

function CenterContent({ activePage }) {
  switch (activePage) {
    case "SKILLS": return <SkillsPage />;
    case "PROFILE": return <HomePage/>;
    case "ABOUT ME": return <AboutMePage />;
    case "CONTACT": return <ContactPage />;
    default: return <HomePage />; // your current character card
  }
}
