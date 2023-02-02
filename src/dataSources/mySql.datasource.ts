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

    addDevice(id: string, password: string): boolean {
        connection.query(`INSERT INTO device (id, psswd) VALUES ('${id}', '${password}')`, function (error, results, fields) {
            if (error) {
                throw error;
                return false;
            }
        });
        return true;
    }

    changeImgCorrect(id: string, img: Blob): boolean {
        return false;
    }

    changeImgIncorrect(id: string, img: Blob): boolean {
        return false;
    }

    changeImgWait(id: string, img: Blob): boolean {
        return false;
    }

    deleteDevice(id: string): boolean {
        connection.query(`DELETE FROM device WHERE id='${id}'`, function (error, results, fields) {
            if (error){
                throw error;
                return false;
            }
        });
        return true;
    }

     getDevice(id: string): Promise<Device> {
        return new Promise<Device>((resolve,reject)=>{
            connection.query(`SELECT * FROM device WHERE id='${id}'`, function (error, results) {
                if (error){
                    reject(error);
                }
                resolve({
                    id:results[0].id,
                    password:results[0].psswd,
                    token:results[0].token,
                    imgAbierto:results[0].imgAbierto,
                    imgCerrado:results[0].imgCerrado,
                    imgEspera:results[0].imgenEnEspera
                });
            });
        });
    }

    updateDevice(id: string, passwordAnt: string, passwordNew: string): boolean {
        connection.query(`UPDATE device SET psswd='${passwordNew}' WHERE id='${id}' AND psswd='${passwordAnt}'`, function (error, results, fields) {
            if (error){
                throw error;
            }
        });
        return true;
    }



}

