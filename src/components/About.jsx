import React from 'react'
import Technology from '../images/Technology.jpg'

const About = () => {
    return (
        <div className='about'>
            <img src={Technology} alt="Fiber Optic"/>
            <div>
                <h2>About Me</h2>
                <p> 
                    My name is Ian Dickson.
                    I develop software, mechanical products, design games, and 3D model.
                    I program primarly in C#, Python, and PHP. I am familiar with many aspects of 
                    software and mechanical design including AI, machining, welding, wood working, and much more.
                </p>
            </div>
            
        </div>
    )
}

export default About