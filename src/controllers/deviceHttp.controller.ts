/**
 * Clase utilizada para obtener los datos desde json para pasarlos como parametros de los metodos
 * y enviar una respuesta de estado a las peticiones
 * @author ernesto
 */
import {addDevice, changeImgC, changeImgI, changeImgW, deleteDevice, getDevice, updateDevice, getDevices} from "../core/interactors/interactors";
import { Request, Response} from "express";

export const addDeviceHttp=(request: Request, response: Response)=>{
    const { body }=request;
    const { device } =body;
    const result=addDevice(device.id, device.nombre, device.tipo, device.uid, device.imgAbierto, device.imgCerrado, device.imgEspera);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}

export const getDeviceHttp=(request:Request, response:Response)=>{
    const id=request.params['id'];
    const result=getDevice(id);

    result.then((resp)=>response.json(resp)).catch(()=>response.status(500).send());
}

export const deleteDeviceHttp=(request: Request, response:Response)=>{
    const id=request.params['id'];
    const result=deleteDevice(id);
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
    const result=changeImgC(device.id, device.data);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}

export const changeImgIncorrectHttp=(request: Request, response: Response)=>{
    const { body }=request;
    const { device }=body;
    const result=changeImgI(device.id, device.data);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send());
}

export const changeImgWaitHttp=(request:Request, response:Response)=>{
    const { body }=request;
    const { device }=body;
    const result=changeImgW(device.id, device.data);
    result.then(()=>response.status(200).send()).catch(()=>response.status(500).send())
}

export const getDevicesHttp=(_request:Request, response:Response)=>{
    const result=getDevices();
    result.then((resp)=>response.json(resp)).catch(()=>response.status(500).send());
}