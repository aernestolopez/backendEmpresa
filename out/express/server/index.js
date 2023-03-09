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
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true, limit: '100000kb' }));
app.use(express_1.default.json({ limit: '100000kb' }));
app.use(route_1.default);
const PORT = 1289;
app.listen(PORT, () => console.log(`Corriendo en ${PORT}`));
