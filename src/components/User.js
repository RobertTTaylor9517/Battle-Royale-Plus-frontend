import React from 'react'
// import { userCrud } from '../fetch'
import { connect } from 'react-redux'

import { getTeam } from '../actions/index'
import BuildTeam from '../containers/BuildTeam'

const User = props =>{

    const renderUser=()=>{
        if(localStorage['token'] !== undefined){
            return(
                <div>
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
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getTeam: (team)=>{
        dispatch(getTeam(team))
    }
})

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)