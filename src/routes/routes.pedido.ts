import { Router, Request, Response } from "express";
import ServicesPedido from "../services/services.pedido";

class RoutesPedido extends ServicesPedido {
  //CREATE ROUTES
  private router:Router = Router();

  constructor() {
    super();
    //REQUEST GET ALL DATA
    this.router.get('/pedido', this.getPedidos);

    //REQUEST GET ONLY ONE
    this.router.get('/pedido/:id', this.getPedido);

    //REQUEST CREATE DATA (POST)
    this.router.post('/pedido', this.createPedido);

    //REQUEST UPDATE DATA (PUT)
    this.router.put('/pedido/:id', this.updatePedido);

    //REQUEST DELETE DATA (DELETE);
    this.router.delete('/pedido/:id', this.deletePedido);
  }

  //GET TO ROUTER PEDIDO
  getRouter(){
    return this.router;
  }
}

export default RoutesPedido;
