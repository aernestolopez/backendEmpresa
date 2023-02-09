"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevice = exports.updateDevice = exports.deleteDevice = exports.changeImgW = exports.changeImgI = exports.changeImgC = exports.addDevice = void 0;
/**
 * Archivo para la exportacion de los interactors
 * @author ernesto
 */
const addDevice_interactor_1 = __importDefault(require("./addDevice.interactor"));
const mySql_datasource_1 = __importDefault(require("../../dataSources/mySql.datasource"));
const changeImgCorrect_interactor_1 = __importDefault(require("./changeImgCorrect.interactor"));
const changeImgIncorrect_interactor_1 = __importDefault(require("./changeImgIncorrect.interactor"));
const changeImgWait_interactor_1 = __importDefault(require("./changeImgWait.interactor"));
const deleteDevice_interactor_1 = __importDefault(require("./deleteDevice.interactor"));
const updateDevice_interactor_1 = __importDefault(require("./updateDevice.interactor"));
const getDevice_interactor_1 = __importDefault(require("./getDevice.interactor"));
const deviceRepository = new mySql_datasource_1.default();
exports.addDevice = (0, addDevice_interactor_1.default)(deviceRepository);
exports.changeImgC = (0, changeImgCorrect_interactor_1.default)(deviceRepository);
exports.changeImgI = (0, changeImgIncorrect_interactor_1.default)(deviceRepository);
exports.changeImgW = (0, changeImgWait_interactor_1.default)(deviceRepository);
exports.deleteDevice = (0, deleteDevice_interactor_1.default)(deviceRepository);
exports.updateDevice = (0, updateDevice_interactor_1.default)(deviceRepository);
exports.getDevice = (0, getDevice_interactor_1.default)(deviceRepository);
