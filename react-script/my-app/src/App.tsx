import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
}

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const saveEmployee = (employee: Employee) => {
    console.log(employee)
    if (employee.id === 1) {
      // Add new employee
      employee.id = employees.length + 1;
      setEmployees([...employees, employee]);
    } else {
      // Edit existing employee
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    }
    setEditingEmployee(null);
  };

  const editEmployee = (employee: Employee) => {
    console.log(employee)
    setEditingEmployee(employee);
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm employee={editingEmployee} onSave={saveEmployee} />
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} ({employee.position}) - {employee.email}
            <button onClick={() => editEmployee(employee)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
