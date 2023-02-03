const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Full name must have at least 3 characters"],
            minlength: [3]
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8],
        },
        score: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true}
)

const User = mongoose.model("User", UserSchema)

module.exports = { User }