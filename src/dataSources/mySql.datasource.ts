/**
 * Creacion de la conexion a la base de datos y desarrollo de los metodos
 * @author ernesto
 */
import DeviceRepository from "../core/repositories/deviceRepository";
import Device from "../core/entities/device";
import mysql=require('mysql')

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'usuario',
    database : 'devices'
});


connection.connect();

export default class DeviceSql implements DeviceRepository{
    /**
     * Metodo para obtener todos los dispositivos
     * @returns devices
     */
    getDevices(): Promise<Device[]> {
        return new Promise<Device[]>((resolve,reject)=>{
            connection.query(`SELECT * FROM device`, function(error: any, results){
                if(error){
                    reject(false);
                    console.log(error)
                }
                let devices:Device[]=[];
                results.forEach((device:any)=>{
                    devices.push({
                        id: device.id,
                        nombre: device.nombre,
                        tipo: device.tipo,
                        uid: device.uid,
                        imgAbierto: device.imgAbierto,
                        imgCerrado: device.imgCerrado,
                        imgEspera: device.imgEspera
                    });
                });
                resolve(devices);
                
            });
        });
    }

    /**
     * Metodo para añadir un dispositivo
     * @param id Id del dispositivo
     * @param nombre nombre del dispositivo
     * @param tipo tipo del dispositivo
     * @param uid uid del dispositivo
     * @param imgAbierto ImgAbierto del dispositivo
     * @param imgCerrado ImgCerrado del dispositivo
     * @param imgEspera ImgEspera del dispositivo
     * @returns 
     */
    public addDevice(id: String, nombre: String, tipo:String, uid:String, imgAbierto:String, imgCerrado:String, imgEspera:String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query('INSERT INTO device VALUES (?,?,?,?,?,?,?);',[id, nombre, tipo, uid, imgAbierto, imgCerrado, imgEspera], function (error){
                if(error!=undefined){
                    reject();
                }else{
                    resolve(true)
                }
            });
        });
    }

    /**
     * Metodo para cambiar la imagen del dispositivo
     * @param id Id del dispositivo
     * @param img img a cambiar del dispositivo
     * @returns 
     */
   public async changeImgCorrect(id: String, img: String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query("UPDATE device SET imgAbierto=" + img+" WHERE id='" +id+"';", function (error){
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }

    /**
     * Metodo para cambiar la imagen del dispositivo
     * @param id Id del dispositivo
     * @param img img a cambiar del dispositivo
     * @returns 
     */
    public changeImgIncorrect(id: String, img: String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query("UPDATE device SET imgCerrado=" + img+" WHERE id='" +id+"';", function (error){
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }
    /**
     * Metodo para cambiar la imagen del dispositivo
     * @param id Id del dispositivo
     * @param img img a cambiar del dispositivo
     * @returns 
     */
   public changeImgWait(id: String, img: String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query("UPDATE device SET imgEnEspera=" + img+" WHERE id='" +id+"';", function (error){
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }
    /**
     * Metodo para eliminar un dispositivo
     * @param id Id del dispositivo
     * @returns 
     */
    public deleteDevice(id: String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query(`DELETE FROM device WHERE id='${id}'`, function (error,results){
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }
    /**
     * Metodo para obtener un dispositivo
     * @param id Id del dispositivo
     * @returns 
     */
    public getDevice(id: String): Promise<Device> {
        return new Promise<Device>((resolve,reject)=>{
            connection.query(`SELECT * FROM device WHERE id='${id}'`, function (error, results) {
                if (error){
                    reject(false);
                    console.log(error)
                }
                resolve({
                    id:results[0].id,
                    nombre:results[0].nombre,
                    tipo:results[0].tipo,
                    uid:results[0].uid,
                    imgAbierto:results[0].imgAbierto,
                    imgCerrado:results[0].imgCerrado,
                    imgEspera:results[0].imgEnEspera
                });
            });
        });
    }

    /**
     * Metodo para cambiar la uid del dispositivo
     * @param id Id del dispositivo
     * @param uidNew Nueva uid
     * @returns 
     */
    public updateDevice(id: String, uidNew:String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query(`UPDATE device SET uid='${uidNew}' WHERE id='${id}'`, function(error,results){
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }

}

