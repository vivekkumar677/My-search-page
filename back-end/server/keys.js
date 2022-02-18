const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const keys = require('../models/keys');
const router=express.Router();
app.use(bodyParser.json());
router.get('/', (req,res) => {
    res.send("Hello")
     })
router.post('/', async function(req,res){
    try{
        const {path} = req.body;
        console.log(path);
            
    } catch(e){
        res.json({
            status:'failed',
            message: e.message
        });
    } 
    router.post('/post', async function(req,res){
        try{
            const {path} = req.body;
            // const hash=await bcrypt.hash(password,10);
            await User.create({path});
            res.json({
                status:'success',
                message:'sign up success'
            });
        } catch(e){
            res.json({
                status:'failed',
                message: e.message
            });
        }
    });   
})

module.exports = router;