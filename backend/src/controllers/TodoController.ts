import { Request, Response } from 'express';
import Todo from '../models/Todo.model';

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description, userId: req.user?.id });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.findAll({ where: { userId: req.user?.id } });
    res.json(todos);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const [rowsUpdated, [updatedTodo]] = await Todo.update(
      { title, description, completed },
      { where: { id, userId: req.user?.id }, returning: true }
    );
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRows = await Todo.destroy({ where: { id, userId: req.user?.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};