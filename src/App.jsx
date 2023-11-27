import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import FloatingAlert from './components/FloatingAlert';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const showAlert = (message, type) => {
    setMessage(message);
    setAlertType(type);
  };

  const closeAlert = () => {
    setMessage('');
    setAlertType('');
  };

  const handleTaskAdd = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
    showAlert('Tarea Agregada!', 'success');
  };

  const handleTaskComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    showAlert('Tarea Eliminada!', 'error');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/2">
         <img src="./../src/assets/logo.png" alt="" />
        <TaskForm onTaskAdd={handleTaskAdd} />
        <TaskList
          tasks={tasks}
          onTaskComplete={handleTaskComplete}
          onTaskDelete={handleTaskDelete}
        />
        {message && ( 
              <div className=" flex ">
          <FloatingAlert
            message={message}
            type={alertType === 'success' ? 'success' : 'error'}
            onClose={closeAlert}
            
          /></div>
        )}

      <footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200'>
          <div class="mx-6 pt-8 pb-4 text-center">
            <div class="mb-6">
               <h5 class="mb-2 font-bold uppercase"> Alumno Leonado canella <br />DNI 32956235</h5>
               <span>© 2023 </span>
             </div>
            </div>
        </footer>


      </div>
    </div>
    

  );
};



export default App;