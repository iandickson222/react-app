import React from 'react'
import AlienWebsite from '../images/AlienWebsite.png'
import AppGithub from '../images/AppGithub.png'
import CosmicSpikes from '../images/CosmicSpikes.png'


const Cards = () => {
    return (
        <div className='cards'>
            <div className="card">
                <div>
                    <h1>3D MODELS</h1>
                    <p>Check out a few of my 3D models!</p>
                    <a href="https://www.artstation.com/iandickson222"><i className="fa fa-th"></i>View My Works</a>
                </div>
                <div>
                    <img src={AlienWebsite} alt="3D Alien"/>
                </div>
            </div>

            <div className="card">
                <div>
                    <h1>GITHUB APPS</h1>
                    <p>Check out my growing collection of apps!</p>
                    <a href="https://github.com/iandickson222?tab=repositories"><i className="fa fa-th"></i>View My Works</a>
                </div>
                <div>
                    <img src={AppGithub} alt="Excel Optimizer App"/>
                </div>
            </div>
            
            <div className="card">
                <div>
                    <h1>MOBILE GAMES</h1>
                    <p>Check out my new release!</p>
                    <a href="https://play.google.com/store/apps/details?id=com.IanDickson.CosmicSpikes"><i className="fa fa-th"></i>View My Works</a>
                </div>
                <div>
                    <img src={CosmicSpikes} alt="Cosmic Spikes"/>
                </div>
            </div>
        </div>
    )
}

export default Cards