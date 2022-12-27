import {User} from "../models/user.model";
import * as authActions from "./auth.actions";

export interface AuthState {
    user: User | null,
    authError: { message: string } | null,
    loading: boolean
}

const initialState: AuthState = {
    user: null,
    authError: {message: ''},
    loading: false
}

export function authReducer(
    state: AuthState = initialState,
    action: authActions.AuthActions
): AuthState {
    switch (action.type) {
        case authActions.LOGIN:
            const user = new User(action.payload.email, action.payload.id,action.payload.token)
            return {
                ...state,
                authError: null,
                user: user,
                loading: false
            }
        case authActions.LOGOUT:
            return {
                ...state,
                authError: null,
                user: null
            }
        case authActions.LOGIN_START:
            return {
                ...state,
                authError: null,
                loading: true
            }
        case authActions.LOGIN_FAIL:
            return {
                ...state,
                user: null,//because the process will fail
                authError: action.payload,//the actual error from the payload which is a string
                loading: false
            }
        default: 
            return state
    }
}