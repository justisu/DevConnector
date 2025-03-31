import axios from 'axios';

import {
  GET_POSTS,
  POST_ERROR
} from './types';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.type,
        status: error.response.status,
      }
    })
  }
}