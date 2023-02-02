import DeviceRepository from "../repositories/deviceRepository";

const updateDeviceInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string, passwordAnt:string, passwordNew:string):boolean => {
    return deviceRepository.updateDevice(deviceId, passwordAnt, passwordNew)
}
export default updateDeviceInteractor