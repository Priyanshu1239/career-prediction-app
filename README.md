# Career Prediction App

A full-stack web application that provides career recommendations based on user skills and interests. Built with React frontend, Node.js/Express backend, and integrates with a machine learning Flask API for career predictions.

## 🚀 Features

- **User Authentication**: JWT-based registration and login system
- **Career Recommendations**: ML-powered career suggestions based on skills and interests
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly experience
- **Secure**: Password hashing with bcrypt and secure token management
- **Database**: MongoDB for user data storage

## 📋 Prerequisites

Before running this application, you need to set up the Flask ML server from the other repository:

### Flask ML Server Setup
1. Clone the Flask ML server repository from your GitHub profile
2. Follow the setup instructions in that repository
3. Start the Flask server (typically runs on port 5000)

### Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
PORT=3000
MONGO_URL=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
FLASK_ML_URL=http://localhost:5000  # URL of your Flask ML server
```

## 🛠️ Installation & Setup

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

## 🏃‍♂️ Running the Application

1. **Start the Flask ML Server** (from the other repository)
2. **Start the Backend Server**:
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on http://localhost:3000

3. **Start the Frontend**:
   ```bash
   cd Frontend
   npm run dev
   ```
   Frontend runs on http://localhost:5176

4. **Open your browser** and navigate to http://localhost:5176

## 📁 Project Structure

```
career-prediction-app/
├── backend/
│   ├── controllers/     # Route handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Authentication middleware
│   ├── utils/          # Utility functions
│   └── db/            # Database connection
├── Frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   └── constants/  # Constants and config
│   └── public/        # Static assets
└── README.md
```

## 🔧 API Endpoints

- `POST /api/v1/register` - User registration
- `POST /api/v1/login` - User login
- `POST /api/v1/recommend` - Get career recommendations (requires authentication)

## 🤝 Integration with Flask ML Server

This application integrates with a separate Flask-based machine learning server that handles the actual career prediction logic. The Flask server should be running and accessible at the URL specified in the `FLASK_ML_URL` environment variable.

The backend communicates with the Flask server via HTTP requests to get career predictions based on user input.

## 🐛 Troubleshooting

1. **CORS Issues**: Ensure the Flask server has CORS enabled if running on different ports
2. **Database Connection**: Verify MongoDB connection string in environment variables
3. **Flask Server**: Make sure the Flask ML server is running before making predictions
4. **Environment Variables**: All required environment variables must be set

## 📝 License

This project is licensed under the ISC License.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions about this application, please check the documentation or create an issue in the repository.

---

**Note**: This application requires the Flask ML server from the other repository to be running for career prediction functionality to work properly.
