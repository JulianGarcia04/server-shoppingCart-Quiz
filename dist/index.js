"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./lib/db");
class Server extends app_1.default {
    PORT;
    constructor() {
        super();
        //get to port
        this.PORT = this.app.get('PORT');
    }
    //start to server
    listen() {
        this.app.listen(this.PORT, () => {
            console.log('connected server to port ', this.PORT);
        });
    }
}
const app = new Server();
app.listen();
