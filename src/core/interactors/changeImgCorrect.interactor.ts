/**
 * Creacion del actuador de cambiar la imagen
 * @author ernesto
 */
import DeviceRepository from "../repositories/deviceRepository";

const changeImgCorrectInteractor = (deviceRepository: DeviceRepository)=> (deviceId: string, img:Blob):Promise<boolean> => {
    return deviceRepository.changeImgCorrect(deviceId, img)
}
export default changeImgCorrectInteractor