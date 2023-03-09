"use strict";
/**
 * Creacion del actuador para obtener todos los dispositivos
 * @author ernesto
 */
Object.defineProperty(exports, "__esModule", { value: true });
const getDevices = (DeviceRepository) => () => {
    return DeviceRepository.getDevices();
};
exports.default = getDevices;
