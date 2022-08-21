"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_product_1 = __importDefault(require("./routes.product"));
const routes_pedido_1 = __importDefault(require("./routes.pedido"));
const routes_productPedido_1 = __importDefault(require("./routes.productPedido"));
//Instanciar clases de que contiene las rutas
const routesProduct = new routes_product_1.default().getRouter();
const routesPedido = new routes_pedido_1.default().getRouter();
const routesProductPedido = new routes_productPedido_1.default().getRouter();
//admin routes
const adminRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/api/v1', router);
    //ROUTES
    router.use(routesProduct);
    router.use(routesPedido);
    router.use(routesProductPedido);
};
exports.default = adminRoutes;
