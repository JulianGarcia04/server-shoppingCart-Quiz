"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
class DataBases {
    db;
    MONGO_USER;
    MONGO_PASSWORD;
    constructor() {
        this.MONGO_USER = config_1.default.MONGO_USER;
        this.MONGO_PASSWORD = config_1.default.MONGO_PASSWORD;
    }
    async connectDataBases() {
        try {
            let url = `mongodb+srv://${this.MONGO_USER}:${this.MONGO_PASSWORD}@databasetypescript.y9ljxel.mongodb.net/?retryWrites=true&w=majority`;
            this.db = await mongoose_1.default.connect(url);
            console.log(`Databases connected to MongoDB`);
        }
        catch (error) {
            console.log(error);
        }
    }
}
const db = new DataBases();
db.connectDataBases();
