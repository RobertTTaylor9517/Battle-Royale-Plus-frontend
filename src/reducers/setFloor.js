function setFloor(state, action){
        return{
            ...state,
            floorCount: state.floorCount + 1,
            dungeon: {
                ...state.dungeon,
                floor: action.floor
            },
            attacking: 0,
            turn: 'player',
            message: []
        }
    
    
}
export default setFloor