"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creacion de las rutas para el servidor de la api rest con express
 * @author  ernesto
 */
const express_1 = __importDefault(require("express"));
const deviceHttp_controller_1 = require("../../controllers/deviceHttp.controller");
const route = express_1.default.Router();
//Creamos las rutas
route.get('/getDevice/:id', deviceHttp_controller_1.getDeviceHttp);
route.post('/addDevice', deviceHttp_controller_1.addDeviceHttp);
route.delete('/delDevice/:id', deviceHttp_controller_1.deleteDeviceHttp);
route.put('/updateDevice', deviceHttp_controller_1.updateDeviceHttp);
route.put('/changeImgCon', deviceHttp_controller_1.changeImgCorrectHtttp);
route.put('/changeImgDiscon', deviceHttp_controller_1.changeImgIncorrectHttp);
route.put('/changeImgWait', deviceHttp_controller_1.changeImgWaitHttp);
route.get('/getDevices', deviceHttp_controller_1.getDevicesHttp);
exports.default = route;
