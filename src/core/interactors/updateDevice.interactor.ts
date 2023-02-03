/**
 * Creacion del actuador de actualizar el dispositivo
 * @author ernesto
 */
import DeviceRepository from "../repositories/deviceRepository";
const updateDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string, uidNew:string):Promise<boolean> => {
    return deviceRepository.updateDevice(deviceId, uidNew)
}
export default updateDeviceInteractor