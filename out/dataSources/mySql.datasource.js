"use strict";
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
    changeImgCorrect(id, img) {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE device SET imgAbierto='${img}' WHERE id='${id}'`, function (error, results) {
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
    changeImgIncorrect(id, img) {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE device SET imgAbierto='${img}' WHERE id='${id}'`, function (error, results) {
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
    changeImgWait(id, img) {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE device SET imgAbierto='${img}' WHERE id='${id}'`, function (error, results) {
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
