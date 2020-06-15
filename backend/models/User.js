const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  isTutor: Boolean,
  username: { type: String, unique: true },
  usernameLower: { type: String, unique: true, lowercase: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  description: { type: String }
});

// Encrypt on save
userSchema.pre('save', (next) => {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { next(err); }

    bcrypt.hash(user.password, salt, null, (err2, hash) => {
      if (err2) { next(err2); }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.encrypt = async function () {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return reject(err);
      }

      return bcrypt.hash(user.password, salt, null, (err2, hash) => {
        if (err2) {
          return reject(err2);
        }

        user.password = hash;

        return resolve(true);
      });
    });
  });
};

userSchema.methods.comparePassword = function compare(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }

    return callback(null, isMatch);
  });
};

const User = mongoose.model('user', userSchema);

module.exports = User;
