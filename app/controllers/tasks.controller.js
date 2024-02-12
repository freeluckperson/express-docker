import { Task } from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const { id } = req.query;
    let taskFound;
    !id
      ? (taskFound = await Task.find())
      : (taskFound = await Task.findById(id));
    res.status(200).json(taskFound);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (typeof title !== "string" || typeof description !== "string")
    return res.status(400).json("Must be a str");
  const newTask = await Task.create({ title, description });
  res.status(200).json(newTask);
};
