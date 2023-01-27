import DeviceRepository from "../repositories/deviceRepository";

const changeImgWaitInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string, img:Blob):boolean => {
    return deviceRepository.changeImgWait(deviceId, img)
}
export default changeImgWaitInteractor