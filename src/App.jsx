import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Outlet } from 'react-router'

// export default function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

   if (!started) {
  // if (true) {    
    return (
      <div
        onClick={() => setStarted(true)}
        // style={{
        //   position: "fixed", inset: 0,
        //   display: "flex", alignItems: "center", justifyContent: "center",
        //   background: "#000", color: "#fff", cursor: "pointer",
        //   fontSize: "1.5rem",
        // }}
        className='
        fixed inset-0 justify-center items-center bg-black cursor-pointer 
        text-center

        flex flex-col gap-5'
      >
        <p className='text-yellow-400 font-press-start text-[clamp(1rem,4vw,3rem)]  blink space-x-1.5'>A ROGUE SKELETON SOUL</p>
        <p className='text-white font-press-start text-[clamp(0.5rem,2vw,1rem)]'>GLIMPSES OF MY SKILLS</p>
        {/* <p className='text-white font-press-start text-sm opacity-40 bounce'> ♥️ [ CLICK TO START ] </p> */}
        <p className="text-gray-400 font-press-start text-xs bounce">
            <span className="text-red-500 mr-2 text-base">❤</span>
            [ CLICK TO START ]
        </p>
      </div>
    );
  }

  return <div className='w-screen min-h-screen flex items-center justify-center '><Outlet /></div>;
}