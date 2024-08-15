import React, { useState } from 'react';
import './CustomerList.css';
import customerData from './Record.json';
import CustomerDetails from './CustomerDetails';
import ImageGrid from './Image';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

interface CustomerData {
  customers: Customer[];
}

const CustomerList: React.FC = () => {
  const data = customerData as CustomerData;
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [trigger, setTrigger] = useState(0);

  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    setTrigger(prev => prev + 1);
  };

  return (
    <div className="customer-list-container">
      <h1>Customer List</h1>
      <hr />
      <div className="customer-list">
        <ul className="customer-list-box">
          {data.customers.map((customer) => (
            <li
              className={`customer-list-person-detail ${selectedCustomer?.id === customer.id ? 'selected' : ''}`}
              key={customer.id}
              onClick={() => handleCustomerClick(customer)}
            >
              <div className="customer-list-box2">
                <strong>{customer.name}</strong>
              </div>
              <div className="customer-list-box3">
                <strong>Title</strong> - {customer.title}
              </div>
            </li>
          ))}
        </ul>
        <hr />
        <div className="customer-details">
          {selectedCustomer ? (
            <div>
              <CustomerDetails customer={selectedCustomer} />
              <ImageGrid trigger={trigger} />
            </div>
          ) : (
            <h3>Select a customer to see details</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
