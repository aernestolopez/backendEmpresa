import DeviceRepository from "../repositories/deviceRepository";

const updateDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string):boolean => {
    return deviceRepository.updateDevice(deviceId)
}
export default updateDeviceInteractor