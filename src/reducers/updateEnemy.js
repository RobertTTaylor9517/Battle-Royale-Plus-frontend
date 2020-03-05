function updateEnemy(state, action){
    let mess = action.message
    // let att = state.mntAttack.name
    // let team = state.team
    if(action.enemy === 'death'){
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
                mntAttack: {},
                message: [...state.message, ...action.mess]
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
                mntAttack: {},
                message: [...state.message, ...mess]
            }
        }
        
    }else if(state.attacking === state.team.characters.length - 1){
        let temp = [...state.dungeon.floor.enemies]
        temp[action.index] = action.enemy
        // mess.push(`${state.team.characters[action.index].name} uses ${att} on ${action.enemy.name}`)
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
            mntAttack: {},
            message: [...state.message, ...mess]
        }
    }else{
        let temp = [...state.dungeon.floor.enemies]
        temp[action.index] = action.enemy
        // mess.push(`${state.team.characters[action.index].name} uses ${att} on ${action.enemy.name}`)
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
            mntAttack: {},
            message: [...state.message, ...mess]
        }
    }

}
export default updateEnemy