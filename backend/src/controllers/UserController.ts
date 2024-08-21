import { Request, Response } from 'express';
import User from '../models/User.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {

  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hashedPassword });
      res.status(201).json({ id: user.id, username: user.username, email: user.email });
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }

  static async login(req: Request, res: Response): Promise<unknown> {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }
}