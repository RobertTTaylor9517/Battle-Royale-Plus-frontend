import React from 'react'
import { connect } from 'react-redux'
import { getTeam } from '../actions/index'

import Team from '../components/Team'

const Game = props =>{

    const render=()=>{
        if(props.user.team){

        }else{
            return(
                <div>
                    <Team/>
                </div>
            )
        }
    }

    return(
        <div>
            {render()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Game)