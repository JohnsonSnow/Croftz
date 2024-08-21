import { Request, Response, NextFunction } from 'express';
import { CreateUserInput } from '../schemas/userSchemas';

export function loggingHandler(req: Request<CreateUserInput>, res: Response, next: NextFunction) {
    logging.log(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    logging.log(`Incomming - METHOD: [${req.method}] - REQUEST: ${JSON.stringify(req.body)} - ${JSON.stringify(req.params)} - ${JSON.stringify(req.query)} - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);


    res.on('finish', () => {
        logging.log(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
    });

    next();
}