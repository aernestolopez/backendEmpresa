import Server from "./express/server";
import router from "./express/router/router";
const server = Server.init(1212);
server.app.use(router)
server.start(()=>console.log("Server started"));