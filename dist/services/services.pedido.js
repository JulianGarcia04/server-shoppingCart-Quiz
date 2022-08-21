"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pedido_1 = __importDefault(require("../models/pedido"));
const boom_1 = __importDefault(require("@hapi/boom"));
class ServicesPedido {
    async getPedidos(req, res, next) {
        try {
            let data = await pedido_1.default.find();
            if (data.length == 0) {
                throw boom_1.default.notFound("Data not found");
            }
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async getPedido(req, res, next) {
        try {
            let { id } = req.params;
            let data = await pedido_1.default.findById(id);
            if (!data) {
                throw boom_1.default.notFound("Data not exists");
            }
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async createPedido(req, res, next) {
        try {
            let body = req.body;
            let data = await pedido_1.default.create(body);
            res.json({
                message: "data created correctly",
                dataCreated: data
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updatePedido(req, res, next) {
        try {
            let body = req.body;
            let { id } = req.params;
            let oldData = await pedido_1.default.findById(id);
            if (!oldData) {
                throw boom_1.default.notFound('data not exists');
            }
            let newData = await pedido_1.default.findByIdAndUpdate(id, body, { new: true });
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
    async deletePedido(req, res, next) {
        try {
            let { id } = req.params;
            let dataDeleted = await pedido_1.default.findByIdAndDelete(id);
            if (!dataDeleted) {
                throw boom_1.default.notFound('data not exists');
            }
            res.json({
                message: "data deleted correctly",
                data: dataDeleted
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = ServicesPedido;
