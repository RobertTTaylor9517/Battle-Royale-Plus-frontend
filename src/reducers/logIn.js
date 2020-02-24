function logIn(state, action){
    if(action.token !== undefined){
        localStorage.setItem("token", action.token)
        return {
            ...state,
            user: {
                ...action.user,
            teams: action.teams},
            attacks: action.attacks,
            loggedIn: true
        }
    }else{
        return state;
    }
}

export default logIn