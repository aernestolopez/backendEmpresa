import express from 'express';

const app=express()
app.use(express.json())
const PORT = 1289
app.get('/', (_req, res)=>{
    console.log("pingueao" + new Date().toLocaleDateString())
    res.send("pong")
})

app.listen(PORT, ()=>
    console.log(`Corriendo en ${PORT}`))