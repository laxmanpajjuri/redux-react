import { ADD_POST, DEL_POST } from '../actions/types';
export default function postReducer(state = [],action)
{
    switch(action.type){
        case ADD_POST:
            return [...state,action.payload];
        case DEL_POST:
                return state.filter(post => post.id !== action.payload.id);
        default:
            return state;
    }
}