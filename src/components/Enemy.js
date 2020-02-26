import React from 'react'
import {connect} from 'react-redux'
import { attack, hit } from '../fetch'
import { updateEnemy, updateTeam } from '../actions/index'

const Enemy = props => {
    const renderTarget=()=>{
        if(props.mntAttack && props.mntAttack.name !== 'heal'){
            return(
                <h4 onClick={()=>processAttack(props.enemy, props.feID)}>{props.enemy.name}{props.enemy.health}</h4>
            )
        }else{
            return(
                <h4>{props.enemy.name}{props.enemy.health}</h4>
            )
        }
    }

    const enemyAttack=()=>{
        if(props.attacking === props.index && props.turn === 'enemy'){
            console.log(props.enemy.name)
            fetch(hit, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Accept: 'application/json',
                                Authorization: localStorage['token']
                            },
                            body: JSON.stringify({
                                enemy_id: props.enemy.id,
                                team_id: props.team.id
                            })
                        })
                        .then(res=>res.json())
                        .then(team=> {
                            props.updateTeam(team)
                        })
            props.updateTeam(props.team)
        }
    }

    const processAttack=(enemy, floor_enemy)=>{
        console.log(floor_enemy)
        fetch(attack, {
            method: 'POST',
            headers: {
                Authorization: localStorage['token'],
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                attack: props.mntAttack,
                enemy: enemy,
                floor_enemy_id: floor_enemy
            })
        })
        .then(res=>res.json())
        .then(enemy => {
            props.updateEnemy(enemy, props.index)
        })
    }

    return(
        <div>
            {renderTarget()}
            {enemyAttack()}
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    updateEnemy: (enemy, index)=>{
        dispatch(updateEnemy(enemy, index))
    },
    updateTeam: (team)=>{
        dispatch(updateTeam(team))
    }
})

const mapStateToProps=state=>{
    return {
        mntAttack: state.mntAttack,
        turn: state.turn,
        attacking: state.attacking,
        team: state.team
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Enemy)