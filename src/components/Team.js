import React from 'react'
import { connect } from 'react-redux'
import { getTeam } from '../actions/index'
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
                props.getTeam(team)
            }
        })
    }

    return(
        <div>
            <form onSubmit={createTeam}>
                <div>
                    <label> Team Name:</label>
                    <input type='text' name='team_name' placeholder='Enter Team Name...'/>
                </div>
                    <input type='submit' value='Create Team'/>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    getTeam: (team)=>{
        dispatch(getTeam(team))
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)