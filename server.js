const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');

const route=require('./route');
var app=express();

app.use(cors());

app.use(bodyparser.json());

app.use('/',route);

const PORT=2000;

// mongoose.connect('mongodb://localhost:27017/users',{
//     useMongoClient:true});

// mongoose.connection.on('connected',()=>{
//     console.log('mongodb connected');
// });

// mongoose.connection.on('error',(err)=>{
//     console.log(err);
// })


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true, useUnifiedTopology:true 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(PORT,()=>
{
    console.log("server stated at port",PORT);
})