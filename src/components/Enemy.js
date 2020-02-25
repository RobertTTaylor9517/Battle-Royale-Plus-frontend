import React from 'react'
import {connect} from 'react-redux'
import { attack } from '../fetch'
import { updateEnemy } from '../actions/index'

const Enemy = props => {
    const renderTarget=()=>{
        if(props.mntAttack){
            return(
                <h4 onClick={()=>processAttack(props.enemy, props.feID)}>{props.enemy.name}{props.enemy.health}</h4>
            )
        }else{
            return(
                <h4>{props.enemy.name}{props.enemy.health}</h4>
            )
        }
    }

    const processAttack=(enemy, floor_enemy)=>{
        fetch(attack, {
            method: 'POST',
            headers: {
                Authorization: localStorage['token'],
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                attack: props.mntAttack,
                enemy: enemy,
                floor_enemy_id: floor_enemy
            })
        })
        .then(res=>res.json())
        .then(enemy => {
            props.updateEnemy(enemy, props.index)
        })
    }

    return(
        <div>
            {renderTarget()}
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    updateEnemy: (enemy, index)=>{
        dispatch(updateEnemy(enemy, index))
    }
})

const mapStateToProps=state=>{
    return {
        mntAttack: state.mntAttack
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Enemy)