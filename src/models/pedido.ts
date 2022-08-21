import { Schema, model } from "mongoose";

class Pedido {
  private pedidoSchema:Schema;

  constructor() {
    //CREATE SCHEMA OF THE DATABASES
    this.pedidoSchema = new Schema({
      iva:{
        type:Boolean,
        required:true
      },
      transporte:{
        type: Boolean,
        required: true
      },
      subTotal:{
        type: Number,
        reuqired: true
      },
      total:{
        type:Number,
        required:true
      }
    },
    {
      versionKey: false,
      timestamps: true
    })
  }
  //EXPORT SCHEMA OUTSIDE THE CLASS
  getSchema(){
    return this.pedidoSchema;
  }
}

//INSTANCE TO CLASS FOR GET THE SCHEMA
const pedidoModel = new Pedido().getSchema();

//CREATE MODEL THE SCHEMA
export default model('pedido', pedidoModel);
