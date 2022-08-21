import { NextFunction, Request, Response } from 'express';
import product from '../models/product';
import boom from '@hapi/boom';


class ServicesProduct {

  protected async getProducts(req:Request, res:Response, next:NextFunction){
    try {
      let data = await product.find();
      if(data.length == 0){
        throw boom.notFound("Product not found");
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async getProduct(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let data = await product.findById(id);
      if (!data) {
        throw boom.notFound("Data not exists");
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async createProduct(req:Request, res:Response, next:NextFunction){
    try {
      let verifyData = await product.findOne({nombre: req.body.nombre});
      if(verifyData){
        throw boom.notFound("Data exists");
      }
      let body = req.body;
      let data = await product.create(body);
      res.json({
        message: "data created correctly",
        dataCreated: data
      })
    } catch (error) {
      next(error);
    }
  }

  protected async updateProduct(req:Request, res:Response, next:NextFunction){
    try {
      let body = req.body;
      let {id} = req.params;
      let oldData = await product.findById(id);
      if(!oldData){
        throw boom.notFound('data not exists');
      }
      let newData = await product.findByIdAndUpdate(id, body, {new:true});
      res.json({
        message: "data updated correctly",
        old: oldData,
        new: newData
      });
    } catch (error) {
      next(error);
    }
  }

  protected async deleteProduct(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let dataDeleted = await product.findByIdAndDelete(id);
      if(!dataDeleted){
        throw boom.notFound('data not exists');
      }
      res.json({
        message: "data deleted correctly",
        data: dataDeleted
      })
    } catch (error) {
      next(error);
    }
  }
}

export default ServicesProduct;
