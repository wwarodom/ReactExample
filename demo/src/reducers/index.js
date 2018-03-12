import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import BearsReducer from './reducer_bears';

const rootReducer = combineReducers({
    bears: BearsReducer
});

export default rootReducer;
