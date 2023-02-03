/**
 * Creacion del actuador de añadir dispositivo
 * @author ernesto
 */
import DeviceRepository from "../repositories/deviceRepository";
const addDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string, nombre:string, tipo:string, imgAbierto:Blob, imgCerrado:Blob, imgEspera:Blob):Promise<boolean> => {
    return deviceRepository.addDevice(deviceId, nombre, tipo, imgAbierto, imgCerrado, imgEspera)
}
export default addDeviceInteractor