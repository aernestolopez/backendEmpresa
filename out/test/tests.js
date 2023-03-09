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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../express/server/index"));
const image_for_testing_1 = require("./image.for.testing");
const serverTest = (0, supertest_1.default)(index_1.default);
describe("Pruebas para las rutas de la API REST", () => {
    describe("Peticiones POST (3)", () => {
        it("Inserción dispositivo 1", () => {
            serverTest.post("/addDevice").send({
                id: 'Tv_01',
                name: 'LG 43 pulgadas',
                type: 'Pantalla',
                imgOpened: image_for_testing_1.img,
                imgClosed: image_for_testing_1.img,
                imgWaiting: image_for_testing_1.img
            }).expect(200);
        });
        it("Inserción dispositivo 2", () => __awaiter(void 0, void 0, void 0, function* () {
            serverTest.post("/addDevice").send({
                id: 'Tn_01',
                name: 'Torno 1',
                type: 'Torno',
                imgOpened: image_for_testing_1.img,
                imgClosed: image_for_testing_1.img,
                imgWaiting: image_for_testing_1.img
            }).expect(200);
        }));
        it("Inserción dispositivo 3", () => __awaiter(void 0, void 0, void 0, function* () {
            serverTest.post("/addDevice").send({
                id: 'Tn_02',
                name: 'Torno 2',
                type: 'Torno',
                imgOpened: image_for_testing_1.img,
                imgClosed: image_for_testing_1.img,
                imgWaiting: image_for_testing_1.img
            }).expect(200);
        }));
        describe("Peticiones GET (3)", () => {
            it("Obtención dispositivo 1", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.get("/getDevice/Tv_01").expect("Content-Type", /json/);
            }));
            it("Obtención dispositivo 2", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.get("/getDevice/Tn_01").expect("Content-Type", /json/);
            }));
            it("Obtención dispositivo 3", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.get("/getDevice/Tn_02").expect("Content-Type", /json/);
            }));
        });
        describe("Peticiones PUT (3)", () => {
            it("Cambiar imagen abierto", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.put("/changeImgCon").send({
                    id: 'Tv_01',
                    data: image_for_testing_1.img
                }).expect(200);
            }));
            it("Cambiar imagen cerrado", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.put("/changeImgDiscon").send({
                    id: 'Tv_01',
                    data: image_for_testing_1.img
                }).expect(200);
            }));
            it("Cambiar imagen en espera", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.put("/changeImgWait").send({
                    id: 'Tv_01',
                    data: image_for_testing_1.img
                }).expect(200);
            }));
        });
        describe("Peticiones PUT II (3)", () => {
            it("Actualizar id de usuario 1", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.put("/updateUid").send({
                    id: 'Tv_01',
                    newuid: 'administrador@smartchecker.es'
                }).expect(200);
            }));
            it("Cambiar imagen cerrado", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.put("/updateUid").send({
                    id: 'Tn_01',
                    newuid: 'administrador@smartchecker.es'
                }).expect(200);
            }));
            it("Cambiar imagen en espera", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.put("/updateUid").send({
                    id: 'Tn_02',
                    newuid: 'administrador@smartchecker.es'
                }).expect(200);
            }));
        });
        describe("Peticiones GET II (1)", () => {
            it("Obtención de todos los dispositivos", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.get("/getAllDevices").expect("Content-Type", /json/);
            }));
        });
        describe("Peticiones DEL (3)", () => {
            it("Borrado dispositivo 1", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.del("/delDevice/Tv_01").expect(200);
            }));
            it("Borrado dispositivo 2", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.del("/delDevice/Tn_01").expect(200);
            }));
            it("Borrado dispositivo 3", () => __awaiter(void 0, void 0, void 0, function* () {
                serverTest.del("//delDevice/Tn_02").expect(200);
            }));
        });
    });
});
