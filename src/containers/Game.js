import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dungeons, floor } from '../fetch'
import { setDungeon, setFloor } from '../actions/index'
import Battle from './Battle'

class Game extends Component{

    componentDidMount(){
        this.getDungeon()
    }

    getDungeon=()=>{
        if(this.props.startGame === true){
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
                this.props.setDungeon(dungeon)
                this.getFloor()
            })
        }
    }

    getFloor=()=>{
        if(this.props.startGame === true && this.props.dungeon.id){
            let difficulty = 'easy'
            
            fetch(floor,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: localStorage['token']
                },
                body: JSON.stringify({
                    dungeon_id: this.props.dungeon.id,
                    difficulty: difficulty
                })
            })
            .then(res=>res.json())
            .then(floor => {
                this.props.setFloor(floor)
            })
        }
    }

    startBattle=()=>{
        if(this.props.dungeon.floor){
            return(
                <Battle/>
            )
        }
    }
    render(){
        return(
            <div>
                {this.startBattle()}
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    setDungeon: (dungeon)=>{
        dispatch(setDungeon(dungeon))
    },
    setFloor: (floor)=>{
        dispatch(setFloor(floor))
    }
    // logIn: (token, user, attacks, teams)=>{
    //     dispatch(logIn(token, user, attacks, teams))
    // }
})

const mapStateToProps = state => {
    return {
        team: state.team,
        startGame: state.startGame,
        dungeon: state.dungeon,
        floorCount: state.floorCount
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)