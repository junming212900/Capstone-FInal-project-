// server/db.js
const mongoose = require('mongoose');

// Replace the URI string with your MongoDB connection string.
// If you're using a cloud provider like MongoDB Atlas, your string will look different and will include your username and password.
const MONGO_URI = 'mongodb://localhost:27017/yourdbname';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

// Connect to MongoDB
connectDB();

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection disconnected due to app termination');
        process.exit(0);
    });
});

module.exports = mongoose; // this export is not strictly necessary unless you need mongoose elsewhere
