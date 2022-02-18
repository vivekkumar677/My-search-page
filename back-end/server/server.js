const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const result = require('./server');
const router=express.Router();
app.use(bodyParser.json());
router.get('/results',  async (req,res) => {
    try{
        const data =await result.find();
        res.json(data);

    }
    catch(e){
        console.log(e)

    }
     })
router.post('/results', async function(req,res){
    try{
        // console.log(req.body)
        const data = await result.insertMany(req.body);
        res.json(data);



            
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