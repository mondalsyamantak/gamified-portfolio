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
    
    
    <div className='bg-black flex flex-col w-screen h-screen items-center justify-center gap-8 p-80'>
        <div className='flex-1 flex justify-start'>
            <img src={sans} className="w-30 h-30" />
        </div>

        <div onClick={() => {
            console.log(i)
            if (i>1) return;
            setI((i + 1));
            setText(messages[(i + 1) % messages.length]);
        }
        } 
        className='cursor-pointer flex-1 flex  justify-center 
        text-center border-4 rounded-lg w-200 h-300 overflow-hidden p-20 pb-30
        relative'
        >
            <Typewriter speed={40}>{text}</Typewriter>
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
  )
}

export default Page1