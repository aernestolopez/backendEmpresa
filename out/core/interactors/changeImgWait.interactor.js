"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeImgWaitInteractor = (deviceRepository) => (deviceId, img) => {
    return deviceRepository.changeImgWait(deviceId, img);
};
exports.default = changeImgWaitInteractor;
