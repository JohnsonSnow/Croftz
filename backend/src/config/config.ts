import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 30001;

export const CONFIG = {
    PORT: process.env.PORT || 30001,
    NODE_ENV: process.env.NODE_ENV || 'development',
    INITIAL_COINS: 20,
  };
  

export const server = {
    SERVER_HOSTNAME,
    SERVER_PORT
};