"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usuario',
    database: 'devices'
});
connection.connect();
class DeviceSql {
    /**
     * Metodo para obtener todos los dispositivos
     * @returns devices
     */
    getDevices() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM device`, function (error, results) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                let devices = [];
                results.forEach((device) => {
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
    addDevice(id, nombre, tipo, uid, imgAbierto, imgCerrado, imgEspera) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO device VALUES (?,?,?,?,?,?,?);', [id, nombre, tipo, uid, imgAbierto, imgCerrado, imgEspera], function (error) {
                if (error != undefined) {
                    reject();
                }
                else {
                    resolve(true);
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
    changeImgCorrect(id, img) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                connection.query("UPDATE device SET imgAbierto=" + img + " WHERE id='" + id + "';", function (error) {
                    if (error) {
                        reject(false);
                        console.log(error);
                    }
                    else {
                        resolve(true);
                    }
                });
            });
        });
    }
    /**
     * Metodo para cambiar la imagen del dispositivo
     * @param id Id del dispositivo
     * @param img img a cambiar del dispositivo
     * @returns
     */
    changeImgIncorrect(id, img) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE device SET imgCerrado=" + img + " WHERE id='" + id + "';", function (error) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                else {
                    resolve(true);
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
    changeImgWait(id, img) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE device SET imgEnEspera=" + img + " WHERE id='" + id + "';", function (error) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    /**
     * Metodo para eliminar un dispositivo
     * @param id Id del dispositivo
     * @returns
     */
    deleteDevice(id) {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM device WHERE id='${id}'`, function (error, results) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    /**
     * Metodo para obtener un dispositivo
     * @param id Id del dispositivo
     * @returns
     */
    getDevice(id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM device WHERE id='${id}'`, function (error, results) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                resolve({
                    id: results[0].id,
                    nombre: results[0].nombre,
                    tipo: results[0].tipo,
                    uid: results[0].uid,
                    imgAbierto: results[0].imgAbierto,
                    imgCerrado: results[0].imgCerrado,
                    imgEspera: results[0].imgEnEspera
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
    updateDevice(id, uidNew) {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE device SET uid='${uidNew}' WHERE id='${id}'`, function (error, results) {
                if (error) {
                    reject(false);
                    console.log(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
}
exports.default = DeviceSql;
