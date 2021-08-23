"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var users_1 = __importDefault(require("../controllers/users"));
router.get('/users', users_1.default.getAllUsers);
router.get('/users/create', users_1.default.create);
exports.default = router;
