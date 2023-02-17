/**
 * Creacion del actuador de eliminar un dispositivo
 * @author ernesto
 */
import DeviceRepository from "../repositories/deviceRepository";

const deleteDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: String):Promise<boolean> => {
    return deviceRepository.deleteDevice(deviceId)
}
export default deleteDeviceInteractor