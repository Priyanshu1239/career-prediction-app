import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const userData = localStorage.getItem('userData');
    
    if (token) {
      setIsLoggedIn(true);
      if (userData) {
        const user = JSON.parse(userData);
        setUsername(user.username);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUsername('');
    alert('Logged out successfully!');
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto p-8">
        {/* User Status */}
        {isLoggedIn && (
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {username ? username.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-800">Welcome, {username}</p>
                <button
                  onClick={handleLogout}
                  className="text-xs text-red-600 hover:text-red-800 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Hero Section */}
        <div className="mb-12">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Career Prediction
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Discover your ideal career path based on your unique interests and educational background
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Personalized</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get tailored career recommendations based on your unique profile and preferences
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Education-Based</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leverage your educational background to find the perfect career match
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Interest-Driven</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Find careers that truly align with your passions and personal interests
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/recommendation" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🚀 Get Started
          </Link>
          <Link 
            to="/register" 
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            📝 Register
          </Link>
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🔐 Login
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Join thousands of users who have discovered their perfect career path with our AI-powered recommendation system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
