import mongoose from "mongoose";
import config from "../config";

class DataBases {
  private db:any;
  private MONGO_USER:string|undefined;
  private MONGO_PASSWORD:string|undefined;

  constructor() {
    this.MONGO_USER = config.MONGO_USER;
    this.MONGO_PASSWORD = config.MONGO_PASSWORD;
  }

  public async connectDataBases(){
    try {
      let url = `mongodb+srv://${this.MONGO_USER}:${this.MONGO_PASSWORD}@databasetypescript.y9ljxel.mongodb.net/?retryWrites=true&w=majority`
      this.db = await mongoose.connect(url);
      console.log(`Databases connected to MongoDB`);
    } catch (error) {
      console.log(error)
    }
  }
}

const db  = new DataBases();
db.connectDataBases();
