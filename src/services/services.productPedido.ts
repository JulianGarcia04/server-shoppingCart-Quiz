import productPedidos from "../models/product-pedidos";
import { Request, Response, NextFunction } from "express";
import boom from '@hapi/boom';

class ServicesProductPedidos {
  protected async getProductPedidos(req:Request, res:Response, next:NextFunction){
    try {
      let data = await productPedidos.find();
      if(data.length == 0){
        throw boom.notFound('Not found');
      }
      res.json(data);
    } catch (error) {
      next(error);
    }

  }

  protected async getProductPedido(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let data = await productPedidos.findById(id);
      if(data == null || !data){
        throw boom.notFound('Not found');
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async createProductPedido(req:Request, res:Response, next:NextFunction){
    try {
      let body = req.body;
      let data = await productPedidos.create(body);
      res.json({
        message: "Data created correctly",
        data: data
      })
    } catch (error) {
      next(error);
    }
  }

  protected async updateProductPedido(req:Request, res:Response, next:NextFunction){
    try {
      let body = req.body;
      let {id} = req.params;
      let oldData = await productPedidos.findById(id);
      if(!oldData){
        throw boom.notFound('data not exists');
      }
      let newData = await productPedidos.findByIdAndUpdate(id, body, {new:true});
      res.json({
        message: "data updated correctly",
        old: oldData,
        new: newData
      });
    } catch (error) {
      next(error);
    }
  }

  protected async deleteProductPedido(req:Request, res:Response, next:NextFunction){
    let {id} = req.params;
    let dataDeleted = await productPedidos.findByIdAndDelete(id);
    if(!dataDeleted){
      throw boom.notFound('data not exists');
    }
    res.json({
      message: "data deleted correctly",
      data: dataDeleted
    })
  }
}

export default ServicesProductPedidos;
