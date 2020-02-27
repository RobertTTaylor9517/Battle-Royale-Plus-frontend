import React, { Component } from 'react'
import {playerSprites} from '../sprites'

class PlayerSprite extends Component{

    walkArray=[32, 64, 0, 64]

    state={
        ani: 0,
        yPos: 0
    }

    componentDidMount(){
        this.animation = setInterval(
            ()=>this.animate(),
            250
        );
    }

    componentWillUnmount(){
        clearInterval(this.animation)
    }

    animate=()=>{
        if(this.state.ani === 3){
            this.setState({
                ani: 0
            })
        }else{
            this.setState({
                ani: this.state.ani + 1
            })
        }
    }

    switchSprite=()=>{
        switch(this.props.focus){
            case 'fire':
                return playerSprites[0]
            case 'ice':
                return playerSprites[1]
            case 'earth':
                return playerSprites[2]
            case 'water':
                return playerSprites[3]
            default:
                return playerSprites[0]
        }
    }

    render(){
        return(
            <span
            style={{
                position: 'absolute',
                backgroundImage: `url('${this.switchSprite()}')`,
                backgroundPosition: `${this.walkArray[this.state.ani]}px ${this.state.yPos}px`,
                width: '32px',
                height: '32px'
            }}
            />
            // <img alt='player' src={sprite}/>
        )
    }

    
}
export default PlayerSprite