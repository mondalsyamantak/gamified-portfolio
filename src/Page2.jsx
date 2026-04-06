import React from 'react'
import Noise from './components/Noise'
import SplitText from './components/SplitText'
import sans from '@/assets/sans-dancing.gif'
import Typewriter from './components/Typewriter'
import { useNavigate } from 'react-router'
function Page2() {

    const navigate = useNavigate();
    const [started, setStarted] = React.useState(false);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
        setStarted(true);
    };
  return (
    <div className='relative h-screen w-screen'>
        {/* <div style={{width: '600px', height: '400px', position: 'relative', overflow: 'hidden'}}> */}
        <div className='w-screen h-screen relative overflow-hidden p-4 py-40 bg-black 
        flex flex-col 
        justify-center items-center
        gap-5'>
        <p 
        className='text-red-700 font-8bit blink text-2xl
                absolute bottom-4 right-4
        '
        onClick={() => {navigate(-1)}}
        >
        &lt;Go Back
        </p>
        <Noise
            patternSize={250}
            patternScaleX={2}
            patternScaleY={2}
            patternRefreshInterval={2}
            patternAlpha={25}
        />

        {/* <p className='text-white text-center font-press-start text-2xl'>HI! IM SYAMANTAK MONDAL</p> */}
        <SplitText
            text="HELLO THERE! "
            className="text-[clamp(1rem,4vw,3.5rem)] font-press-start text-red-500"
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
        <p className='text-white text-center font-press-start text-[clamp(0.8rem,2vw,1rem)]'>MY NAME IS SYAMANTAK</p>
        <p className='text-gray-400 text-center font-press-start text-[clamp(0.8rem,2vw,1rem)] blink'>[ OR JUST CALL ME SAM ]</p>
        <div className='flex-1 flex justify-center mb-10 border-0 w-[clamp(9rem,10vw,12.5rem)] max-h-[clamp(9rem,10vw,12.5rem)]'>
            <img src={sans} className="w-[clamp(9rem,10vw,12.5rem)] h-[clamp(9rem,10vw,12.5rem)]" />
        </div>
        
        {started && (
        <Typewriter speed={40} className="text-yellow-400 text-center text-[clamp(0.8rem,2vw,1rem)] ">
            IM AN ASPIRING FRONTEND DEVELOPER
            CURRENTLY LEARNING REACTJS AND TAILWINDCSS
        </Typewriter>
        )}

        {started && (
        <p 
        onClick={()=> navigate('/page3')}
        className="text-gray-400 font-press-start text-xs text-center bounce
        flex
        justify-center items-center
        
        cursor-pointer"
        >
            <span className="text-red-500 mr-2 text-base">❤</span>
            <p className='flex'>[ CONTINUE TO&nbsp;<p className='text-red-400'>CONSOLE</p>&nbsp;]</p>
        </p>
        )}
        

        
        
        </div>
    </div>
  )
}

export default Page2