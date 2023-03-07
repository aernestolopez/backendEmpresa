/**
 * Declaracion de las rutas para el servidor de la api rest con express
 * @author  ernesto
 */
import express from 'express';
import {
    getDeviceHttp,
    addDeviceHttp,
    deleteDeviceHttp,
    updateDeviceHttp, changeImgCorrectHtttp, changeImgIncorrectHttp, changeImgWaitHttp, getDevicesHttp
} from "../../controllers/deviceHttp.controller";

//hay que añadir la res la req y la funcionalidad
const route=express.Router();

route.get('/getDevice/:id', getDeviceHttp);
route.post('/addDevice',addDeviceHttp);
route.delete('/delDevice/:id', deleteDeviceHttp);
route.put('/updateDevice', updateDeviceHttp);
route.put('/changeImgCon', changeImgCorrectHtttp);
route.put('/changeImgDiscon', changeImgIncorrectHttp);
route.put('/changeImgWait', changeImgWaitHttp);
route.get('/getDevices', getDevicesHttp);

export default route;