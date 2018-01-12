# nodejs-file-metadata-microservice

User story: I can submit a FormData object that includes a file upload.

User Story: When I submit something, I will receive the file size in bytes within the JSON response

Modules used: "express" to create server and "multer" to handle upload file

    const express=require('express')

    const app = express();
    const multer = require('multer')

    app.use(express.static('public'));

    app.post('/upload', multer({ dest: './uploads/'}).array('file', 12), function (req, res, next) {
      console.log(req.files)
      let returnArray=req.files.map(each => ('size: '+each.size));
      console.log(returnArray)
      res.json(returnArray)
    })

    let port = 1500||process.env.PORT
    app.listen(port,()=>{console.log('connected to port'+port)})
