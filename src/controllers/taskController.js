import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  let val;

  if(req.query.completed === 'true') val = true;
  else if(req.query.completed === 'false') val = false;
  else val = req.query.completed;

  const tasks = await taskService.getAllTasks(val);

  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
