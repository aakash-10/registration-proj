
import React, { useState } from 'react';
import NavBar from './navbar'; 
import Footer from './footer';

const AuthForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.name.length < 4) {
      newErrors.name = 'Name must be at least 4 characters';
      valid = false;
    } else {
      newErrors.name = '';
    }

    // need to add email validation
    // ...

    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one number and one special character';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Display data in the table
      setSubmittedData({ ...formData });
    } else {
      console.log('Form has errors');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleAuthForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
    <div className="relative overflow-x-hidden min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 animate-gradient"></div>
    <NavBar />
    <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-md shadow-md">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Login' : 'Create an Account'} 
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          {!isLogin && ( <>
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            </>
          )}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 text-white p-2 rounded-md"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>

            <button
              type="button"
              onClick={toggleAuthForm}
              className="text-indigo-500 hover:underline"
            >
              {isLogin ? 'Create an account' : 'Already have an account?'}
            </button>
          </div>
        </form>
      </div>

      
    </div>

    </div>
    </>
  );
};

export default AuthForm;
