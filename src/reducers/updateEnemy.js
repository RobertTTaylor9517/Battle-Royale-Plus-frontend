function updateEnemy(state, action){
    if(action.enemy.death){
        let temp = [...state.dungeon.floor.enemies]
        temp.splice(action.index, 1)
        if(state.attacking === state.team.characters.length - 1){
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
        
    }else if(state.attacking === state.team.characters.length - 1){
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