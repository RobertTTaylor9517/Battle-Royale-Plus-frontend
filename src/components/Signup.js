import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newUser } from '../fetch'

import { logIn } from '../actions/index'

class Signup extends Component{
    state = {
        username: '',
        password: '',
        email: '',
    }

    handleSignUp=(e)=>{
        e.preventDefault()

        fetch(newUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email
                }
            })
        })
        .then(res=>res.json())
        .then(tkn=>{
            console.log(tkn)
            this.props.logIn(tkn.token)
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label>Email: </label>
                        <input onChange={this.handleChange}
                        type='text' name='email' value={this.state.email} placeholder='Enter Email'/>
                    </div>
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
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logIn: (token)=>{
        dispatch(logIn(token))
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
