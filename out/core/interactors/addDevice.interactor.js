"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addDeviceInteractor = (deviceRepository) => (deviceId, nombre, tipo, uid, imgAbierto, imgCerrado, imgEspera) => {
    return deviceRepository.addDevice(deviceId, nombre, tipo, uid, imgAbierto, imgCerrado, imgEspera);
};
exports.default = addDeviceInteractor;
