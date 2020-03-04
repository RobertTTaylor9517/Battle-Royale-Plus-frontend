import React from 'react'
import { connect } from 'react-redux'
import PlayerSprite from '../components/PlayerSprite'
import EnemySprite from '../components/EnemySprite'
import background from '../sprites/Dungeon_Background.jpg'
import { OnAtMostPhablet, OnAtLeastTablet } from '../Responsive'

const BattleGround = props => {

    const renderPlayers=()=>{
        if(props.team.characters){
            return props.team.characters.map((char,index)=>{
                return <PlayerSprite attacking={props.attacking} focus={char.focus} index={index} startGame={props.startGame}/>
            })
        }
    }

    const renderEnemies=()=>{
        return props.enemies.map((enemy, index)=>{
            return <EnemySprite enemy={enemy.name} index={index} startGame={props.startGame}/>
        })
    }

    return(
        <div>
            <OnAtMostPhablet>
                <div
                    style={{
                    // display: 'none',
                    backgroundImage: `url(${background})`,
                    width: '100%',
                    height: '200px',
                    backgroundSize: "100% 100%"
                }}>
                    <div style={{width: '100%', paddingTop: '25%'}} align='center'>
                        {renderPlayers()}
                    </div>
                    <div style={{width: '100%', paddingTop: '5%'}} align='center'>
                        {renderEnemies()}
                    </div>
                </div>
            </OnAtMostPhablet>
            <OnAtLeastTablet>
                <div
                    style={{
                    // display: 'none',
                    backgroundImage: `url(${background})`,
                    width: '95%',
                    height: '300px',
                    backgroundSize: "100% 100%"
                }}>
                    <div style={{width: '50%', paddingTop: '25%'}}>
                        {renderPlayers()}
                    </div>
                    <div style={{width: '50%', paddingTop: '3%'}}>
                        {renderEnemies()}
                    </div>
                </div>
            </OnAtLeastTablet>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        team: state.team,
        startGame: state.startGame,
        enemies: state.dungeon.floor.enemies,
        attacking: state.attacking
    }
}
export default connect(mapStateToProps, null)(BattleGround)