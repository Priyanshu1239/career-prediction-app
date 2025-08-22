import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Recommendation = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const userData = localStorage.getItem('userData');
        
        if (!token) {
            navigate('/login'); // Redirect to login if not authenticated
        } else if (userData) {
            const user = JSON.parse(userData);
            setUsername(user.username);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userData');
        navigate('/');
        alert('Logged out successfully!');
    };

  const [formData, setFormData] = useState({
    interests: '',
    education: ''
  });
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecommendation(null);

    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch('http://localhost:3000/api/v1/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setRecommendation(data.recommended_job);
      } else {
        console.error('Error getting recommendation');
        alert('Failed to get recommendation. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
      {/* User Status */}
      {username && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {username.charAt(0).toUpperCase()}
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
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Career Path Finder</h1>
          <p className="text-gray-600">Discover your ideal career based on your interests and education</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="interests">
              Your Interests & Passions
            </label>
            <textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              rows="4"
              placeholder="What are you passionate about? What activities do you enjoy? (e.g., problem-solving, creative design, helping others, technology, etc.)"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="education">
              Educational Background
            </label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Your educational qualifications (e.g., B.Tech Computer Science, MBA, High School Diploma, etc.)"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Analyzing your profile...
              </div>
            ) : (
              'Discover My Career Path'
            )}
          </button>
        </form>

        {/* Recommendation Result */}
        {recommendation && (
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Perfect Match Found!</h3>
              <p className="text-blue-700 mb-4">Based on your profile, we recommend:</p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <span className="text-2xl font-bold text-blue-900">{recommendation}</span>
              </div>
              <p className="text-sm text-blue-600 mt-4">
                This career path aligns with your interests and educational background
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500 text-center">
            Our AI-powered recommendation system analyzes thousands of career paths to find your perfect match
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
