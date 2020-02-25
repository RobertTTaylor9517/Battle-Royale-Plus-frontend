import React from 'react'
import { connect } from 'react-redux'
import Enemy from '../components/Enemy'
import { hit } from '../fetch'
import { updateTeam } from '../actions/index'

const Enemies = (props) =>{

    const renderEnemies=()=>{
        return props.floor.enemies.map((enem,index)=>{
            let floorEnemy = props.floor.floor_enemies[index]
            return <Enemy enemy={enem} feID={floorEnemy.id} index={index}/>
        })
    }

    const initiateAttack=()=>{
        if(props.turn === 'enemy'){
            fetch(hit, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: localStorage['token']
                },
                body: JSON.stringify({
                    floor_id: props.floor.id,
                    team_id: props.team.id
                })
            })
            .then(res=>res.json())
            .then(team=> {
                props.updateTeam(team)
            })
        }
    }

    return(
        <div>
            {renderEnemies()}
            {initiateAttack()}
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    updateTeam: (team)=>{
        dispatch(updateTeam(team))
    }
    // logIn: (token, user, attacks, teams)=>{
    //     dispatch(logIn(token, user, attacks, teams))
    // }
})

const mapStateToProps = state => {
    return {
        floor: state.dungeon.floor,
        turn: state.turn,
        team: state.team
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Enemies)