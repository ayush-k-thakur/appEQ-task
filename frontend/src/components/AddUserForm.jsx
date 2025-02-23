import React, { useState } from 'react';
import mixpanel from '../services/mixpanel';

const AddUserForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lastLogin: '',
    engagementScore: '',
    retentionCategory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.retentionCategory || !formData.lastLogin || !formData.engagementScore) {
      alert('All fields are required');
      return;
    }
    onSubmit(formData);

    mixpanel.track('User Form Submitted', {
      name: formData.name,
      email: formData.email,
      retentionCategory: formData.retentionCategory
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg position-absolute mx-auto left-0 right-0">
      <h2 className="text-xl font-bold mb-2">Add New User</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="date"
        name="lastLogin"
        value={formData.lastLogin}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        name="engagementScore"
        placeholder="Engagement Score"
        value={formData.engagementScore}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <select
        name="retentionCategory"
        value={formData.retentionCategory}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      >
        <option value="">Select Retention Category</option>
        <option value="Low" className='bg-blue-400'>Low</option>
        <option value="Medium" className='bg-blue-400'>Medium</option>
        <option value="High" className='bg-blue-400'>High</option>
      </select>
      <div className='flex justify-center gap-10'>
      <button type="submit" className="py-2 px-5 bg-green-500 text-white rounded cursor-pointer">Add User</button>
      <button type="button" onClick={onCancel} className="py-2 px-8 bg-red-500 cursor-pointer text-white rounded ml-2">Cancel</button>
      </div>
    </form>
  );
};

export default AddUserForm;
