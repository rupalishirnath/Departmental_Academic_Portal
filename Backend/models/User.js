const mongoose = require('mongoose'); // Import Mongoose
const { Schema } = mongoose; // Destructure Schema from Mongoose

// Define the User schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Export the User model
const User = mongoose.model('User', UserSchema);
User.createIndexes()
module.exports = User;
