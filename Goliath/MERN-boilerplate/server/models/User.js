const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: string,
    default: ""
  },
  lastName: {
    type: string,
    default: ""
  },
  UserName: {
    type: string,
    default: ""
  },
  email: {
    type: string,
    default: ""
  },
  password: {
    type: string,
    default: ""
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', UserSchema);
