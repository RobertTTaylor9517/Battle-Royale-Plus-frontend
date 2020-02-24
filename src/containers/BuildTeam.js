import React from 'react'
import { connect } from 'react-redux'
import { getTeam } from '../actions/index'

import Team from '../components/Team'
import Characters from './Characters'

const BuildTeam = props =>{

    const render=()=>{
        if(props.team.team_name){
            return(
                <div>
                    <Characters/>
                </div>
            )
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
        user: state.user,
        team: state.team
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildTeam)