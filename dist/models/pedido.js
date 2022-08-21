"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Pedido {
    pedidoSchema;
    constructor() {
        //CREATE SCHEMA OF THE DATABASES
        this.pedidoSchema = new mongoose_1.Schema({
            iva: {
                type: Boolean,
                required: true
            },
            transporte: {
                type: Boolean,
                required: true
            },
            subTotal: {
                type: Number,
                reuqired: true
            },
            total: {
                type: Number,
                required: true
            }
        }, {
            versionKey: false,
            timestamps: true
        });
    }
    //EXPORT SCHEMA OUTSIDE THE CLASS
    getSchema() {
        return this.pedidoSchema;
    }
}
//INSTANCE TO CLASS FOR GET THE SCHEMA
const pedidoModel = new Pedido().getSchema();
//CREATE MODEL THE SCHEMA
exports.default = (0, mongoose_1.model)('pedido', pedidoModel);
