import {addDevice, changeImgC, changeImgI, changeImgW, deleteDevice, getDevice, updateDevice} from "../core/interactors/interactors";
import { Request, Response} from "express";

export const addDeviceHttp=(request: Request, response: Response)=>{
    const { body }=request;
    const { device } =body;
    const result=addDevice(device.id, device.nombre, device.tipo, device.uid, device.imgAbierto, device.imgCerrado, device.imgEspera);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}

export const getDeviceHttp=(request:Request, response:Response)=>{
    const { body }=request;
    const { device }=body;
    const result=getDevice(device.id);
    result.then((resp)=>response.json(resp)).catch(()=>response.status(500).send());
}

export const deleteDeviceHttp=(request: Request, response:Response)=>{
    const { body }=request;
    const { device }=body;
    const result=deleteDevice(device.id);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send())
}

export const updateDeviceHttp=(request:Request, response:Response)=>{
    const { body }=request;
    const { device }=body;
    const result=updateDevice(device.id, device.uid)
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}

export const changeImgCorrectHtttp=(request: Request, response:Response)=>{
    const { body }=request;
    const { device }=body;
    const result=changeImgC(device.id, device.imgAbierto);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}

export const changeImgIncorrectHttp=(request: Request, response: Response)=>{
    const { body }=request;
    const { device }=body;
    const result=changeImgI(device.id, device.imgCerrado);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}

export const changeImgWaitHttp=(request:Request, response:Response)=>{
    const { body }=request;
    const { device }=body;
    const result=changeImgW(device.id, device.imgEspera);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send())
}