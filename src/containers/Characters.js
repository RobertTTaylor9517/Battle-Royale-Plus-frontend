import React from 'react'
import { connect } from 'react-redux'
import Character from '../components/Character'
import startGame from '../reducers/startGame'
import { withRouter } from 'react-router-dom'

const Characters = props =>{

    const renderChars=()=>{
           return <div>
                <Character/>
                <Character/>
                <Character/>
                <Character/>
            </div>
        
    }

    const renderStart=()=>{
        console.log(props)
        if(props.team.characters && props.team.characters.length === 4){
            return(
                <button type="button">Start Game</button>
            )
        }
    }

    const handleStart=()=>{
        props.startGame()
        props.history.push({
            pathname: '/game'
        })
        
    }

    return(
        <div>
            {renderChars()}
            {renderStart()}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startGame: ()=>{
        dispatch(startGame())
    }
})

const mapStateToProps = state => {
    return {
        team: state.team,
        attacks: state.attacks
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Characters))