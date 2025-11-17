import React from 'react';

function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to React with Router v6
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a minimal React application demonstrating proper React Router setup
        with client-side navigation. Click the navigation links above to see
        routing in action without full page reloads.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h2 className="font-semibold text-blue-900 mb-2">Features:</h2>
        <ul className="list-disc list-inside text-blue-800 space-y-1">
          <li>BrowserRouter for clean URLs (no hash)</li>
          <li>Link components for client-side navigation</li>
          <li>React Router v6 syntax (Routes and element prop)</li>
          <li>404 catch-all route for unmatched paths</li>
          <li>Laravel fallback route for deep links and refreshes</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
