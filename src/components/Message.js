import React from 'react'
import { connect } from 'react-redux'

const Message = props =>  {
    const renderMessage=()=>{
        if(props.turn === 'player'){
            return(
                <h4>{props.characters[props.attacking].name} uses {props.mntAttack}</h4>
            )
        }else if(props.turn === 'enemy'){
            return <h4>{props.floor.enemies[props.attacking].name} attacks!</h4>
        }
    }

    return(
        <div>
            {renderMessage()}
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        attacking: state.attacking,
        mntAttack: state.mntAttack,
        turn: state.turn,
        floor: state.dungeon.floor,
        characters: state.team.characters

    }
}

const mapDispatchToProps = dispatch=>({

})

export default connect(mapStateToProps, mapDispatchToProps)(Message)