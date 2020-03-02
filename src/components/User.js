import React from 'react'
// import { userCrud } from '../fetch'
import { connect } from 'react-redux'

import { getTeam, logOut } from '../actions/index'
import BuildTeam from '../containers/BuildTeam'

const User = props =>{

    const handleLogOut=()=>{
        props.logOut()
        props.history.push({
            pathname: '/'
        })
    }

    const renderUser=()=>{
        if(localStorage['token'] !== undefined){
            return(
                <div style={{padding: '15px', paddingBlock: '30px'}}>
                    <h1>{props.user.username}</h1>
                    <p>{props.user.email}</p>
                </div>
            )
        }else{
            return(
                <h1>Not Logged In</h1>
            )
        }
    }

    return(
        <div>
            {renderUser()}
            <BuildTeam/>
            <button onClick={handleLogOut} type='button'>Logout</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getTeam: (team)=>{
        dispatch(getTeam(team))
    },
    logOut: ()=>{
        dispatch(logOut())
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)