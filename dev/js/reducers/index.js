import {combineReducers} from 'redux';
import ColsReducer from './reducer-cols';
import CardsReducer from './reducer-cards';

const allReducers = combineReducers({
    cols : ColsReducer,
    cards : CardsReducer
});

export default allReducers
