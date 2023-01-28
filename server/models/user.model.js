const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "User name must be at least 5 characters"],
            minlength: [5],
            createIndexes: { unique: true },
        }
    },
    {
        password: {
            type: String,
            required: [true, "Password must be at least 8 characters"],
            minlength: [8]
        }
    },
    { timestamps: true}
)

UserSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });
  
  UserSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
  };

const User = mongoose.model("User", UserSchema)

module.exports = { User }