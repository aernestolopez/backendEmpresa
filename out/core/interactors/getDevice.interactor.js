"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDevice = (deviceRepository) => (deviceId) => {
    return deviceRepository.getDevice(deviceId);
};
exports.default = getDevice;
