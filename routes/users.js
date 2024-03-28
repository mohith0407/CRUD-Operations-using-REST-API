import express from 'express'

import { CreateUser,getUsers,getUser,deleteUser,updateUser } from '../controllers/userdb.js';
const router=express.Router();
// get all users
router.get('/',getUsers)
// create a user
router.post('/',CreateUser)
// single user id
router.get('/:id',getUser)
// delete user
router.delete('/:id',deleteUser)
// patch user (PUT is a method of modifying resource where the client sends data that updates the entire resource . PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.)
// update user
router.patch('/:id',updateUser)
export default router; 

// writing here is not a proper practice so we create funtions in controllers and export it here