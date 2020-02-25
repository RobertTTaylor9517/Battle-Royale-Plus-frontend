function setFloor(state, action){
    if(state.dungeon.floor){
        return{
            ...state,
            floorCount: state.floorCount + 1,
            dungeon: {
                ...state.dungeon,
                floor: action.floor
            }
        }
    }else{
        return{
            ...state,
            floorCount: 1,
            dungeon: {
                ...state.dungeon,
                floor: action.floor
            }
        }
    }
    
}
export default setFloor