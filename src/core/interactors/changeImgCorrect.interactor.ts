import DeviceRepository from "../repositories/deviceRepository";

const changeImgCorrectInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string, img:Blob):boolean => {
    return deviceRepository.changeImgCorrect(deviceId, img)
}
export default changeImgCorrectInteractor