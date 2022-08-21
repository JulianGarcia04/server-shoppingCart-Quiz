import ServerConfig from "./app";
import './lib/db';

class Server extends ServerConfig {
  private PORT:number;

  constructor() {
    super();
    //get to port
    this.PORT = this.app.get('PORT');
  }
  //start to server
  public listen(){
    this.app.listen(this.PORT, ()=>{
      console.log('connected server to port ',this.PORT);
    })
  }
}

const app = new Server();

app.listen();
