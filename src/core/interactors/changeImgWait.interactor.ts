/**
 * Creacion del actuador de cambiar la imagen
 * @author ernesto
 */
import DeviceRepository from "../repositories/deviceRepository";

const changeImgWaitInteractor = (deviceRepository: DeviceRepository)=> (deviceId: String, img:String):Promise<boolean> => {
    return deviceRepository.changeImgWait(deviceId, img)
}
export default changeImgWaitInteractor