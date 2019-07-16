import uuidv4 from 'uuid/v4';
import { ADD_POST, DEL_POST } from './types';
export const createPost = ({ title,body}) => ({
    type: ADD_POST,
        payload: {
        id: uuidv4(),
            title,
            body
    }
});
export const deletePost = id => ({
    type: DEL_POST,
    payload: {
      id
    }
  });