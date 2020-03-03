import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerSprite from '../components/PlayerSprite'

import { addCharacter } from '../actions/index'

class Character extends Component{
    state = {
        name: '',
        focus: 'fire',
        attack1: '',
        attack2: '',
        attack3: '',
        attack4: '',
    }

    attackSelect=()=>{
        let attacks = [...this.props.attacks].filter(att=>att.element === this.props.focus || att.element === 'none' || att.element === 'medic')
        return attacks.map(att=>{
            return <option value={att.id}>{att.name}</option>
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className='char-create-grid'>
                
                <div>
                <form>
                    <fieldset disabled={this.state.disable}>
                        <div>
                            <label>Character Name: </label>
                            <input onChange={this.props.handleCharChange}
                            type='text' placeholder='Enter Name' name='name'/>
                        </div>
                        <div>
                            <label>Focus: </label>
                            <select name='focus' onChange={this.props.handleCharChange}>
                                <option value='fire'>Fire</option>
                                <option value='earth'>Earth</option>
                                <option value='water'>Water</option>
                                <option value='ice'>Ice</option>
                            </select>
                        </div>
                        <div>
                            <span>
                            <label>Attack 1: </label>
                                <select name='attack1' onChange={this.props.handleCharChange}>
                                    <option value='none' selected>Select Attack</option>
                                    {this.attackSelect()}
                                </select>
                            </span>
                            <span>
                                <label>Attack 2: </label>
                                <select name='attack2' onChange={this.props.handleCharChange}>
                                    <option value='none' selected>Select Attack</option>
                                    {this.attackSelect()}
                                </select>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label>Attack 3: </label>
                                <select name='attack3' onChange={this.props.handleCharChange}>
                                    <option value='none' selected>Select Attack</option>
                                    {this.attackSelect()}
                                </select>
                            </span>
                            <span>
                                <label>Attack 4: </label>
                                <select name='attack4' onChange={this.props.handleCharChange}>
                                    <option value='none' selected>Select Attack</option>
                                    {this.attackSelect()}
                                </select>
                            </span>

                        </div>
                    </fieldset>
                </form>
                </div>
                <div>
                    <PlayerSprite focus={this.props.focus}/>
                </div>
            </div>
            
        )
    }


}

const mapDispatchToProps = dispatch => ({
    addCharacter: (character) =>{
        dispatch(addCharacter(character))
    }
})

const mapStateToProps = state => {
    return {
        team: state.team,
        attacks: state.attacks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)