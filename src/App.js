import React, { useEffect } from 'react';
import './App.css';
import Posts from './componets/Posts';
import Pagination from './componets/Pagination';
import { fetchAllPosts, setCurrentPosts } from './actions/paginationActions';
import { connect } from 'react-redux'

const App = ( props ) => {

  const { 
    posts,
    fetchAllPosts,
    setCurrentPosts,
    loading,
    currentPage,
    postsPerPage
  } = props;

  useEffect(() => {
    
    fetchAllPosts()

  }, [fetchAllPosts])

  const paginate = index => setCurrentPosts(index)

  return (
    <div className="container mt-5">
      <h1>Pagination Example</h1>
      <Posts 
        posts={posts} 
        loading={loading} 
        currentPage={currentPage} 
        postsPerPage={postsPerPage} 
      />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.paginationReducer.posts,
  loading: state.paginationReducer.loading,
  currentPage: state.paginationReducer.currentPage,
  postsPerPage: state.paginationReducer.postsPerPage
})

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => {
    dispatch(fetchAllPosts())
  },
  setCurrentPosts: (index) => {
    dispatch(setCurrentPosts(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
