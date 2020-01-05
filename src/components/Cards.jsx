import React from 'react'
import AlienWebsite from '../images/AlienWebsite.png'
import AppGithub from '../images/AppGithub.png'
import ComingSoon from '../images/ComingSoon.jpg'


const Cards = () => {
    return (
        <div className='cards'>
            <div className="card">
                <div>
                    <h1>3D MODELS</h1>
                    <p>Professionally done 3D models.</p>
                    <a href="https://www.artstation.com/iandickson222"><i className="fa fa-th"></i>View My Works</a>
                </div>
                <div>
                    <img src={AlienWebsite} alt="3D Alien"/>
                </div>
            </div>

            <div className="card">
                <div>
                    <h1>GITHUB APPS</h1>
                    <p>Check out my growing collection of apps.</p>
                    <a href="https://github.com/iandickson222?tab=repositories"><i className="fa fa-th"></i>View My Works</a>
                </div>
                <div>
                    <img src={AppGithub} alt="Excel Optimizer App"/>
                </div>
            </div>
            
            <div className="card" id='mobile'>
                <div>
                    <h1>MOBILE GAMES</h1>
                    <p>Soon to be released to the Play Store.</p>
                    <a href="#mobile"><i className="fa fa-th"></i>View My Works</a>
                </div>
                <div>
                    <img src={ComingSoon} alt="Coming Soon"/>
                </div>
            </div>
        </div>
    )
}

export default Cards