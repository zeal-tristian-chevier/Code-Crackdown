const {User} = require('../models/user.model')
//CREATE
const createUser = async (data) => {
    const user = await User.create(data)
    return user
}
//READ
const getAllUsers = async () => {
    const users = await User.find()
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
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}