const path = require("path");
const express = require("express");
const app = express(); 
const cors=require("cors");

const mongoose = require("mongoose");
const student=require("./DB_models/info");

var multer = require('multer');
var fs = require('fs');

 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'student_images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var uploadmul = multer({ storage: storage });


const mongoDB = "mongodb+srv://Uday:Uday123$@cluster0.ogd06qh.mongodb.net/?retryWrites=true&w=majority";
try{
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log("Connection to mongodb success")    
})
}catch(e){
  console.log("could not connect");
}

// Get the default connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const port = 5000

const { response } = require("express");

const bodyParser = require('body-parser');
const { Console } = require("console");
const { json } = require("body-parser");

app.use(

  cors({
    origin:"http://localhost:3000"
  })
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.post('/put_db', uploadmul.single('image'),(req,res)=>{
  console.log("inserted")

    var obj = {
        image: {
            data: fs.readFileSync(path.join(__dirname + '/student_images/' + req.file.filename)),
            contentType: 'image/png'
        },
    rollno:req.body.rollno,
      name: req.body.name,
      age: req.body.age,
      dept:req.body.dept,
      college:req.body.college,
      maths:req.body.maths,
      physics:req.body.physics,
      chemistry:req.body.chemistry,
      average:(req.body.chemistry+req.body.maths,req.body.physics)/3
  }
  
  
  student.create(obj).then(()=>{
    res.redirect("http://localhost:3000/");
  });

});





app.post('/getByRoll', (req, res) => {

    // console.log(req.config)
    // console.log(req.body)
    // console.log(req.params)

    student.find({rollno:req.body.rollno}).then((data)=>{ res.send({ items: data });})
  });




  app.post('/getByCollege', (req, res) => {
    
    student.find({college:req.body.college}).then((data)=>{ res.send({ items: data });})
  });





  app.post('/getByDept', (req, res) => {
    //console.log(req.body)
    student.find({college:req.body.college , dept: req.body.dept}).then((data)=>{ res.send({ items: data });})
  });






app.listen(port, () => {
    console.log("server started on port 5000");
  });