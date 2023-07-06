// import multer                   //is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.  -- in this case image  
const multer = require('multer')

// using multer define storage
const storage = multer.diskStorage({    //to store data
    destination:(req,file,callback)=>{
        callback(null,'./uploads')  //folder to store
    },
    filename:(req,file,callback)=>{  //set filename
        const filename = `images-${Date.now()}-${file.originalname}`
        callback(null,filename)  //given in callback - to parallelly process this 
    }
})

// filtering uploading filles
const fileFilter = (req,file,callback)=>{
    if((file.mimetype==='image/png') || (file.mimetype==='image/jpeg') || (file.mimetype==='image/jpg')){
            callback(null,true)
    } 
    else{
        callback(null,false)
        //error
        return callback(new Error("only .jpg , .jpeg , .png files are allowed !"));
    }
}

// define upload
const upload = multer({
    storage,
    fileFilter
})

// export upload
module.exports = upload
