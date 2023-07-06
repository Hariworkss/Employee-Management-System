// import Model
const users = require('../model/userSchema')

// to define logic to resolve client requests



// resister
exports.register=async(req,res)=>{
     //get image file details
    console.log(req.file); 
    const filename = req.file.filename
    // get other user input fields from request body - using destructuring
    const {fname,lname,email,mobile,gender,status,location} = req.body
    if(!fname|!lname|!email|!mobile|!gender|!status|!location|!filename){
        res.status(404).json("All the fields are required")
    }
    else{
        try{
           // check if user is already regitered
           const preuser = await users.findOne({email})
           if(preuser){
            return res.status(401).json("user already registered")
           }
           else{
            // register user data                                             //assigning image-file to profile                       
            const newuser = new users({fname,lname,email,mobile,gender,status,profile:filename,location})
            // save to database
            await newuser.save()
            // response send back to the client
            return res.status(200).json(newuser)
           }
        }
        catch(error){
            res.status(404).json(error)
        }
    }

   res.send("register request recieved")
}

// get all employee information

exports.getEmployees = async (req,res)=>{
    try{
        const allEmployees = await users.find()  //get all employees
        res.status(200).json(allEmployees)
    }
    catch(error){
        res.status(401).json(error)
    }
}