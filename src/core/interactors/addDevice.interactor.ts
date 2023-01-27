import DeviceRepository from "../repositories/deviceRepository";

const addDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string, password:string):boolean => {
    return deviceRepository.addDevice(deviceId, password)
}
export default addDeviceInteractor