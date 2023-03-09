/**
 * Creacion del actuador para obtener todos los dispositivos
 * @author ernesto
 */

import Device from "../entities/device";
import DeviceRepository from "../repositories/deviceRepository";

const getDevices=(DeviceRepository: DeviceRepository)=>():Promise<Device[]>=>{
    return DeviceRepository.getDevices();
}
export default getDevices;