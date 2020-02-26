import React from 'react'
import { connect } from 'react-redux'
import Enemies from './Enemies'
import Players from './Players'
import Message from '../components/Message'
import { setFloor } from '../actions/index'
import { floor } from '../fetch'

const Battle = props => {

    const setDifficulty=()=>{
        if(props.floorCount < 3){
            return 'easy'
        }else if(props.floorCount < 5){
            return 'normal'
        }else if(props.floorCount === 5){
            return 'mini_boss'
        }else if(props.floorCount < 7){
            return 'hard'
        }else if(props.floorCount === 9){
            return 'harder'
        }else if(props.floorCount === 10){
            return 'boss'
        }
    }

    const getFloor=()=>{
        if(props.startGame === true && props.dungeon.id){
            let difficulty = setDifficulty()
            
            fetch(floor,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: localStorage['token']
                },
                body: JSON.stringify({
                    dungeon_id: props.dungeon.id,
                    difficulty: difficulty
                })
            })
            .then(res=>res.json())
            .then(floor => {
                props.setFloor(floor)
            })
        }
    }

    const renderSwitch=()=>{
        if(props.dungeon.floor.enemies){
            if(props.dungeon.floor.enemies.length !== 0){
                return(
                    <div className='grid'>
                        <div>
                            <Enemies/>
                        </div>
                        <div>
                            <Message/>
                        </div>
                        <div>
                            <Players/>
                        </div>
                    </div>
                )
            }else{
                return(
                    <button onClick={getFloor} type='button'>Next Floor</button>
                )
            }
        }

    }
    return(
        <div>
            {renderSwitch()}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setFloor: (floor)=>{
        dispatch(setFloor(floor))
    }
    // logIn: (token, user, attacks, teams)=>{
    //     dispatch(logIn(token, user, attacks, teams))
    // }
})

const mapStateToProps = state => {
    return {
        team: state.team,
        startGame: state.startGame,
        dungeon: state.dungeon,
        floorCount: state.floorCount,
        // eslint-disable-next-line no-dupe-keys
        startGame: state.startGame
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Battle)