"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creacion del servidor para la api rest
 * @author ernesto
 */
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("../routes/route"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true, limit: '100000kb' }));
app.use(express_1.default.json({ limit: '100000kb' }));
app.use(route_1.default);
const PORT = 1289;
exports.default = app;
/*app.listen(PORT, ()=>
    console.log(`Corriendo en ${PORT}`));*/
https_1.default
    .createServer({
    key: fs_1.default.readFileSync("src/cert/key.pem"),
    cert: fs_1.default.readFileSync("src/cert/cert.pem"),
}, app)
    .listen(PORT, () => {
    console.log("serever is runing at port 4000");
});
