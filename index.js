const express=require('express')
const multer = require('multer')

const app = express();
app.use(express.static('public'));

app.post('/upload', multer({ dest: './uploads/'}).array('file', 12), function (req, res, next) {
	console.log(req.files)
	let returnArray=req.files.map(each => ('size: '+each.size));
	console.log(returnArray)
	res.json(returnArray)
})

let port = 1500||process.env.PORT
app.listen(port,()=>{console.log('connected to port'+port)})
