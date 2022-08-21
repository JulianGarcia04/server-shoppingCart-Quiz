import { Router, Express } from "express";
import RoutesProduct from "./routes.product";
import RoutesPedido from "./routes.pedido";
import RoutesProductPedido from "./routes.productPedido";


//Instanciar clases de que contiene las rutas
const routesProduct = new RoutesProduct().getRouter();
const routesPedido = new RoutesPedido().getRouter();
const routesProductPedido = new RoutesProductPedido().getRouter();

//admin routes
const adminRoutes = (app:Express)=>{
  const router = Router();
  app.use('/api/v1', router);
  //ROUTES
  router.use(routesProduct);
  router.use(routesPedido);
  router.use(routesProductPedido);
}

export default adminRoutes;
