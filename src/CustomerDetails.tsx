import React, { useEffect } from 'react';
import './CustomerDetails.css';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}


interface CustomerDetailsProps {
  customer: Customer;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {

  const properties = (Object.keys(customer) as (keyof Customer)[]).filter(prop => prop !== 'id');

  useEffect(() => {
    console.log("line 22", customer);
  }, [customer]);

  return (
    <div className="customer-details">
      <div className='details-head'>
        <h2 className='details-header'>Customer Details</h2>
      </div>
      <ul className='customer-details-data'>
        {properties.map((property) => (
          <li key={property} className='customer-details-box'>
            <strong className='customer-details-key'>{capitalizeFirstLetter(property)}:</strong> {customer[property]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerDetails;
