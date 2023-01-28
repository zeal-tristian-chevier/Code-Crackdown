const express = require('express')

const { 
    handleCreateUser,
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
} = require('../controllers/user.controller')

const router = express.Router()

router.get('/', handleGetAllUsers)
router.post('/create', handleCreateUser)


router.get('/:id', handleGetUserById)
router.delete('/:id/delete', handleDeleteUserById)
router.put('/:id/edit', handleUpdateUserById)

module.exports = {userRouter: router}