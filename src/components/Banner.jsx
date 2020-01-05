import React from 'react'
import CodingBanner from '../images/CodingBanner.png'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={CodingBanner} alt="Banner"/>
            <div>
                <h1>Stay up-to-date</h1>
                <a href="#mc_embed_signup">Subscribe</a>
            </div>
            
        </div>     
    )
    
}

export default Banner