import { combineReducers } from 'redux';
import posts from './postreducer';
export default combineReducers({
    posts: posts
});