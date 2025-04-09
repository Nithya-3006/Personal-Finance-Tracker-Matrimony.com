"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promise_1 = require("mysql2/promise");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
// Explicitly specify the path to .env
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../config/.env") });
var pool = (0, promise_1.createPool)({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
exports.default = pool;
