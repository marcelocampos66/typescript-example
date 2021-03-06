"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./routes/router"));
var app = express_1.default();
app.use(cors_1.default());
app.use('/', router_1.default);
var PORT = 3001;
app.listen(PORT, function () {
    console.log("Online na porta: " + PORT);
});
