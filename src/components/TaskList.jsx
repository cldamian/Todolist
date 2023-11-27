import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <ul className='w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;