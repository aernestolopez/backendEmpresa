/**
 * Interfaz para la implementacion de los metodos
 * @author ernesto
 */
import Device from "../entities/device";

export default interface DeviceRepository {
    addDevice(id:String, nombre:String, tipo:String, uid:String, imgAbierto:String, imgCerrado:String, imgEspera:String):Promise<boolean>;
    deleteDevice(id:String):Promise<boolean>;
    updateDevice(id:String, uidNew:String):Promise<boolean>;
    getDevice(id:String):Promise<Device>;
    changeImgCorrect(id:String, img:String):Promise<boolean>;
    changeImgIncorrect(id:String, img:String):Promise<boolean>;
    changeImgWait(id:String, img:String):Promise<boolean>;
    getDevices():Promise<Array<Device>>
}