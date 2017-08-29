import { combineReducers } from 'redux'
import { CHANGE_COUNT } from './actions'

function count(state = 0, action) {
    switch (action.type) {
        case CHANGE_COUNT:
            return state += action.amount;
            break;
        default:
            return state;
            break;
    }
}

const addSubtractApp = combineReducers({
    count
});

export default addSubtractApp;