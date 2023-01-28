const {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require('../services/user.service')

const handleCreateUser = async (req, res) => {
    try{
        const user = await createUser(req.body)
        return res.json(user)
    } catch (err){
        return res.status(400).json(err)
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
    handleCreateUser,
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
}