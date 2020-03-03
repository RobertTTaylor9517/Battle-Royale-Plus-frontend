import React, { Component } from 'react'
import {enemySprites} from '../sprites'

class EnemySprite extends Component{

    walkArray=[32, 64, 0, 64]
    walkGolem = [64, 128, 0, 128]

    state={
        ani: 0,
        yPos: 32,
        width: 32,
        height: 32
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
        switch(this.props.enemy){
            case 'Goblin':
                return enemySprites[0]
            case 'Goblin Knight':
                return enemySprites[1]
            case 'Goblin Mage':
                return enemySprites[2]
            case 'Merman':
                return enemySprites[3]
            case 'Dark Knight':
                return enemySprites[4]
            case 'Dark Mage':
                return enemySprites[5]
            case 'High Knight':
                return enemySprites[6]
            case 'Golem':
                return enemySprites[7]
            default:
                return enemySprites[8]
        }
    }

    renderBattleMode=()=>{
        if(this.props.startGame && this.props.startGame === true){
            if(this.props.enemy === 'Golem'){
                return(
                    <div
                style={{
                position: 'relative',
                display: 'inline-block',
                // zIndex: '-1',
                backgroundImage: `url('${this.switchSprite()}')`,
                backgroundPosition: `${this.walkGolem[this.state.ani]}px ${this.state.yPos}px`,
                width: '64px',
                height: '64px'
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
                    backgroundPosition: `${this.walkArray[this.state.ani]}px ${this.state.yPos}px`,
                    width: '32px',
                    height: '32px'
                }}
                />
                )
            }
        }
    }

    render(){
        return(
            this.renderBattleMode()
        )
    }

    
}
export default EnemySprite