import { SET_USER, SET_TOKEN } from './actionTypes'

export const setUser = (payload: any) => ({
    type: SET_USER,
    payload
})

export const setToken = (payload: any) => ({
    type: SET_TOKEN,
    payload
})