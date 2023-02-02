import express from 'express';
import routeD from "../routes/route"
const app=express()
app.use(express.json())
const PORT = 1289
app.get('/ping', (_req, res)=>{
    console.log("pingueao" + new Date().toLocaleDateString())
    res.send("pong")
})
app.use('/', routeD)
app.listen(PORT, ()=>
    console.log(`Corriendo en ${PORT}`))