import React from 'react'
import Typewriter from './components/Typewriter'
import { useState } from 'react'
import sans from '@/assets/sans-fight.gif'
import { useNavigate } from 'react-router'

function Page1() {
    const navigate = useNavigate();

    const [i, setI] = useState(0);
    const messages = [
        "Hello, visitor!",
        "I see that you have stumbled upon my humble abode.",
        "Continue on this perilous journey, and you shall uncover secrets of my life.",
    ];
    const [text, setText] = useState(messages[i]);
    return (
    
    
    <div className='bg-black flex flex-col w-screen h-screen items-center justify-center  p-2'>
        <div className='flex flex-col border-0 gap-8 justify-center items-center w-full'>
            <div className='flex-1 flex justify-start'>
                <img src={sans} className="w-30 h-30" />
            </div>

            <div 
            onClick={() => {
                console.log(i)
                if (i>1) return;
                setI((i + 1));
                setText(messages[(i + 1) % messages.length]);
            }
            } 
            className='cursor-pointer flex justify-center 
            text-center border-4 rounded-lg max-w-200 w-full overflow-hidden p-15
            relative'
            >
                <Typewriter speed={40} className='text-[clamp(0.8rem,2vw,1.0rem)]'>{text}</Typewriter>
                <p className='text-red-700 font-press-start blink
                absolute bottom-4 right-4
                '>𝝯</p>
            </div>
            <div>
                <p className='text-gray-400 font-press-start text-xs bounce'
                style={{
                    visibility: (i<2)? "hidden": "visible"
                }}
                onClick={() => navigate('/page2')}
                >
                    <span className="text-red-500 mr-2 text-base cursor-pointer">❤</span>
                    [ CLICK TO CONTINUE ]
                </p>
            </div>
        </div>
    
    </div>
  )
}

export default Page1