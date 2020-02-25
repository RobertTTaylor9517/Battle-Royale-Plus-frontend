import React from 'react'
import { connect } from 'react-redux'
import Enemy from '../components/Enemy'

const Enemies = (props) =>{

    const renderEnemies=()=>{
        return props.floor.enemies.map((enem,index)=>{
            let floorEnemy = props.floor.floor_enemies[index]
            return <Enemy enemy={enem} feID={floorEnemy.id} index={index}/>
        })
    }

    return(
        <div>
            {renderEnemies()}
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    // logIn: (token, user, attacks, teams)=>{
    //     dispatch(logIn(token, user, attacks, teams))
    // }
})

const mapStateToProps = state => {
    return {
        floor: state.dungeon.floor
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Enemies)