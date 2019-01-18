import {AUTH_USER, AUTH_ERROR} from '../actions/types';


const INIT_STATE = {
    authenticated: '',
    errorMessage: ''
};

export default function(state = INIT_STATE, {type, payload}) {
    switch (type) {
        case AUTH_USER: {
            return {
                ...state,
                authenticated: payload
            };
        }
        case AUTH_ERROR: {
            return {
                ...state,
                errorMessage: payload
            };
        }
        default: {
            return state;
        }
    }
}