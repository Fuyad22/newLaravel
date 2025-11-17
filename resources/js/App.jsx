import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation using Link for client-side routing */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-6">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-800 font-medium">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Routes configured with React Router v6 syntax */}
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
