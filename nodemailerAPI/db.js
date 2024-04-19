 //const express= require('express');
 const mongoose= require('mongoose');

const connectToMongo= ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/contact', ()=>{
        console.log("mongoo connected");
    }) 
}

module.exports= connectToMongo;