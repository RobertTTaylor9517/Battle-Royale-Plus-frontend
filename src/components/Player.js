import React from 'react'
import { connect } from 'react-redux'
import {mountAttack, updateChar} from '../actions/index'
import { heal } from '../fetch'

const Player = props => {

    const renderAttacks=()=>{
        if(props.attacking === props.index && props.turn === 'player'){
            return props.character.attacks.map(att => {
                return <button onClick={()=>startAttack(att)} type='button'>{att.name}</button>
            })
        }
    }

    const healRender=()=>{
        if(props.mntAttack && props.mntAttack.name === 'Heal'){
            return <h4 onClick={healer}>{props.character.name}{props.character.health}</h4>
        }else{
            return <h4>{props.character.name}{props.character.health}</h4>
        }
    }

    const startAttack=(attack)=>{
        props.mountAttack(attack)
    }

    const healer=()=>{
        fetch(heal, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify({
                character_id: props.character.id,
                team_id: props.team.id
            })
        })
        .then(res=>res.json())
        .then(char => {
            props.updateChar(char, props.index)
        })
    }

    return(
        <div>
            <h4>{healRender()}</h4>
            {renderAttacks()}
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    mountAttack: (attack)=>{
        dispatch(mountAttack(attack))
    },
    updateChar: (char, index)=>{
        dispatch(updateChar(char, index))
    },
})
const mapStateToProps = state =>{
    return {
        turn: state.turn,
        mntAttack: state.mntAttack,
        team: state.team
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)