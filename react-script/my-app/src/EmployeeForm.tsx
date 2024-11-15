import React, { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
}

interface EmployeeFormProps {
  employee: Employee | null;
  onSave: (employee: Employee) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, onSave }) => {
  const [formData, setFormData] = useState<Employee>(
    employee || { id: 0, name: '', email: '', position: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formData.id = 0;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
