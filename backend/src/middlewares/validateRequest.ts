import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import httpStatus from 'http-status';

export const validateRequest = (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {

    try {
        if(Object.entries(req.body).length > 0) {
            await schema.parseAsync({
                body: req.body,
                query: req.query || {},
                params: req.params || {},
              }.body);
        }else {
            await schema.parseAsync(req.params, req.query);
        }
      return next();
    } catch (error) {
      return res.status(httpStatus.BAD_REQUEST).json(error);
    }
  };