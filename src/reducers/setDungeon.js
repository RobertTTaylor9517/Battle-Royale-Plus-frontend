function setDungeon(state,action){
    return{
        ...state,
        dungeon: action.dungeon
    }
}