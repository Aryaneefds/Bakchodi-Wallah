import express from 'express';
const router = express.Router();


router.post('/user/signup', (req,res)=>{

    res.send("post recieved")
    
})

router.post('/user/signin',(req,res)=>{

})

router.get('/courses', (req,res)=>{

})

router.get('/user/purchases', (req,res)=>{

})

router.post('/user/purchase',(req,res)=>{
    
})


export default router;