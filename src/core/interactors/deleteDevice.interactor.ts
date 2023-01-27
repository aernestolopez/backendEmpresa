import DeviceRepository from "../repositories/deviceRepository";

const deleteDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string):boolean => {
    return deviceRepository.deleteDevice(deviceId)
}
export default deleteDeviceInteractor