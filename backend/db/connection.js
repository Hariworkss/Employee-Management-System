// import mongoose
const mongoose = require('mongoose');

// Create a connection string to connect db using mongoose 
const connectionString = process.env.DATABASE
//connection code 
mongoose.connect((connectionString),{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=>{
    console.log('MongoDb atlas connected successfully');
}).catch((error)=>{
    console.log('MongoDb atlas connection failed '+error);
})