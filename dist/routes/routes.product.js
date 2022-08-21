"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_product_1 = __importDefault(require("../services/services.product"));
class RoutesProduct extends services_product_1.default {
    router = (0, express_1.Router)();
    constructor() {
        super();
        //REQUEST GET ALL DATA
        this.router.get('/product', this.getProducts);
        //REQUEST GET ONLY ONE DATA
        this.router.get('/product/:id', this.getProduct);
        //REQUEST CREATE DATA (POST)
        this.router.post('/product', this.createProduct);
        //REQUEST UPTADE DATA (PUT)
        this.router.put('/product/:id', this.updateProduct);
        //REQUEST DELETE DATA (DELETE)
        this.router.delete('/product/:id', this.deleteProduct);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = RoutesProduct;
