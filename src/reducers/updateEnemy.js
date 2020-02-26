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
                turn: 'enemy',
                mntAttack: {}
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
                attacking: state.attacking + 1,
                mntAttack: {}
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
            turn: 'enemy',
            mntAttack: {}
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
            attacking: state.attacking + 1,
            mntAttack: {}
        }
    }

}
export default updateEnemy