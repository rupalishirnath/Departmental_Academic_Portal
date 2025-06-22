const mongoose = require('mongoose');
require('dotenv').config(); // Make sure this line is at the top

const mongoURI = process.env.MONGO_URI; // ✅ Use the environment variable

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectToMongo;
