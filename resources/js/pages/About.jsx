import React from 'react';

function About() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About This App</h1>
      <p className="text-lg text-gray-700 mb-4">
        This React application demonstrates a properly configured React Router v6
        setup integrated with a Laravel backend.
      </p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
        <h2 className="font-semibold text-green-900 mb-2">Technical Stack:</h2>
        <ul className="list-disc list-inside text-green-800 space-y-1">
          <li>React 18.x</li>
          <li>React Router DOM v6.x</li>
          <li>Vite for fast builds</li>
          <li>Tailwind CSS for styling</li>
          <li>Laravel backend</li>
        </ul>
      </div>
      <p className="text-gray-600">
        Try refreshing this page or visiting /about directly - Laravel's fallback
        route ensures the SPA loads correctly for any client-side route.
      </p>
    </div>
  );
}

export default About;
