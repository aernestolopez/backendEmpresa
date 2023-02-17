/**
 * Creacion del actuador para obtener un dispositivo
 * @author ernesto
 */
import Device from "../entities/device";
import DeviceRepository from "../repositories/deviceRepository";

const getDevice = (deviceRepository: DeviceRepository)=> (deviceId: String):Promise<Device> => {
    return deviceRepository.getDevice(deviceId)
}
export default getDevice;