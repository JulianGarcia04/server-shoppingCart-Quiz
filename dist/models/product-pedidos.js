"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class ProductPedido {
    productPedidoSchema;
    constructor() {
        //CREATE SCHEMA OF THE DATABASES
        this.productPedidoSchema = new mongoose_1.Schema({
            id_pedido: {
                type: String,
                required: true
            },
            id_product: {
                type: String,
                required: true
            },
            cantidad: {
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
        return this.productPedidoSchema;
    }
}
//INSTANCE TO CLASS FOR GET THE SCHEMA
const modelProductPedido = new ProductPedido().getSchema();
//CREATE MODEL THE SCHEMA
exports.default = (0, mongoose_1.model)('productPedido', modelProductPedido);
