import React, { useState } from 'react';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      state: '',
      acknowledgement: false,
    });
  
    const [errors, setErrors] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    const [submittedDataList, setSubmittedDataList] = useState([]);
  
    const validateForm = () => {
      let valid = true;
      const newErrors = { username: '', email: '', password: '' };
  
      if (formData.username.length < 4) {
        newErrors.username = 'Username must be at least 4 characters';
        valid = false;
      }
  
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        valid = false;
      }
  
      if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(formData.password)) {
        newErrors.password =
          'Password must contain at least one number and one special character';
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        // Add the new user data to the list
        setSubmittedDataList([...submittedDataList, { ...formData }]);
        setFormData({
          username: '',
          email: '',
          password: '',
          state: '',
          acknowledgement: false,
        });
        setErrors({ username: '', email: '', password: '' });
      } else {
        console.log('Form has errors');
      }
    };
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === 'checkbox' ? checked : value;
  
      setFormData((prevData) => ({
        ...prevData,
        [name]: fieldValue,
      }));
    };
  
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registration Form</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="mb-2.5">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
            </div>
  
            <div className="mb-2.5">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
  
            <div className="mb-0.5">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            
          </div>
          <div className="mb-2.5">
  <label htmlFor="state" className="sr-only">
    State
  </label>
  <select
    id="state"
    name="state"
    autoComplete="address-level1"
    required
    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    onChange={handleChange}
    value={formData.state}
  >
    <option value="">Select State</option>
    {/* Add your state options here */}
    <option value="New York">New York</option>
    <option value="California">California</option>
    <option value="Texas">Texas</option>
    {/* Add more states as needed */}
  </select>
</div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="acknowledgement"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={formData.acknowledgement}
                onChange={handleChange}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Acknowledgement
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>

    
      <div className="ml-8 shadow-lg bg-white p-6 rounded-md">
  {submittedDataList.length > 0 ? (
    <>
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Registered Users</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Password</th>
            <th className="border px-4 py-2">State</th>
            <th className="border px-4 py-2">Acknowledgement</th>
          </tr>
        </thead>
        <tbody>
          {submittedDataList.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{'*'.repeat(user.password.length)}</td>
              <td className="border px-4 py-2">{user.state}</td>
              <td className="border px-4 py-2">{user.acknowledgement ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <p className="text-xl font-bold">No submitted users yet.</p>
  )}
</div>


     
    </div>
  );
};

export default RegistrationForm;
