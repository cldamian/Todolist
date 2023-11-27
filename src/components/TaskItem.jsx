import React from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  return (
    <div className='flex flex-col justify-end items-center'>
    <li className={`border-b-2 border-neutral-500 border-opacity-100 py-3 dark:border-opacity-50 px-60 ${task.completed? ' line-through' : ''}`}>
      <span className=''>{task.name}</span>
      <button
        onClick={() => onTaskComplete(task.id)}
        className=" bg-orange-300 rounded-full px-6 pb-2 pt-2.5 m-2 font-medium uppercase leading-normal text-white"
      >
        Realizada
      </button>
      <button
        onClick={() => onTaskDelete(task.id)}
        className=" bg-red-500 rounded-full px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white"
      >
        Eliminar
      </button>
    </li>
    </div>
  );
};  

export default TaskItem;