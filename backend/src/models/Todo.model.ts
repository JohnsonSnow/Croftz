// src/models/todo.model.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface TodoAttributes {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
}

type TodoCreationAttributes = Optional<TodoAttributes, 'id' | 'completed'>

class Todo extends Model<TodoAttributes, TodoCreationAttributes> implements TodoAttributes {
  public id!: string;
  public title!: string;
  public description!: string;
  public completed!: boolean;
  public userId!: string;
}

Todo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'todos'
  }
);

export default Todo;