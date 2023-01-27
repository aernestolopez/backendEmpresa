import Device from "../entities/device";

export default interface DeviceRepository {
    addDevice(id:string, password:string):boolean;
    deleteDevice(id:string):boolean;
    updateDevice(id:string):boolean
    getDevice(id:string):Device;
    changeImgCorrect(id:string, img:Blob):boolean;
    changeImgIncorrect(id:string, img:Blob):boolean;
    changeImgWait(id:string, img:Blob):boolean;
}