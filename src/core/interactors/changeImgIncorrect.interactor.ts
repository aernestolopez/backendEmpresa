/**
 * Creacion del actuador de cambiar la imagen
 * @author ernesto
 */
import DeviceRepository from "../repositories/deviceRepository";

const changeImgIncorrectInteractor = (deviceRepository: DeviceRepository)=> (deviceId: String, img:String):Promise<boolean> => {
    return deviceRepository.changeImgIncorrect(deviceId, img)
}
export default changeImgIncorrectInteractor