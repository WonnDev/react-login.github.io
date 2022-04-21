
const initState = {
    users: [
        { id: 1, name: '1', password: '1' },
        { id: 2, name: '2', password: '2' },
        { id: 3, name: '3', password: '3' }
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {   //state (obj not state of react), action 
    switch (action.type) {
        case "DELETE_USER":
            console.log('>>run into deluser: ', action)
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random user: ${id}`, password: `${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        case 'LOGIN_USER':
            let userInput = action.payload.user
            let passwordInput = action.payload.password
            return {

            }
        // case "SET_USER":
        //     return {
        //         ...state,
        //         user: action.payload,
        //         loggedIn: true
        //     }
        // case "LOG_OUT":
        //     return {
        //         ...state,
        //         user: {},
        //         loggedIn: false
        //     }
        default:
            return state
    }
}

export default rootReducer;