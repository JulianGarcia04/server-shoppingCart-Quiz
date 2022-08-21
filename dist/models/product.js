"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Product {
    productSchema;
    constructor() {
        //CREATE SCHEMA OF THE DATABASES
        this.productSchema = new mongoose_1.Schema({
            image: {
                type: String,
                required: true,
                unique: true
            },
            nombre: {
                type: String,
                unique: true,
                required: true
            },
            description: {
                type: String,
                trim: true,
                required: true
            },
            tipoConsumo: {
                type: String,
                required: true
            },
            cantidadCaja: {
                type: Number,
                required: true
            },
            cantidad: {
                type: Number,
                required: true
            },
            IVA: {
                type: Number,
                required: true
            },
            precioUnid: {
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
        return this.productSchema;
    }
}
;
//INSTANCE TO CLASS FOR GET THE SCHEMA
const productModel = new Product().getSchema();
//CREATE MODEL THE SCHEMA
exports.default = (0, mongoose_1.model)("product", productModel);
