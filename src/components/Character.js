import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newChar } from '../fetch'

class Character extends Component{
    state = {
        name: '',
        focus: 'fire',
        attack1: '',
        attack2: '',
        attack3: '',
        attack4: '',
        disable: false
    }

    attackSelect=()=>{
        let attacks = [...this.props.attacks].filter(att=>att.element === this.state.focus || att.element === 'none' || att.element === 'medic')
        return attacks.map(att=>{
            return <option value={att.id}>{att.name}</option>
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()

        fetch(newChar, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify({
                name: this.state.name,
                focus: this.state.focus,
                
            })
        })

    }

    render(){
        return(
            <div>
                <form>
                    <fieldset disabled={this.state.disable}>
                        <div>
                            <label>Character Name: </label>
                            <input onChange={this.handleChange}
                            type='text' value={this.state.name} placeholder='Enter Name' name='name'/>
                        </div>
                        <div>
                            <label>Focus: </label>
                            <select name='focus' onChange={this.handleChange}>
                                <option value='fire'>Fire</option>
                                <option value='earth'>Earth</option>
                                <option value='water'>Water</option>
                                <option value='ice'>Ice</option>
                            </select>
                        </div>
                        <div>
                            <span>
                            <label>Attack 1: </label>
                                <select name='attack1' onChange={this.handleChange}>
                                    {this.attackSelect()}
                                </select>
                            </span>
                            <span>
                                <label>Attack 2: </label>
                                <select name='attack2' onChange={this.handleChange}>
                                    {this.attackSelect()}
                                </select>
                            </span>
                            <span>
                                <label>Attack 3: </label>
                                <select name='attack3' onChange={this.handleChange}>
                                    {this.attackSelect()}
                                </select>
                            </span>
                            <span>
                                <label>Attack 4: </label>
                                <select name='attack4' onChange={this.handleChange}>
                                    {this.attackSelect()}
                                </select>
                            </span>

                        </div>
                        <input type='submit' value='Submit'/>
                    </fieldset>
                </form>
            </div>
        )
    }


}

const mapDispatchToProps = dispatch => ({
    
})

const mapStateToProps = state => {
    return {
        team: state.team,
        attacks: state.attacks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)