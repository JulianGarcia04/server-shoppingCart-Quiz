"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../models/product"));
const boom_1 = __importDefault(require("@hapi/boom"));
class ServicesProduct {
    async getProducts(req, res, next) {
        try {
            let data = await product_1.default.find();
            if (data.length == 0) {
                throw boom_1.default.notFound("Product not found");
            }
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async getProduct(req, res, next) {
        try {
            let { id } = req.params;
            let data = await product_1.default.findById(id);
            if (!data) {
                throw boom_1.default.notFound("Data not exists");
            }
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async createProduct(req, res, next) {
        try {
            let verifyData = await product_1.default.findOne({ nombre: req.body.nombre });
            if (verifyData) {
                throw boom_1.default.notFound("Data exists");
            }
            let body = req.body;
            let data = await product_1.default.create(body);
            res.json({
                message: "data created correctly",
                dataCreated: data
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateProduct(req, res, next) {
        try {
            let body = req.body;
            let { id } = req.params;
            let oldData = await product_1.default.findById(id);
            if (!oldData) {
                throw boom_1.default.notFound('data not exists');
            }
            let newData = await product_1.default.findByIdAndUpdate(id, body, { new: true });
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
    async deleteProduct(req, res, next) {
        try {
            let { id } = req.params;
            let dataDeleted = await product_1.default.findByIdAndDelete(id);
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
exports.default = ServicesProduct;
