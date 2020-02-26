import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth } from '../fetch'

import { logIn } from '../actions/index'
import { Link } from 'react-router-dom'

class LogIn extends Component{
    state = {
        username: '',
        password: '',
    }

    handleLogin=(e)=>{
        e.preventDefault()

        fetch(auth, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res=>res.json())
        .then(tkn => {
            console.log(tkn)
            this.props.logIn(tkn.token, tkn.user, tkn.attacks, tkn.teams)
            this.props.history.push('/user')
        })

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    logInCheck = ()=>{
        return (
            <p>Don't have an Account? <Link to='/signup'>Signup</Link>!</p>
        )
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleLogin}>
                    <div>
                        <label>Username: </label>
                        <input onChange={this.handleChange}
                        type='text' name='username' value={this.state.username} placeholder='Enter Username'/>
                    </div>
                    
                    <div>
                        <label>Password: </label>
                        <input onChange={this.handleChange}
                        type='password' name='password' value={this.state.password} placeholder='Enter Password'/>
                    </div>
                    
                    <input 
                    type='submit' value='Submit'/>
                </form>
                {this.logInCheck()}

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logIn: (token, user, attacks, teams)=>{
        dispatch(logIn(token, user, attacks, teams))
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)