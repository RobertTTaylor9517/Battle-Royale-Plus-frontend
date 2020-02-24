import React, { Component } from 'react'
import { connect } from 'react-redux'

class Character extends Component{
    state = {
        name: '',
        focus: '',
        attacks: '',
    }

    attackSelect=()=>{
        return this.props.attacks.map(att=>{
            return <option value='att.id'>{att.name}</option>
        })
    }


}

const mapDispatchToProps = dispatch => ({
    getTeam: (team)=>{
        dispatch(getTeam(team))
    }
})

const mapStateToProps = state => {
    return {
        team: state.user.team,
        attacks: state.attacks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)