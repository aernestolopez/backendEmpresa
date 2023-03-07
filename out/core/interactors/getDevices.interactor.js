"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDevices = (DeviceRepository) => () => {
    return DeviceRepository.getDevices();
};
exports.default = getDevices;
