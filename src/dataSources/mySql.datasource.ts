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

   public async changeImgCorrect(id: String, img: String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query("UPDATE device SET imgAbierto=" + img+" WHERE id='" +id+"';", function (error){
                console.log(img);
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }

    public changeImgIncorrect(id: String, img: String): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{
            connection.query("UPDATE device SET imgCerrado=" + img+" WHERE id='" +id+"';", function (error){
                console.log(img);
                if (error){
                    reject(false)
                    console.log(error)
                }else{
                    resolve(true)
                }
            });
        });
    }

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

