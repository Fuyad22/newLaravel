import React from 'react'

function About() {
  return (
    <div className="page">
      <h1>About NewLaravel</h1>
      <div className="card">
        <h2>Technology Stack</h2>
        <ul>
          <li><strong>Backend:</strong> Laravel with MongoDB</li>
          <li><strong>Frontend:</strong> React 18 with Vite</li>
          <li><strong>Routing:</strong> React Router v6</li>
          <li><strong>Styling:</strong> CSS3</li>
        </ul>
      </div>
      <div className="card">
        <h2>API Endpoints</h2>
        <ul>
          <li>GET /api/posts - Fetch all posts</li>
          <li>POST /api/posts - Create a new post</li>
          <li>GET /api/posts/:id - Get a specific post</li>
          <li>PUT /api/posts/:id - Update a post</li>
          <li>DELETE /api/posts/:id - Delete a post</li>
        </ul>
      </div>
      <div className="card">
        <h2>Client-Side Routing</h2>
        <p>This application uses React Router for client-side navigation. All navigation between pages happens without full page reloads, providing a smooth single-page application experience.</p>
      </div>
    </div>
  )
}

export default About
