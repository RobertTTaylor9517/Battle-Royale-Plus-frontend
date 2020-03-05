import React from 'react'
import {connect} from 'react-redux'
import { attack, hit } from '../fetch'
import { updateEnemy, updateTeam } from '../actions/index'

const Enemy = props => {
    const renderTarget=()=>{
        if(props.mntAttack && props.mntAttack.name !== 'Heal' && props.mntAttack.name !== undefined){
            return(
                // <h4 onClick={()=>processAttack(props.enemy, props.feID)}>{props.enemy.name} {props.enemy.health}</h4>
                <div onClick={()=>processAttack(props.enemy, props.feID)} style={{border: 'dashed', backgroundColor: 'red'}} align='center'>
                    <div><h4>{props.enemy.name}</h4></div>
                    <div>Health: {props.enemy.health}</div>
                </div>
            )
        }else{
            return(
                // <h4>{props.enemy.name} {props.enemy.health}</h4>
                <div style={{border: 'dashed', backgroundColor: 'black'}} align='center'>
                    <div><h4>{props.enemy.name}</h4></div>
                    <div>Health: {props.enemy.health}</div>
                </div>
            )
        }
    }

    const enemyAttack=()=>{
        if(props.attacking === props.index && props.turn === 'enemy' && props.team.characters.length > 0){
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
                        .then(result=> {
                            if(result.team === undefined){
                                console.log('try again')
                            }else{
                                setTimeout(function(){
                                    let upTeam = JSON.parse(result.team)
                                    props.updateTeam(upTeam, result.message)
                                }, 1000)
                            }
                            
                        })
                        .catch(err=>{
                            console.log(err)
                        })
            // props.updateTeam(props.team)
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
                floor_enemy_id: floor_enemy,
                character: props.team.characters[props.attacking].name
            })
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result)
            if(enemy.name === undefined && enemy.death === undefined){
                console.log('try again')
            }else{
                props.updateEnemy(result.enemy, props.index, result.message)
            }
        })
        .catch(err => {
            console.log(err)
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
    updateEnemy: (enemy, index, message)=>{
        dispatch(updateEnemy(enemy, index, message))
    },
    updateTeam: (team, message)=>{
        dispatch(updateTeam(team, message))
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