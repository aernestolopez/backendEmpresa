"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateDeviceInteractor = (deviceRepository) => (deviceId, uidNew) => {
    return deviceRepository.updateDevice(deviceId, uidNew);
};
exports.default = updateDeviceInteractor;
