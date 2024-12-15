import React, { useState, FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';

// تعريف الأنواع
interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // محاكاة استعلام من dummyjson
    const response = await fetch(`https://dummyjson.com/users`);
    const data = await response.json();

    // البحث عن المستخدم الذي يتطابق مع البريد الإلكتروني وكلمة المرور
    const user = data.users.find(
      (user: { email: string; password: string; name: string }) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      login({ id: user.id, name: user.name, email: user.email, password: user.password });
    } else {
      alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">تسجيل الدخول</h2>
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded mb-6"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
};

export default Login;
