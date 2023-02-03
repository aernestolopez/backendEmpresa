/**
 * Declaracion de las rutas para el servidor de la api rest con express
 * @author  ernesto
 */
import express from 'express';

//hay que añadir la res la req y la funcionalidad
const route=express.Router();

route.get('/getdevice',(_req, res)=>{
    res.send("AAAaaa")
    console.log("BBBB")
});

route.get('/getdevices',(_req, res)=>{
    res.send("BBBBbb")
});

route.put('/changeImgCon',(_req, res)=>{
    res.send("CCCCC")

});

route.put('/changeImgDiscon',(_req, res)=>{
    res.send("DDDddd")
});

route.put('/changeImgWait',(_req, res)=>{
    res.send("EEEeeee")
});

route.post('/addDevice',(_req, res)=> {
    res.send("FFFFFfff")
});

route.delete('/deldevice',(_req, res)=> {
    res.send("gggggGG")
});



export default route;