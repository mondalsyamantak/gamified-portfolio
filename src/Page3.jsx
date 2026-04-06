import React from 'react'
import Noise from './components/Noise'
import SplitText from './components/SplitText'
import sans from '@/assets/Sans_battle_glowing_eye.gif'
import Typewriter from './components/Typewriter'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Page2() {
    const [started, setStarted] = React.useState(false);
    const navigate = useNavigate();

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
        setStarted(true);
    };

    const [i, setI] = useState(0);
        const messages = [
            "I started learning web developement when I was in senior high school (class 12)",
            "Today I have enough skills to be able to create and replicate full stack web applications",
            "Visitor, continue on this path to view my arsenal, if you dare!"
        ];
        const [text, setText] = useState(messages[i]);

  return (
    <div>
        {/* <div style={{width: '600px', height: '400px', position: 'relative', overflow: 'hidden'}}> */}
        <div className='w-screen h-screen relative overflow-hidden p-30 bg-black 
        justify-center items-center
        flex flex-col gap-5'>
        <Noise
            patternSize={250}
            patternScaleX={2}
            patternScaleY={2}
            patternRefreshInterval={2}
            patternAlpha={15}
        />

        {/* <p className='text-white text-center font-press-start text-2xl'>HI! IM SYAMANTAK MONDAL</p> */}
        <SplitText
            text="MY QUALIFICATIONS: "
            className="text-5xl font-press-start text-red-500"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
        />
        <p className='text-gray-400 text-center font-press-start text-xs blink'>[ DOES ANYONE EVEN READ THEM THESE DAYS? ]</p>
        <div className='grid grid-cols-[200px_minmax(900px,1fr)_100px] justify-center items-center mt-10 gap-4 border-0 mx-70'>
            <img src={sans} className="w-30 h-40 mr-20 border-0" />
            <div className='flex flex-col justify-left max-w-full h-max border-0 rounded-2xl'>
                {started && (
                <Typewriter speed={40} className="text-yellow-400 ">
                    NAME: SYAMANTAK MONDAL
                </Typewriter>
                )}
                {started && (
                <Typewriter speed={40} className="text-yellow-400 ">
                    AGE: 19
                </Typewriter>
                )}
                {started && (
                <Typewriter speed={40} className="text-yellow-400 ">
                    EDUCATION: B.E INSTRUMENTATION AND ELECTRONICS ENGG, JADAVPUR UNIVERSITY
                </Typewriter>
                )}
                {started && (
                <Typewriter speed={40} className="text-yellow-400 ">
                    YEAR OF GRADUATION: 2029
                </Typewriter>
                )}
                {started && (
                <Typewriter speed={40} className="text-red-400 ">
                    TEAM NAME FOR SNAP SYNTAX: DEZIGNRS
                </Typewriter>
                )}
            </div>
        </div>

        {/* <div className='w-screen h-max flex'>
            <div onClick={() => {
                console.log(i)
                if (i>1) return;
                setI((i + 1));
                setText(messages[(i + 1) % messages.length]);
            }
            } 
            className='cursor-pointer flex-1 flex
            text-center border-4 rounded-lg w-200 h-300 overflow p-20 pb-30
            my-10 mx-40
            relative'
            >
                <Typewriter speed={40}>{text}</Typewriter>
                <p className='text-red-700 font-press-start blink
                absolute bottom-4 right-4
                '>𝝯</p>
            </div>
        </div> */}
        <div onClick={() => {
            console.log(i)
            if (i>1) return;
            setI((i + 1));
            setText(messages[(i + 1) % messages.length]);
        }
        } 
        className='cursor-pointer flex
        justify-center items-center
        text-center border-4 rounded-lg w-300 min-h-50 p-10 pb-20
        my-10 mx-80
        relative'
        >
            <Typewriter speed={40}>{text}</Typewriter>
            <p className='text-red-700 font-press-start blink
            absolute bottom-4 right-4
            '>𝝯</p>
        </div>

        {started && (
        <p className="text-gray-400 font-press-start text-xs text-center items-center justify-center flex bounce"
        onClick={() => navigate('/page4')}
        >
            <span className="text-red-500 mr-2 text-base flex text-center">❤</span>
            [ GO TO&nbsp;<p className='text-red-400'>CONSOLE</p>&nbsp;]
        </p>
        )}
        

        
        
        </div>
    </div>
  )
}

export default Page2