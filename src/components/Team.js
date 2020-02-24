import React from 'react'
import { connect } from 'react-redux'
import { getTeam, addToTeams } from '../actions/index'
import { newTeam } from '../fetch'

const Team = props =>{

    const createTeam =(e)=>{
        e.preventDefault()

        fetch(newTeam, {
            method: 'POST',
            headers: {
                Authorization: localStorage['token'],
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                team_name: e.target['team_name'].value
            })
        })
        .then(res=>res.json())
        .then(team => {
            if(team.error){
                console.log(team.error)
            }else{
                props.addToTeams(team)
            }
        })
    }

    const newTeamForm =()=>{
        return (
            <form onSubmit={createTeam}>
                <div>
                    <label> Team Name:</label>
                    <input type='text' name='team_name' placeholder='Enter Team Name...'/>
                </div>
                    <input type='submit' value='Create Team'/>
            </form>
        )
    }

    const renderTeams=()=>{
        if(props.user.teams){
            return props.user.teams.map(team => {
                return <h1 onClick={()=>props.getTeam(team)}>{team.team_name}</h1>
            })
        }
    }

    return(
        <div>
            {newTeamForm()}
            {renderTeams()}
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    getTeam: (team)=>{
        dispatch(getTeam(team))
    },
    addToTeams: (team)=>{
        dispatch(addToTeams(team))
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
        team: state.team
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)