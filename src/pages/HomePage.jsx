import React from 'react'
import shoya from "@/assets/sans-fight.gif"; // your character image
import Typewriter from '@/components/Typewriter';

function HomePage() {
  return (

    <>
        
        {/* TOP SECTION */}
        <div className="flex gap-6 p-6">
          
          {/* LEFT — character image + label + fight button */}
          <div className="flex flex-col items-center gap-2 min-w-40">
            <div className="border border-white p-1">
              <img src={shoya} className="w-42 h-48 object-cover" />
            </div>
            {/* <p className="bg-black border border-yellow-400 text-yellow-400 text-xs px-3 py-1 w-full text-center">
              WEB DEVELOPER
            </p> */}
            <p className="border-2 border-red-600 text-red-500 text-xs px-2 py-2 w-full hover:bg-red-900 transition-colors">
              WEB DEVELOPER
            </p>
            {/* <button className="border-2 border-red-600 text-red-500 text-sm px-6 py-2 w-full hover:bg-red-900 transition-colors">
              × FIGHT
            </button> */
            /* will add something later for 'fight' maybe*/}
          </div>

          {/* RIGHT — stats */}
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-yellow-400 text-2xl tracking-widest">Sam</p>
            <div className="flex justify-between text-2xl text-gray-400 font-8bit">
              <span>[ a.k.a. Syamantak ] &nbsp;</span>  
              <span className='mr-auto'>LV 19</span>
              <span>Location: Jadavpur, Kolkata</span>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-2xl leading-relaxed">
              <p className='flex'> <p className='blink'>⯀&nbsp;</p><Typewriter speed={40} className='font-8bit'>A multi-class Creator: Code, Art, and Music.</Typewriter></p>
              <p className='flex'> <p className='blink'>⯀&nbsp;</p><Typewriter speed={40} className='font-8bit'>Master of both Guitar strings and Keyboard keys.</Typewriter></p>
              <p className='flex'> <p className='blink'>⯀&nbsp;</p><Typewriter speed={40} className='font-8bit'>Diving into the world of web dev and backend.</Typewriter></p>
              <p className='flex'> <p className='blink'>⯀&nbsp;</p><Typewriter speed={40} className='font-8bit'>Coffee and sleepless nights are my best friends.</Typewriter></p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-dashed border-gray-600 mx-4" />

        {/* BOTTOM TEXT */}
        <div className="p-6 text-center text-3xl font-8bit text-gray-300 mb-3">
          * You encountered a wild developer!
        </div>
    </>

  )
}

export default HomePage