/**
 * Interfaz para la implementacion de los metodos
 * @author ernesto
 */
import Device from "../entities/device";

export default interface DeviceRepository {
    addDevice(id:string, nombre:string, tipo:string, imgAbierto:Blob, imgCerrado:Blob, imgEspera:Blob):Promise<boolean>;
    deleteDevice(id:string):Promise<boolean>;
    updateDevice(id:string, uidNew:string):Promise<boolean>;
    getDevice(id:string):Promise<Device>;
    changeImgCorrect(id:string, img:Blob):Promise<boolean>;
    changeImgIncorrect(id:string, img:Blob):Promise<boolean>;
    changeImgWait(id:string, img:Blob):Promise<boolean>;
}