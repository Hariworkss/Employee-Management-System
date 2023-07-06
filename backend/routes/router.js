// import express
const express = require('express')

// import userController
const userController = require('../controller/userController')

// import multer
const upload = require('../multerConfig/storageConfig')

// create router for express
const router = new express.Router();

// define routes for each http request
router.post('/employee/register',upload.single('user_profile'),userController.register)

// define routes for getting all employees
router.get('/employee/getEmployees',userController.getEmployees)

module.exports = router;


