import { GET_PROFILE, GET_PROFILES, CLEAR_PROFILE, UPDATE_PROFILE, PROFILE_ERROR, GET_REPOS } from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}

export default function profileReducer(state=initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      }
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
        repos: [],
      }  
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      }
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      }
    default:
      return state;
  }
}