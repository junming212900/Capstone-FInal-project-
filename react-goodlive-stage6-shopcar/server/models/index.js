// server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true
    }
    // Add any additional user fields here
});

// Hash the password before saving it to the database
userSchema.pre('save', function(next) {
    let user = this;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // Generate a salt
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        // Hash the password using the new salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            // Override the plaintext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// Method to compare a given password with the database hash
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', userSchema);

module.exports = {User};
