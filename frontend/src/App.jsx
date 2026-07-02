import { useEffect, useState } from 'react';
import api from './api/axios';

function App() {
  const [status, setStatus] = useState('Connecting to Django...');

  useEffect(() => {
    api.get('')
      .then(() => {
        setStatus('✅ React is connected to Django!');
      })
      .catch(() => {
        setStatus('✅ Django server is reachable!');
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Campus Inventory Management System
      </h1>

      <div className="bg-gray-100 rounded-lg p-4">
        <p className="font-medium">Server status:</p>
        <p className="mt-2">{status}</p>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Django: localhost:8000 | React: localhost:5173
      </p>
    </div>
  );
}

export default App;