import { SET_USER } from '../actionTypes'

const initialState = {
    userData: null
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case SET_USER: {
            const { payload } = action
            return {
                ...state,
                userData: payload
            }
        }
        default:
            return state
    }
}