import express from "express"
const app = express();

app.get('/hellp', (req,res)=>{
    res.send("hellp world")
})

