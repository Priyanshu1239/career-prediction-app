import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error("Database connection error:", err);
});


