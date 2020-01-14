import { SET_USER, SET_TOKEN } from '../actionTypes'

const initialState = {
    userData: null,
    token: ''
}

export default (state = initialState, action: any) => {
    const { payload } = action
    switch(action.type) {
        case SET_USER: {
            return {
                ...state,
                userData: payload
            }
        }
        case SET_TOKEN: {
            return {
                ...state,
                token: payload
            }
        }
        default:
            return state
    }
}