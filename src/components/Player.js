import React from 'react'
import { connect } from 'react-redux'
import {mountAttack} from '../actions/index'

const Player = props => {

    const renderAttacks=()=>{
        if(props.attacking === props.index && props.turn === 'player'){
            return props.character.attacks.map(att => {
                return <button onClick={()=>startAttack(att)} type='button'>{att.name}</button>
            })
        }
    }

    const startAttack=(attack)=>{
        props.mountAttack(attack)
    }

    return(
        <div>
            <h4>{props.character.name}{props.character.health}</h4>
            {renderAttacks()}
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    mountAttack: (attack)=>{
        dispatch(mountAttack(attack))
    }
})
export default connect(null, mapDispatchToProps)(Player)