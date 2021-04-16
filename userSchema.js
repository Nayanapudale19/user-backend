var mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:String,
    water_intake:Number,
    calories:Number
});

const user=module.exports=mongoose.model('User',UserSchema);