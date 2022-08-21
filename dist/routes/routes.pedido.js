"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_pedido_1 = __importDefault(require("../services/services.pedido"));
class RoutesPedido extends services_pedido_1.default {
    //CREATE ROUTES
    router = (0, express_1.Router)();
    constructor() {
        super();
        //REQUEST GET ALL DATA
        this.router.get('/pedido', this.getPedidos);
        //REQUEST GET ONLY ONE
        this.router.get('/pedido/:id', this.getPedido);
        //REQUEST CREATE DATA (POST)
        this.router.post('/pedido', this.createPedido);
        //REQUEST UPDATE DATA (PUT)
        this.router.put('/pedido/:id', this.updatePedido);
        //REQUEST DELETE DATA (DELETE);
        this.router.delete('/pedido/:id', this.deletePedido);
    }
    //GET TO ROUTER PEDIDO
    getRouter() {
        return this.router;
    }
}
exports.default = RoutesPedido;
