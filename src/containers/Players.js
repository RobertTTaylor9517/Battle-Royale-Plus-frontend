import React from 'react'
import { connect } from 'react-redux'
import Player from '../components/Player'

const Players = (props) =>{
    const renderChars=()=>{
        return props.team.characters.map((char,index)=>{
            return <Player index={index} character={char} attacking={props.attacking} turn={props.turn}/>
        })
    }



    return(
        <div>
            {renderChars()}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    // logIn: (token, user, attacks, teams)=>{
    //     dispatch(logIn(token, user, attacks, teams))
    // }
})

const mapStateToProps = state => {
    return {
        team: state.team,
        attacking: state.attacking,
        turn: state.turn
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Players)