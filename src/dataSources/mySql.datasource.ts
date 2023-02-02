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
        connection.query('INSERT INTO DEVICES (id, pssw) VALUES (id, password)', function (error, results, fields) {
            if (error){
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
        connection.query('DELETE FROM device WHERE id=id', function (error, results, fields) {
            if (error){
                throw error;
                return false;
            }
        });
        return true;
    }

    getDevice(id: string): Device {
        connection.query('SELECT * FROM device WHERE id=id', function (error, results, fields) {
            if (error){
                throw error;
            }
        });
        return true;

        var device:Device = {
            id:"Tom",
            password:"Hanks",
            token:"",
            imgAbierto:null,
            imgCerrado:null,
            imgEspera:null
        };
        return device;
    }

    updateDevice(id: string): boolean {
        connection.query('UPDATE DEVICES (id, pssw) VALUES (id, password)', function (error, results, fields) {
            if (error){
                throw error;
                return false;
            }
        });
        return true;
    }

}

