"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevicesHttp = exports.changeImgWaitHttp = exports.changeImgIncorrectHttp = exports.changeImgCorrectHtttp = exports.updateDeviceHttp = exports.deleteDeviceHttp = exports.getDeviceHttp = exports.addDeviceHttp = void 0;
/**
 * Clase utilizada para obtener los datos desde json para pasarlos como parametros de los metodos
 * y enviar una respuesta de estado a las peticiones
 * @author ernesto
 */
const interactors_1 = require("../core/interactors/interactors");
const addDeviceHttp = (request, response) => {
    const { body } = request;
    const { device } = body;
    const result = (0, interactors_1.addDevice)(device.id, device.nombre, device.tipo, device.uid, device.imgAbierto, device.imgCerrado, device.imgEspera);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.addDeviceHttp = addDeviceHttp;
const getDeviceHttp = (request, response) => {
    const id = request.params['id'];
    const result = (0, interactors_1.getDevice)(id);
    result.then((resp) => response.json(resp)).catch(() => response.status(500).send());
};
exports.getDeviceHttp = getDeviceHttp;
const deleteDeviceHttp = (request, response) => {
    const id = request.params['id'];
    const result = (0, interactors_1.deleteDevice)(id);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.deleteDeviceHttp = deleteDeviceHttp;
const updateDeviceHttp = (request, response) => {
    const { body } = request;
    const { device } = body;
    const result = (0, interactors_1.updateDevice)(device.id, device.uid);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.updateDeviceHttp = updateDeviceHttp;
const changeImgCorrectHtttp = (request, response) => {
    const { body } = request;
    const { device } = body;
    const result = (0, interactors_1.changeImgC)(device.id, device.data);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.changeImgCorrectHtttp = changeImgCorrectHtttp;
const changeImgIncorrectHttp = (request, response) => {
    const { body } = request;
    const { device } = body;
    const result = (0, interactors_1.changeImgI)(device.id, device.data);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.changeImgIncorrectHttp = changeImgIncorrectHttp;
const changeImgWaitHttp = (request, response) => {
    const { body } = request;
    const { device } = body;
    const result = (0, interactors_1.changeImgW)(device.id, device.data);
    result.then(() => response.status(200).send()).catch(() => response.status(500).send());
};
exports.changeImgWaitHttp = changeImgWaitHttp;
const getDevicesHttp = (_request, response) => {
    const result = (0, interactors_1.getDevices)();
    result.then((resp) => response.json(resp)).catch(() => response.status(500).send());
};
exports.getDevicesHttp = getDevicesHttp;
