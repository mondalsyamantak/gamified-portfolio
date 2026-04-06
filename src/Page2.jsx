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
        <div className='w-screen h-screen relative overflow-hidden p-40 bg-black 
        flex flex-col gap-5'>
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
        <p className='text-white text-center font-press-start text-xl'>MY NAME IS SYAMANTAK</p>
        <p className='text-gray-400 text-center font-press-start text-xs blink'>[ OR JUST CALL ME SAM ]</p>
        <div className='flex-1 flex justify-center mt-10'>
            <img src={sans} className="w-50 h-50" />
        </div>
        
        {started && (
        <Typewriter speed={40} className="text-yellow-400 text-center">
            IM AN ASPIRING WEB DEVELOPER
            CURRENTLY LEARNING REACTJS AND TAILWINDCSS
        </Typewriter>
        )}

        {started && (
        <p 
        onClick={()=> navigate('/page3')}
        className="text-gray-400 font-press-start text-xs text-center bounce"
        >
            <span className="text-red-500 mr-2 text-base">❤</span>
            [ CLICK TO CONTINUE ]
        </p>
        )}
        

        
        
        </div>
    </div>
  )
}

export default Page2