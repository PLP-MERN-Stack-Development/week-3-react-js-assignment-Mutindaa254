import { useState } from 'react';
import Button from '../components/Button';
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => setTasks([...tasks, { text, completed: false }]);
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <Button onClick={() => addTask('New Task')}>Add Task</Button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between p-2">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div>
              <Button variant="primary" onClick={() => toggleTask(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(index)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tasks;
