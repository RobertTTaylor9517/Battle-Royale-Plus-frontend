import React, { Component } from 'react'
import { connect } from 'react-redux'
import Character from '../components/Character'
import {startGame, addCharacter, getTeam} from '../actions/index'
import { withRouter } from 'react-router-dom'
import {newChar, randomTeam} from '../fetch'

class Characters extends Component{

    state = {
        characters: {
            character1: {
                focus: 'fire'
            },
            character2: {
                focus: 'fire'
            },
            character3: {
                focus: 'fire'
            },
            character4: {
                focus: 'fire'
            },
        }
    }

    renderChars=()=>{
           return <div>
               <button onClick={this.getRandomTeam} type='button'>Random Team</button>
                <Character focus={this.state.characters.character1.focus} handleCharChange={this.handleCharacter1Change}/>
                <Character focus={this.state.characters.character2.focus}  handleCharChange={this.handleCharacter2Change}/>
                <Character focus={this.state.characters.character3.focus}  handleCharChange={this.handleCharacter3Change}/>
                <Character focus={this.state.characters.character4.focus}  handleCharChange={this.handleCharacter4Change}/>
            </div>
        
    }

    handleCharacter1Change=(e)=>{
        this.setState({
            characters: {
                ...this.state.characters,
                character1: {
                    ...this.state.characters.character1,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleCharacter2Change=(e)=>{
        this.setState({
            characters: {
                ...this.state.characters,
                character2: {
                    ...this.state.characters.character2,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleCharacter3Change=(e)=>{
        this.setState({
            characters: {
                ...this.state.characters,
                character3: {
                    ...this.state.characters.character3,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleCharacter4Change=(e)=>{
        this.setState({
            characters: {
                ...this.state.characters,
                character4: {
                    ...this.state.characters.character4,
                    [e.target.name]: e.target.value
                }
            }
        })
    }



    renderStart=()=>{
        // console.log(props)
        if(this.props.team.characters && this.props.team.characters.length === 4){
            return(
                <button onClick={this.handleStart} type="button">Start Game</button>
            )
        }else{
            return <button onClick={this.handleSubmit} type='button'>Save Team</button>
        }
    }

    handleStart=()=>{
        this.props.startGame()
        this.props.history.push({
            pathname: '/game'
        })
        
    }

    handleSubmit=()=>{

        var characters = [this.state.characters.character1, this.state.characters.character2, this.state.characters.character3, this.state.characters.character4]

        characters.map(char=> {
            console.log(char)
            let attackString = `${char.attack1},${char.attack2},${char.attack3},${char.attack4}`

            fetch(newChar, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: localStorage['token']
                },
                body: JSON.stringify({
                    name: char.name,
                    focus: char.focus,
                    attacks: attackString,
                    team_id: this.props.team.id

                })
            })
            .then(res=>res.json())
            .then(char => {
                    this.props.addCharacter(char)
            })
        })
    }

    getRandomTeam=()=>{
        fetch(randomTeam, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify({
                team_id: this.props.team.id
            })
        })
        .then(res=>res.json())
        .then(team => {
            this.props.getTeam(team)
            this.handleStart()
        })
    }

    render(){
        return(
            <div>
                {this.renderChars()}
                {this.renderStart()}
            </div>
        )
    }

    
}

const mapDispatchToProps = dispatch => ({
    startGame: ()=>{
        dispatch(startGame())
    },
    addCharacter: (character)=>{
        dispatch(addCharacter(character))
    },
    getTeam: (team)=>{
        dispatch(getTeam(team))
    }

})

const mapStateToProps = state => {
    return {
        team: state.team,
        attacks: state.attacks
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Characters))