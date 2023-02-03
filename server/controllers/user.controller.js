const { User } = require('../models/user.model')
require("dotenv").config();

const {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require('../services/user.service')

const handleRegisterUser = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await registerUser(username, password)
        return res.json(user)
    } catch (err){
        return res.status(err.status || 500).json({
            error: {
                message: err.message || "Oops! Something went wrong."
            }
        });
    }
}
const handleLoginUser = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await loginUser(username, password)
        return res.json(user)
     } catch (err){
        return res.status(err.status || 500).json({
            error: {
                message: err.message || "Oops! Something went wrong."
            }
        });
     }
}
    
const handleGetAllUsers = async (req, res) => {
    try{
        const user = await getAllUsers()
        return res.json(user)
    } catch (err){
        return res.status(400).json(err)
    }
}
const handleGetUserById = async (req, res) => {
    try{
        const user = await getUserById(req.params.id)
        return res.json(user)
    } catch (err){
        return res.status(400).json(err)
    }
}
const handleUpdateUserById = async (req, res) => {
    try{
        const user = await updateUserById(req.params.id, req.body)
        console.log(user)
        return res.json(user)
    } catch (err){
        return res.status(400).json(err)
    }
}
const handleDeleteUserById = async (req, res) => {
    try{
        const user = await deleteUserById(req.params.id)
        return res.json(user)
    } catch (err){
        return res.status(400).json(err)
    }
}
module.exports = {
    handleRegisterUser,
    handleLoginUser,
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
}