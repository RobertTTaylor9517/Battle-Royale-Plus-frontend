import React from 'react'
import { connect } from 'react-redux'
import { getTeam, addToTeams, loadGame, removeSave } from '../actions/index'
import { newTeam, load, delSave } from '../fetch'
import { withRouter } from 'react-router-dom'
import Save from './Save'
import { OnAtLeastTablet, OnAtMostPhablet } from '../Responsive'

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

    const handleLoadGame=(save)=>{
        fetch(load, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify({
                save_id: save
            })
        })
        .then(res=> res.json())
        .then(result=> {
            console.log(result)
            let parTeam = JSON.parse(result.team)
            // let parDungeon = JSON.parse(result.dungeon)
            props.loadGame(parTeam, result.floor_count, result.dungeon)
            props.history.push({
                pathname: 'game'
            })

        })
    }

    const handleDeleteSave=(save)=>{
        fetch(delSave, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify({
                save_id: save
            })
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                props.removeSave(save)
            }else{
                console.log(result.error)
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
                    <input type='submit' value='New Game'/>
            </form>
        )
    }

    const renderSaves=()=>{
        if(props.user.saves){
            if(props.user.saves.length === 0){
                return <h2>No Game Saves. Start A New Game!</h2>
            }else{
                return props.user.saves.map(save => {
                    // return <h1 onClick={()=>handleLoadGame(save.id)}>Cleared: {save.floor_count} </h1>
                    return(
                        <Save save={save} handleDeleteSave={handleDeleteSave} handleLoadGame={handleLoadGame}/>
                    )
                })
            }
        }
    }

    return(
        <div>
            <OnAtLeastTablet>
            <div className='user-grid' style={{padding: '15px', paddingTop: '30px'}}>
                <div>
                    {newTeamForm()}
                </div>
                <div align='center'>
                    <h2>Saves: </h2>
                    {renderSaves()}
                </div> 
            </div>
            </OnAtLeastTablet>
            <OnAtMostPhablet>
            <div style={{padding: '15px', paddingTop: '30px'}}>
                <div align='center'>
                    {newTeamForm()}
                </div>
                <div align='center' style={{paddingTop: '30px'}}>
                    <h2>Saves: </h2>
                    {renderSaves()}
                </div> 
            </div>
            </OnAtMostPhablet>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    getTeam: (team)=>{
        dispatch(getTeam(team))
    },
    addToTeams: (team)=>{
        dispatch(addToTeams(team))
    },
    loadGame: (team, floorCount, dungeon)=>{
        dispatch(loadGame(team, floorCount, dungeon))
    },
    removeSave: (save_id)=>{
        dispatch(removeSave(save_id))
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
        team: state.team,
        saves: state.saves
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Team))