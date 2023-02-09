"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeImgCorrectInteractor = (deviceRepository) => (deviceId, img) => {
    return deviceRepository.changeImgCorrect(deviceId, img);
};
exports.default = changeImgCorrectInteractor;
