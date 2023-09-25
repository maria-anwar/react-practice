import React from 'react';

const ServiceCard = () => {
  const services = [
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
    'Service 4',
    'Service 4',
    'Service 4',
    'Service 4',
    // Add more services as needed
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="grid grid-cols-1 gap-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
