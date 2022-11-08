const express = require('express')
const app = express()
const mongoose=require("mongoose")
const cors=require("cors")
const Plant = require('./models/plant')
const Disease=require('./models/disease')

require ("dotenv").config();

const DATABASE_URL ='mongodb+srv://dharsur:dharsur@cluster0.j0epkts.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Connection open")
}).catch(err => {
    console.log("OOPS !! ERROR")
})

app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }));


app.use(cors())

app.get('/',(req,res)=>{
    res.send('edu learn website')
})

app.get('/plant',async(req,res)=>{
    try{
      const plants = await Plant.find()
      res.status(200).json(plants)  
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }   
})

app.post('/plant',async(req,res)=>{
    try {
        const plant = new Plant({...req.body})
        await plant.save()
        console.log(plant)
        res.status(200).send('Success')

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.delete('/plant/:id',async(req,res)=>{
    const {id}=req.params
    try {
        const plant= await Plant.findByIdAndDelete(id);
        // const plant = new Plant({...req.body})
        // await plant.save()
        console.log(plant)
        console.log(plant)
        res.status(200).send('Success')

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.get('/disease',async(req,res)=>{
    try {
        const diseases = await Disease.find()
        res.status(200).json(diseases)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


app.post('/disease',async(req,res)=>{
    console.log(req.body)
    try {
        const disease = new Disease({...req.body})
        await disease.save()
        res.status(200).send('success')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

app.listen(process.env.PORT || 8080,()=> console.log("server is running"))

//app.listen(8080,()=> console.log("server is running"))

