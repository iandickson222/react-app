import React, {Component} from 'react'
import Towel from '../images/Towel.png'
import Donut from '../images/Donut.png'
import CraterLakeGame from '../images/CraterLakeGame.png'
import City from '../images/City.png'

class Renders extends Component{

    state = {
        count: 0,
        currentImage: City,
        images: [
            City,
            CraterLakeGame,
            Donut,
            Towel
        ]
    }

    handleClick = (e) => {
        var count = this.state.count;
        if(e.target.id === 'right'){
            count++;
        }
        else{
            count--;
        }

        if(count > 3){
            count = 0;
        }
        else if(count < 0){
            count = 3;
        }

        this.setState({
            ...this.state,
            count: count,
            currentImage: this.state.images[count]
        })
    }

    render(){
        return (
            <div className='renders'>
                <h2>3D Renders</h2>
                <div className="image-swipe"> 
                    <img src={this.state.currentImage} alt="Crater Lake Render"/>
                    <div onClick={this.handleClick} id='left' className='fa fa-arrow-left arrow left'></div>
                    <div onClick={this.handleClick} id='right' className='fa fa-arrow-right arrow right'></div>
                </div>
                
                
            </div>      
        )
    }   
}

export default Renders