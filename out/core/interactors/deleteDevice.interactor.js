"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deleteDeviceInteractor = (deviceRepository) => (deviceId) => {
    return deviceRepository.deleteDevice(deviceId);
};
exports.default = deleteDeviceInteractor;
