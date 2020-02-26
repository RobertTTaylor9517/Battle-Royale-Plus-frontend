function updateEnemy(state, action){
    if(action.enemy.death){
        let temp = [...state.dungeon.floor.enemies]
        temp.splice(action.index, 1)
        return{
            ...state,
            dungeon: {
                ...state.dungeon,
                floor: {
                    ...state.dungeon.floor,
                    enemies: temp
                }
            }
        }
    }else if(state.attacking === 3){
        let temp = [...state.dungeon.floor.enemies]
        temp[action.index] = action.enemy
        return{
            ...state,
            dungeon: {
                ...state.dungeon,
                floor: {
                    ...state.dungeon.floor,
                    enemies: temp
                }
            },
            attacking: 0,
            turn: 'enemy'
        }
    }else{
        let temp = [...state.dungeon.floor.enemies]
        temp[action.index] = action.enemy
        return{
            ...state,
            dungeon: {
                ...state.dungeon,
                floor: {
                    ...state.dungeon.floor,
                    enemies: temp
                }
            },
            attacking: state.attacking + 1
        }
    }

}
export default updateEnemy