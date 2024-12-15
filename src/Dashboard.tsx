import React from 'react';
import { useAuth } from './hooks/useAuth';

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>لم يتم تسجيل الدخول</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">مرحباً، {user.name}</h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
