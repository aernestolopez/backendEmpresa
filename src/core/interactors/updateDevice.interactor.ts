/**
 * Creacion del actuador de actualizar el dispositivo
 * @author ernesto
 */
import DeviceRepository from "../repositories/deviceRepository";
const updateDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: String, uidNew:String):Promise<boolean> => {
    return deviceRepository.updateDevice(deviceId, uidNew)
}
export default updateDeviceInteractor