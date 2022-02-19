const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://admin:pzJHERiOr02lfDBc@cluster0.98wma.mongodb.net/rohitcars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose