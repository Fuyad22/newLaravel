import React from 'react'

function Home() {
  return (
    <div className="page">
      <h1>Welcome to NewLaravel</h1>
      <p>A Laravel backend with React frontend for post management.</p>
      <div className="card">
        <h2>Features</h2>
        <ul>
          <li>MongoDB integration for data storage</li>
          <li>RESTful API for post management</li>
          <li>Email verification system</li>
          <li>React Router for client-side navigation</li>
        </ul>
      </div>
      <div className="card">
        <h2>Getting Started</h2>
        <p>Navigate to the Posts page to see the post management system in action.</p>
      </div>
    </div>
  )
}

export default Home
