import { Schema, model } from "mongoose";

class Product {
  private productSchema:Schema;

  constructor() {
    //CREATE SCHEMA OF THE DATABASES
    this.productSchema = new Schema({
      image:{
        type: String,
        required: true,
        unique: true
      },
      nombre: {
        type: String,
        unique:true,
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
      cantidadCaja:{
        type: Number,
        required: true
      },
      cantidad:{
        type: Number,
        required: true
      },
      IVA:{
        type: Number,
        required: true
      },
      precioUnid:{
        type: Number,
        required: true
      }
    }, {
      versionKey: false,
      timestamps: true
    })
  }

  //EXPORT SCHEMA OUTSIDE THE CLASS
  public getSchema(){
    return this.productSchema;
  }
};

//INSTANCE TO CLASS FOR GET THE SCHEMA
const productModel = new Product().getSchema();

//CREATE MODEL THE SCHEMA
export default model("product", productModel);


