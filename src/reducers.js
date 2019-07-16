import { combineReducers } from 'redux';
import userConst from './UserConstants';

const defaultState = {
    incomingData: {},
    Apiuse: false
}

function sampleReducer(state = defaultState, action) {
    switch (action.type) {
        case userConst.GETAPI_REQUEST:
            return { Apiuse: true };
        case userConst.GETAPI_SUCCESS:
            return { incomingData: action.user, Apiuse: false };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    sampleReducer
})

export default rootReducer;