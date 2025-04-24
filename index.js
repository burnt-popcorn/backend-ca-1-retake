const express = require("express");
const PORT = 4444;
const app = express();
app.use(express.json());

app.post('/register',(req,res)=>{
    
    const {username, email, password, dob}= req.body
    if(!username){
        return res.json({message : "Username cannot be empty"});
    }
    else if(password.length<=8 || password.length>16){
        return res.json({message :"Password length should be greater than 8 or less than or equal 16"});
    }
    else if(!email){
        return res.json({message : "Email cannot be empty"});
    }
    else if(!dob){
        return res.json({message : "All fields are required"});
    }
    else if(!password){
        return res.json({message : "Password cannot be empty"})
    }

    // const data = [
    //     username = {username},
    //     email = {email},
    //     password = {password},
    //     dob = {dob}
    // ]
    
    return res.status(200).json(req.body)
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})