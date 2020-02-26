function logOut(state, action){
    localStorage.clear()
    return{
        user: {},
        dungeon: {},
        team: {},
        loggedIn: false,
        startGame: false
    }
}

export default logOut