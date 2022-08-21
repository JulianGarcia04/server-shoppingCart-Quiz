import express, {Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import adminRoutes from './routes/routes.admin';
import errorHundle from './middlewares/error.hundle'
import config from './config';


class ServerConfig {
  //set to express
  protected app:Express = express();

  constructor() {
    //set options the server
    this.app.set('PORT', config.PORT || 8080);

    //use middlewares
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use('/', express.static(path.join(__dirname, './public')));

    //routes
    adminRoutes(this.app);

    //middlewares admin error
    this.app.use(errorHundle.errorHandler);
    this.app.use(errorHundle.boomErrorHandler);
    this.app.use(errorHundle.formatError);
  }
}

export default ServerConfig;
