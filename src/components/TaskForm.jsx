import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleTaskAdd = () => {
    if (taskName.trim() !== '') {
      onTaskAdd(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Tarea"
        className="p-2 px-5 border border-gray-800 mr-2 "
      />
      <button
        onClick={handleTaskAdd}
        className="bg-green-500 rounded-full px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-white "
      >
        Agregar
      </button>
    </div>
  );
};

export default TaskForm;