
const initCurrentUser = {
    'name': 'hola',
    'password': '',
};

const currentUser = (state = initCurrentUser, action) => {   //state (obj not state of react), action 
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
}

export default currentUser;