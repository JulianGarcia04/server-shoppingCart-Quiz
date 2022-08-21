"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_pedidos_1 = __importDefault(require("../models/product-pedidos"));
const boom_1 = __importDefault(require("@hapi/boom"));
class ServicesProductPedidos {
    async getProductPedidos(req, res, next) {
        try {
            let data = await product_pedidos_1.default.find();
            if (data.length == 0) {
                throw boom_1.default.notFound('Not found');
            }
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async getProductPedido(req, res, next) {
        try {
            let { id } = req.params;
            let data = await product_pedidos_1.default.findById(id);
            if (data == null || !data) {
                throw boom_1.default.notFound('Not found');
            }
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async createProductPedido(req, res, next) {
        try {
            let body = req.body;
            let data = await product_pedidos_1.default.create(body);
            res.json({
                message: "Data created correctly",
                data: data
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateProductPedido(req, res, next) {
        try {
            let body = req.body;
            let { id } = req.params;
            let oldData = await product_pedidos_1.default.findById(id);
            if (!oldData) {
                throw boom_1.default.notFound('data not exists');
            }
            let newData = await product_pedidos_1.default.findByIdAndUpdate(id, body, { new: true });
            res.json({
                message: "data updated correctly",
                old: oldData,
                new: newData
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteProductPedido(req, res, next) {
        let { id } = req.params;
        let dataDeleted = await product_pedidos_1.default.findByIdAndDelete(id);
        if (!dataDeleted) {
            throw boom_1.default.notFound('data not exists');
        }
        res.json({
            message: "data deleted correctly",
            data: dataDeleted
        });
    }
}
exports.default = ServicesProductPedidos;
