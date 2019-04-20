import { combineReducers } from 'redux'
import counter from './CountReducer';

const rootReducer = combineReducers({
    counter
});
export default rootReducer;