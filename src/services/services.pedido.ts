import { NextFunction, Request, Response } from 'express';
import pedido from '../models/pedido';
import boom from '@hapi/boom';


class ServicesPedido {

  protected async getPedidos(req:Request, res:Response, next:NextFunction){
    try {
      let data = await pedido.find();
      if(data.length == 0){
        throw boom.notFound("Data not found");
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async getPedido(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let data = await pedido.findById(id);
      if (!data) {
        throw boom.notFound("Data not exists");
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async createPedido(req:Request, res:Response, next:NextFunction){
    try {
      let body = req.body;
      let data = await pedido.create(body);
      res.json({
        message: "data created correctly",
        dataCreated: data
      })
    } catch (error) {
      next(error);
    }
  }

  protected async updatePedido(req:Request, res:Response, next:NextFunction){
    try {
      let body = req.body;
      let {id} = req.params;
      let oldData = await pedido.findById(id);
      if(!oldData){
        throw boom.notFound('data not exists');
      }
      let newData = await pedido.findByIdAndUpdate(id, body, {new:true});
      res.json({
        message: "data updated correctly",
        old: oldData,
        new: newData
      });
    } catch (error) {
      next(error);
    }
  }

  protected async deletePedido(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let dataDeleted = await pedido.findByIdAndDelete(id);
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

export default ServicesPedido;
