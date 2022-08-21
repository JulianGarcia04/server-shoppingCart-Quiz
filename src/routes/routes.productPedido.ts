import { Router, Request, Response } from "express";
import ProductPedidos from "../services/services.productPedido"

class RoutesProductPedido extends ProductPedidos {
  //ROUTER
  private router:Router = Router();

  constructor() {
    super();
    //REQUEST GET ALL DATA
    this.router.get('/product-pedido', this.getProductPedidos);

    //REQUEST GET ONLY ONE DATA
    this.router.get('/product-pedido/:id', this.getProductPedido);

    //REQUEST CREATE DATA (POST)
    this.router.post('/product-pedido', this.createProductPedido);

    //REQUEST UPDATE DATA (PUT)
    this.router.put('/product-pedido/:id', this.updateProductPedido);

    //REQUEST DELETE DATA (DELETE)
    this.router.delete('/product-pedido/:id', this.deleteProductPedido);
  }

  //GET ROUTER
  public getRouter(){
    return this.router;
  }
}

export default RoutesProductPedido;
