import React from 'react'

const Posts = ({ posts, loading, currentPage, postsPerPage }) => {
  if(loading){
    return <h2>Loading ...</h2>
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  
  return (
    <ul className="list-group mb-4">
      {currentPosts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default Posts