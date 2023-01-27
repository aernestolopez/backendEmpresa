"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var PORT = 3000;
app.get('/', function (_req, res) {
    console.log("sisi");
    res.send("nono");
});
app.listen(PORT, function () {
    console.log("Server running on ".concat(PORT));
});
