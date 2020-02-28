import React from 'react'
import { connect } from 'react-redux'
import PlayerSprite from '../components/PlayerSprite'
import EnemySprite from '../components/EnemySprite'
import background from '../sprites/Dungeon_Background.jpg'

const BattleGround = props => {

    const renderPlayers=()=>{
        if(props.team.characters){
            return props.team.characters.map((char,index)=>{
                return <PlayerSprite focus={char.focus} index={index} startGame={props.startGame}/>
            })
        }
    }

    const renderEnemies=()=>{
        return props.enemies.map((enemy, index)=>{
            return <EnemySprite enemy={enemy.name} index={index} startGame={props.startGame}/>
        })
    }

    return(
        <div
        style={{
            // display: 'none',
            backgroundImage: `url(${background})`,
            width: '500px',
            height: '300px',
            backgroundSize: "100% 100%"
        }}>
            <div style={{width: '50%', paddingTop: '25%'}}>
                {renderPlayers()}
            </div>
            <div style={{width: '50%', paddingTop: '10%'}}>
                {renderEnemies()}
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        team: state.team,
        startGame: state.startGame,
        enemies: state.dungeon.floor.enemies
    }
}
export default connect(mapStateToProps, null)(BattleGround)