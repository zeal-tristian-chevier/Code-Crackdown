const {User} = require('../models/user.model')
const bcrypt = require('bcryptjs');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const list = require('badwords-list')

//CREATE
const registerUser = async (username, password) => {

     //validation
     
    const foundBadWords = list.array.filter(el => username.includes(el));
        if(foundBadWords.length > 0){
            throw Error('Bad Words are not allowed')
        }
        if(!username || !password){
            throw Error('All fields must be filled')
        }
        if(!validator.isLength(username, {min: 5, max: 20})){
            throw Error('Username must be at least 5 characters')
        }

        if(!validator.isStrongPassword(password)){
            throw Error('Password is not strong enough')
        }
        // check if this user already exist
        const existingUser = await User.findOne({ username: username })
        // if that user exist error out
        if(existingUser){
            throw Error('This Username already exist')
        }
        //hash password before doing anything with the user data
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({username, password: hashedPassword})
        return user
}
const loginUser = async (username, password) => {
    //check if returning user exist
    const existingUser = await User.findOne({
        username: username
    })
    if(existingUser == null){
        throw Error('The Username or Password is incorrect')
    }
    //check if passwords match
    let validPassword = await bcrypt.compare(password, existingUser.password)

    if(!validPassword){
        throw Error('The Username or Password is incorrect')
    }
    const token = jwt.sign({ username, id: existingUser._id, score: existingUser.score}, process.env.ACCESS_TOKEN_SECRET)
    return ({ status: 'ok', user: token})
}
//READ
const getAllUsers = async () => {
    //query db to find the top 5 users with the highest score
    const users = await User.find().sort({score:-1}).limit(5)
    return users
}
//READ
const getUserById = async (id) => {
    const user = await User.findById(id)
    return user
}
//UPDATE
const updateUserById = async (id, data) => {
    const user = await User.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    })
    return user
}
//DELETE
const deleteUserById = async (id) => {
    const user = await User.findByIdAndDelete(id)
    return user
}
module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}