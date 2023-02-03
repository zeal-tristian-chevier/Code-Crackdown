const express = require('express')

const { 
    handleLoginUser,
    handleRegisterUser,
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
} = require('../controllers/user.controller')

const router = express.Router()

router.get('/', handleGetAllUsers)
router.post('/register', handleRegisterUser)
router.post("/login", handleLoginUser)


router.get('/:id', handleGetUserById)
router.delete('/:id/delete', handleDeleteUserById)
router.put('/:id/edit', handleUpdateUserById)

module.exports = {userRouter: router}