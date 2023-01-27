import Device from "../entities/device";
import DeviceRepository from "../repositories/deviceRepository";

const getDevice = (deviceRepository: DeviceRepository)=> (deviceId: string):Device => {
    return deviceRepository.getDevice(deviceId)
}
export default getDevice;