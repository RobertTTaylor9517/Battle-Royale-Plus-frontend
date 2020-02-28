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
                return playerSprites[4]
        }
    }

    renderBattleMode=()=>{
        // console.log(this.props.attacking)
        if(this.props.startGame && this.props.startGame === true){
            if(this.props.attacking === this.props.index){
                console.log(`hit ${this.props.focus}`)
                return(
                    <div
                style={{
                    position: 'relative',
                    display: 'inline-block',
                    // zIndex: '-1',
                    backgroundImage: `url('${this.switchSprite()}')`,
                    backgroundPosition: `${this.walkArray[this.state.ani]}px ${this.state.yPos}px`,
                    width: '32px',
                    height: '32px'
                }}
                />
                )
            }else{
                return(
                    <div
                style={{
                    position: 'relative',
                    display: 'inline-block',
                    // zIndex: '-1',
                    backgroundImage: `url('${this.switchSprite()}')`,
                    backgroundPosition: `32px ${this.state.yPos}px`,
                    width: '32px',
                    height: '32px'
                }}
                />
                )
            }
            
        }else{
            return(
                <span
                style={{
                    position: 'absolute',
                    // zIndex: '-1',
                    backgroundImage: `url('${this.switchSprite()}')`,
                    backgroundPosition: `${this.walkArray[this.state.ani]}px ${this.state.yPos}px`,
                    width: '32px',
                    height: '32px'
                }}
                />
            )
        }
    }

    render(){
        return(
            this.renderBattleMode()
        )
    }

    
}
export default PlayerSprite