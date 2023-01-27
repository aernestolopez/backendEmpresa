"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./express/server"));
const router_1 = __importDefault(require("./express/router/router"));
const PORT = 3333;
const server = server_1.default.init(PORT);
server.app.use(router_1.default);
server.start(() => console.log(`Server started in port ${PORT}`));
