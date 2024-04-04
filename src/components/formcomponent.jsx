import React, { useState } from 'react';

const FormComponent = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.name.trim()) {
          newErrors.name = 'Enter Name';
          isValid = false;
        } else {
          newErrors.name = '';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailPattern.test(formData.email)) {
          newErrors.email = 'oops!! Invalid email!!';
          isValid = false;
        } else {
          newErrors.email = '';
        }

        if (!formData.message.trim()) {
          newErrors.message = 'Please Enter Message';
          isValid = false;
        } else {
          newErrors.message = '';
        }

        setErrors(newErrors);
        return isValid;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          alert(`${formData.name},your form has been successfully submitted`)
          console.log('Form submitted:', formData);
        } else {
          alert("opps!! Error in form")
          console.log(`error: ${e}`);
        }
      };

      return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5 bg-gray-200 shadow-lg rounded">
          <h3 className='text-3xl font-bold flex items-center justify-center p-4'>Enter Details </h3>
              <div className="mb-4">
                  <label className="block ">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

              <div className="mb-4">
                <label className="block ">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label  className="block ">Message</label>
                <textarea id="message"name="message" value={formData.message} onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                ></textarea>
                {errors.message && <p className="text-red-500">{errors.message}</p>}
              </div>
              
              <button type="submit" className=" py-2 px-4  bg-blue-500 text-white rounded  hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Submit
              </button>
        </form>
      );
    };

export default FormComponent;
