import React from 'react'
import { connect } from 'react-redux'
import Enemies from './Enemies'
import Players from './Players'
import Message from '../components/Message'
import { setFloor, logOut, reset } from '../actions/index'
import { floor, save } from '../fetch'
import { withRouter } from 'react-router-dom'
import BattleGround from './BattleGround'

const Battle = props => {

    const handleLogOut=()=>{
        props.logOut()
        props.history.push({
            pathname: '/'
        })
    }

    const setDifficulty=()=>{
        if(props.floorCount < 3){
            return 'easy'
        }else if(props.floorCount < 5){
            return 'normal'
        }else if(props.floorCount === 5){
            return 'mini_boss'
        }else if(props.floorCount <= 8 && props.floorCount > 5){
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

    const handleSaveGame=()=>{
        fetch(save, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage['token']
            },
            body: JSON.stringify({
                team_id: props.team.id,
                floor_count: props.floorCount
            })
        })
        .then(res=>res.json())
        .then(result=> {
            if(result.error){
                return (
                    <p>{result.error}</p>
                )
            }else{
                getFloor()
            }
        })
    }

    const renderSwitch=()=>{
        if(props.team.characters.length === 0 && props.dungeon.floor.enemies){
            setTimeout(function(){
                props.reset()
                props.history.push({
                    pathname: '/user'
                })
            }, 4000)
            return (
                <div className='grid'>
                    <div>

                    </div>
                    <div>
                        <h1>Game Over</h1>

                    </div>
                    <div>

                    </div>

                </div>
            )
        }
        else if(props.dungeon.floor.enemies){
            if(props.dungeon.floor.enemies.length !== 0){
                return(
                    <div className='grid' style={{padding: '15px', paddingTop: '30px'}}>
                        <div>
                            <Enemies/>
                        </div>
                        <div align='center'>
                            <div style={{height: '25vh'}}>
                                <BattleGround/>
                            </div>
                            <div style={{paddingTop: '100px'}}>
                                <Message/>
                            </div>
                            
                        </div>
                        <div>
                            <Players/>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div>
                        <button onClick={getFloor} type='button'>Next Floor</button>
                        <button onClick={handleSaveGame} type='button'>Save & Continue</button>
                        <button onClick={handleLogOut} type='button'>Logout</button>
                    </div>
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
    },
    logOut: ()=>{
        dispatch(logOut())
    },
    reset: ()=>{
        dispatch(reset())
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Battle))