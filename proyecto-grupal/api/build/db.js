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
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const { DB_NAME, DB_PASSWORD, DB_USERNAME, DB_CLUSTERNAME } = process.env;
// Database Connection
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield mongoose_1.default.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTERNAME}.z5mrv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
            console.log('database is connected to', db.connection.db.databaseName);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.default = connectDB;
