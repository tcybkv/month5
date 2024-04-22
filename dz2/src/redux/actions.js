import {types} from "./types";

function getUsersAction(users) {
    return{
        type: types.HANDLE_CLICK,
        payload: users
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}