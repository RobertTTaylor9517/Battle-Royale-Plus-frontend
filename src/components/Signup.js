import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newUser } from '../fetch'

import { logIn } from '../actions/index'
import { Link } from 'react-router-dom'

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
            // console.log(tkn)
            // let parUser = JSON.parse(tkn.user)
            this.props.logIn(tkn.token, tkn.user, tkn.attacks, tkn.saves)
            this.props.history.push('/user')
        })
        .catch(err => console.log(err))
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div align='center' style={{paddingTop: '25%'}}>
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
                <p>Already have an Account? <Link to='/' style={{color: 'white'}}>Login</Link>!</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logIn: (token, user, attacks, saves)=>{
        dispatch(logIn(token, user, attacks, saves))
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
