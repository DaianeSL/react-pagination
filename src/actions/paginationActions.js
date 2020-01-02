import axios from 'axios';
import store from '../reducers'

export const getAllPosts = (response) => {
  return {
    type: 'FETCH_POSTS',
    payload: response.data
  }
}

export const setLoadingStatus = (loadingStatus) => {
  return {
    type: 'SET_LOADING_STATUS',
    payload: loadingStatus
  }
}

export const setCurrentPosts = (pageIndex) => {
  return {
    type: 'SET_CURRENT_POSTS',
    payload: pageIndex
  }
}

export const fetchAllPosts = () => {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  return dispatch => {
    dispatch(setLoadingStatus(true));
    axios.get(url)
    .then( res => {
      dispatch(getAllPosts(res))
      dispatch(setLoadingStatus(false))
    })
  }
}