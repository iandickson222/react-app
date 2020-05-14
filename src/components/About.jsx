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
                    I developed this site as a way to display my web development skills. 
                    Also, make sure to check out my new game Cosmic Spikes! 
                </p>
            </div>
            
        </div>
    )
}

export default About