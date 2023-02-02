import express from 'express';
//hay que añadir la res la req y la funcionalidad
const route=express.Router();

route.get('/getdevice');

route.get('/getdevices');

route.put('/changeImgCon');

route.put('/changeImgDiscon');

route.put('/changeImgWait');

route.post('/addDevice');

route.delete('/deldevice');



export default route;