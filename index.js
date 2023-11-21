require('dotenv').config();

const cors=require('cors');
const express=require('express');
const mongoose=require('mongoose');
const mongostr='mongodb://127.0.0.1:27017/DataSchema'; 

mongoose.connect(mongostr);

const db=mongoose.connection;

db.on('error',(error)=>{
    console.log(error)
})

db.once('connected',()=>{
    console.log('Database Connected Successfully')
})

const app=express();
app.use(cors());
app.use(express.json());

const routes=require('./routes/route');
app.use('/api',routes);


app.listen(9000,()=>{
    console.log('Server Started on port number ${9000}')
})

