import React, { useEffect } from 'react';

const FloatingAlert = ({ message, type, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className={` text-3xl fixed bottom-4 right-4 p-4 rounded-md drop-shadow-2xl ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}
    >
      {message}
    </div>
  );
};

export default FloatingAlert;