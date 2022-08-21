"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_admin_1 = __importDefault(require("./routes/routes.admin"));
const error_hundle_1 = __importDefault(require("./middlewares/error.hundle"));
const config_1 = __importDefault(require("./config"));
class ServerConfig {
    //set to express
    app = (0, express_1.default)();
    constructor() {
        //set options the server
        this.app.set('PORT', config_1.default.PORT || 8080);
        ;
        //use middlewares
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use('/', express_1.default.static(path_1.default.join(__dirname, './public')));
        //routes
        (0, routes_admin_1.default)(this.app);
        //middlewares admin error
        this.app.use(error_hundle_1.default.errorHandler);
        this.app.use(error_hundle_1.default.boomErrorHandler);
        this.app.use(error_hundle_1.default.formatError);
    }
}
exports.default = ServerConfig;
