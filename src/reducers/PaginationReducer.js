export const initialState = {
  posts: [],
  loading: false,
  currentPage: 1,
  postsPerPage: 10,
}

export default function paginationReducer( state = initialState, action ){
  switch(action.type){
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload
      }

    case 'SET_LOADING_STATUS':
      return {
        ...state,
        loading: action.payload
      }

    case 'SET_CURRENT_POSTS':
      return {
        ...state,
        currentPage: action.payload
      }

    default:
      return state
  }
}