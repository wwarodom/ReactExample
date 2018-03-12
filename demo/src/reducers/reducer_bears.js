import _ from 'lodash';
import {FETCH_BEARS } from '../actions';

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_BEARS:
            return _.mapKeys(action.payload.data,'id');
        default:
            return state;
    }
}
