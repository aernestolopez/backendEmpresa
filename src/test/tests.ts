import supertest from "supertest"
import app from "../express/server/index"
import {img} from "./image.for.testing"
​
const serverTest = supertest(app)
​
describe("Pruebas para las rutas de la API REST", () => {
    describe("Peticiones POST (3)", () => {
        it("Inserción dispositivo 1", () => {
            serverTest.post("/addDevice").send({
                id: 'Tv_01',
                name: 'LG 43 pulgadas',
                type: 'Pantalla',
                imgOpened: img,
                imgClosed: img,
                imgWaiting: img
            }).expect(200);
        })
        it("Inserción dispositivo 2", async () => {
            serverTest.post("/addDevice").send({
                id: 'Tn_01',
                name: 'Torno 1',
                type: 'Torno',
                imgOpened: img,
                imgClosed: img,
                imgWaiting: img
            }).expect(200);
        })
        it("Inserción dispositivo 3", async () => {
            serverTest.post("/addDevice").send({
                id: 'Tn_02',
                name: 'Torno 2',
                type: 'Torno',
                imgOpened: img,
                imgClosed: img,
                imgWaiting: img
            }).expect(200);
        })
        describe("Peticiones GET (3)", () => {
            it("Obtención dispositivo 1", async () => {
                serverTest.get("/getDevice/Tv_01").expect("Content-Type", /json/)
            })
            it("Obtención dispositivo 2", async () => {
                serverTest.get("/getDevice/Tn_01").expect("Content-Type", /json/)
            })
            it("Obtención dispositivo 3", async () => {
                serverTest.get("/getDevice/Tn_02").expect("Content-Type", /json/)
            })
        })
        describe("Peticiones PUT (3)", () => {
            it("Cambiar imagen abierto", async () => {
                serverTest.put("/changeImgCon").send({
                    id: 'Tv_01',
                    data: img
                }).expect(200)
            })
            it("Cambiar imagen cerrado", async () => {
                serverTest.put("/changeImgDiscon").send({
                    id: 'Tv_01',
                    data: img
                }).expect(200)
            })
            it("Cambiar imagen en espera", async () => {
                serverTest.put("/changeImgWait").send({
                    id: 'Tv_01',
                    data: img
                }).expect(200)
            })
        })
        describe("Peticiones PUT II (3)", () => {
            it("Actualizar id de usuario 1", async () => {
                serverTest.put("/updateUid").send({
                    id: 'Tv_01',
                    newuid: 'administrador@smartchecker.es'
                }).expect(200)
            })
            it("Cambiar imagen cerrado", async () => {
                serverTest.put("/updateUid").send({
                    id: 'Tn_01',
                    newuid: 'administrador@smartchecker.es'
                }).expect(200)
            })
            it("Cambiar imagen en espera", async () => {
                serverTest.put("/updateUid").send({
                    id: 'Tn_02',
                    newuid: 'administrador@smartchecker.es'
                }).expect(200)
            })
        })
        describe("Peticiones GET II (1)", () => {
            it("Obtención de todos los dispositivos", async () => {
                serverTest.get("/getAllDevices").expect("Content-Type", /json/)
            })
        })
        describe("Peticiones DEL (3)", () => {
            it("Borrado dispositivo 1", async () => {
                serverTest.del("/delDevice/Tv_01").expect(200)
            })
            it("Borrado dispositivo 2", async () => {
                serverTest.del("/delDevice/Tn_01").expect(200)
            })
            it("Borrado dispositivo 3", async () => {
                serverTest.del("//delDevice/Tn_02").expect(200)
            })
        })
    })
})