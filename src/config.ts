import dotEnv from 'dotenv';

dotEnv.config();

export default {
  MONGO_USER: process.env.MONGO_USER || 'Julian',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'hola12345',
  PORT: process.env.PORT || 4000
}
