import { Router, Request, Response } from "express";
import servicesProduct from "../services/services.product";

class RoutesProduct extends servicesProduct{
  private router:Router = Router();

  constructor() {
    super();
    //REQUEST GET ALL DATA
    this.router.get('/product', this.getProducts);

    //REQUEST GET ONLY ONE DATA
    this.router.get('/product/:id', this.getProduct);

    //REQUEST CREATE DATA (POST)
    this.router.post('/product', this.createProduct);

    //REQUEST UPTADE DATA (PUT)
    this.router.put('/product/:id', this.updateProduct);

    //REQUEST DELETE DATA (DELETE)
    this.router.delete('/product/:id', this.deleteProduct);
  }

  public getRouter(){
    return this.router;
  }
}

export default RoutesProduct;
