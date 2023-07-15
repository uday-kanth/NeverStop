 
var mongoose = require('mongoose');
 
var StudentSchema = new mongoose.Schema({
    image:
    {
        data: Buffer,
        contentType: String
    },
    rollno:{type:String,required:true,unique: true},
    name:{type:String,required:true},
    age:{type:Number, min: 15 },
    college:{type:String,required:true},
    dept:{type:String,required:true},
    maths:{type:Number,min:0,max:100},
    physics:{type:Number,min:0,max:100},
    chemistry:{type:Number,min:0,max:100}
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('StudentData', StudentSchema);