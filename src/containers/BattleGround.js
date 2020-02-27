import React from 'react'
import { connect } from 'react-redux'
import PlayerSprite from '../components/PlayerSprite'
import background from '../sprites/Dungeon_Background.jpg'

const BattleGround = props => {

    const renderPlayers=()=>{
        return props.team.characters.map(char=>{
            return <PlayerSprite focus={char.focus} startGame={props.startGame}/>
        })
    }

    return(
        <div align='center'
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
        </div>
    )

}

const mapStateToProps = state => {
    return {
        team: state.team,
        startGame: state.startGame
    }
}
export default connect(mapStateToProps, null)(BattleGround)