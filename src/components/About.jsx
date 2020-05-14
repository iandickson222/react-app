import React from 'react'
import Graduation from '../images/Graduation.jpg'

const About = () => {
    return (
        <div className='about'>
            <img src={Graduation} alt="Fiber Optic"/>
            <div>
                <h2>About Me</h2>
                <p> 
                    My name is Ian Dickson. 
                    I am an engineer, a developer, a graphic designer, and much more. 
                    I enjoy taking on my own personal projects when I am not helping others to complete theirs. 
                    This site is a side project of mine to help me develop my web skills.
                    Also, make sure to check out my new game Cosmic Spikes! 
                </p>
            </div>
            
        </div>
    )
}

export default About