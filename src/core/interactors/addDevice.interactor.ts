/**
 * Creacion del actuador de añadir dispositivo
 * @author ernesto
 */
import DeviceRepository from "../repositories/deviceRepository";
const addDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: String, nombre:String, tipo:String, uid:String, imgAbierto:String, imgCerrado:String, imgEspera:String):Promise<boolean> => {
    return deviceRepository.addDevice(deviceId, nombre, tipo, uid, imgAbierto, imgCerrado, imgEspera)
}
export default addDeviceInteractor