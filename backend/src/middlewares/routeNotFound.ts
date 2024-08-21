import { Request, Response } from 'express';
import httpStatus from 'http-status';

export function routeNotFound(req: Request, res: Response) {
    const error = new Error('Not found');
    logging.warning(error);

    return res.status(httpStatus.NOT_FOUND).json({
        error: {
            message: error.message
        }
    });
}