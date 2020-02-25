import React from 'react'
import { connect } from 'react-redux'
import { dungeons } from '../fetch'
import { setDungeon } from '../actions/index'

const Game = props =>{
    const render=()=>{
        if(props.startGame === true){
            fetch(dungeons, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: localStorage['token']
                }
            })
            .then(res=>res.json())
            .then(dungeon => {
                props.setDungeon(dungeon)
            })
        }else if(props.startGame === true && props.dungeon.id){

        }
    }
}

const mapDispatchToProps = dispatch => ({
    setDungeon: (dungeon)=>{
        dispatch(setDungeon(dungeon))
    }
    // logIn: (token, user, attacks, teams)=>{
    //     dispatch(logIn(token, user, attacks, teams))
    // }
})

const mapStateToProps = state => {
    return {
        team: state.team,
        startGame: state.startGame,
        dungeon: state.dungeon
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)