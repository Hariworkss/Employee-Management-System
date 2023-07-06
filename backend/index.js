// loads .env file content into process.env   -- given @ first to load and give conent in dotencv to proces.env file before the app runs
require('dotenv').config()  //config method - loads .env contents into process.env

// import express
const express = require('express');

// import cors
const  cors = require('cors');

// import db
require('./db/connection')

// import router
const router = require('./routes/router');

// create server application
const server = express();

// port defenition
const PORT = 3001 || process.env.PORT   // process.env.PORT - is given to dynamically load data in webapp   

// use cors
server.use(cors());

// to parse
server.use(express.json())

// user routes
server.use(router)

// define port and run server application
server.listen((PORT),()=>{
    console.log('Listening on port '+PORT);
})

//req resolving 
server.get('/',(req,res)=>{
    // console.log('get request')
    res.send('Get request')
})