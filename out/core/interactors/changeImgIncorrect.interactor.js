"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeImgIncorrectInteractor = (deviceRepository) => (deviceId, img) => {
    return deviceRepository.changeImgIncorrect(deviceId, img);
};
exports.default = changeImgIncorrectInteractor;
