/**
 * Archivo para la exportacion de los interactors
 * @author ernesto
 */
import addDeviceInteractor from "./addDevice.interactor";
import DeviceSql from "../../dataSources/mySql.datasource";
import changeImgCorrectInteractor from "./changeImgCorrect.interactor";
import changeImgIncorrectInteractor from "./changeImgIncorrect.interactor";
import changeImgWaitInteractor from "./changeImgWait.interactor";
import deleteDeviceInteractor from "./deleteDevice.interactor";
import updateDeviceInteractor from "./updateDevice.interactor";
import getDeviceInteractor from "./getDevice.interactor";
const deviceRepository=new DeviceSql();
export const addDevice=addDeviceInteractor(deviceRepository);
export const changeImgC=changeImgCorrectInteractor(deviceRepository);
export const changeImgI=changeImgIncorrectInteractor(deviceRepository);
export const changeImgW=changeImgWaitInteractor(deviceRepository);
export const deleteDevice=deleteDeviceInteractor(deviceRepository);
export const updateDevice=updateDeviceInteractor(deviceRepository);
export const getDevice=getDeviceInteractor(deviceRepository);