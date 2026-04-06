import { useEffect, useState } from "react";
import { Progress } from "./components/ui/progress";

export default function Page4() {
  const [val, setVal] = useState(0);
  const [letsGo, setLetsGo] = useState(false);

  useEffect(() => {
      const timer = setInterval(() => {
        setVal(v => v + 17);
      }, 720);
        return () => clearInterval(timer);
    }, []);

  // if (val < 100) {
  if (false) {
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

  return <div className="bg-black h-screen border-2 border-red-700 w-screen
  p-50
  flex items-center justify-center">
    {/* <p className="font-press-start text-white"></p> */}
    {letsGo && (
        <div className="border w-full h-full flex flex-col items-center justify-center">
        
        </div>
     )
    }
    <div className="border w-full h-full flex flex-col items-center justify-center">
        {/* <div className="border  h-full w-full flex items-center justify-center">

        </div> */}
    </div>
    
    </div>;
}