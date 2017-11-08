import {FETCH_WEATHER} from '../actions';

export default function (state=[], action) {	
	// console.log('Action received',action);
	switch (action.type) {
		case FETCH_WEATHER:
			//        state.push(action.payload.data);
			// return state.concat([action.payload.data]);
			return [action.payload.data, ...state];
	}
	return state;
}