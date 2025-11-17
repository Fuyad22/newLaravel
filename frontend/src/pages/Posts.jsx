import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'

function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/posts`)
      setPosts(response.data.data || [])
      setError(null)
    } catch (err) {
      setError('Failed to fetch posts. Make sure the backend is running.')
      console.error('Error fetching posts:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="page"><p>Loading posts...</p></div>
  }

  if (error) {
    return (
      <div className="page">
        <h1>Posts</h1>
        <div className="error-message">{error}</div>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet. Create your first post using the API!</p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post._id} className="card">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div className="post-meta">
                <span>By: {post.author}</span>
                <span>Email: {post.email}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Posts
