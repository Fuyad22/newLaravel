import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist. This is the catch-all route
        that handles any unmatched paths.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
