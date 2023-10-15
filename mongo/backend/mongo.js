const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("mongodb collection login connected")

})
.catch(()=>{
    console.log('failed')
})

const newSchema= new mongoose.Schema({
   
    email:{
        type:String,
        require:true,
        unique:true,
        
        
    },
    password:{
        type:String,
        require:true
        
    },
    name:{
        type:String,
        require:true
        
    },
    date:{
        type:String,
        require:true
        
    }
    })

    const login = mongoose.model("login", newSchema)
    module.exports=login