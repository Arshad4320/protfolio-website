
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {

    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }


const handleDone = () => {
    console.log(`Done after 5 loops!`)
}

return (
    <div className='App p-24' style={{ backgroundColor:'#2c2c54'}}>
        <h1 style={{  margin: 'auto 0', fontWeight: 'normal' }}>
           
            <>
            <p className='text-center text-4xl font-bold'>
                <span className='text-white'>Hi, I'm a</span>                
                <span className='text-teal-400'> Arshad Ullah</span>
            </p>
            </>{' '}
            <span style={{ color:'#34ace0',fontSize:'35px',fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter 
                    words={[' Front-End developer .', ' React Developer .', ' Node JS developer .', ' MERN Stack developer .']}
                    loop={Infinity}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={60}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                />
            </span>
        </h1>
    </div>
)
}
export default Header;