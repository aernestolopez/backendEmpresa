import DeviceRepository from "../repositories/deviceRepository";

const changeImgIncorrectInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string, img:Blob):boolean => {
    return deviceRepository.changeImgIncorrect(deviceId, img)
}
export default changeImgIncorrectInteractor