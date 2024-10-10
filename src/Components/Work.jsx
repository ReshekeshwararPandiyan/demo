import React from 'react';
import img1 from './b1.jpeg';
import img2 from './menu.jpg';
import img3 from './del.gif';
import './Work.css'
const Work = () => {
  const services = [
    {
      id: 1,
      title: 'Catering Services',
      description: 'Professional catering services for all your events.',
      img: img1
    },
    {
      id: 2,
      title: 'Custom Menus',
      description: 'We create custom menus tailored to your tastes and preferences.',
      img: img2
    },
    {
      id: 3,
      title: 'Food Delivery',
      description: 'Fast and fresh food delivered to your doorstep.',
      img: img3
    }
  ];

  return (
    <div className='container'>
      <div className='header'>
        <h1>Our Work</h1>
        <p>Explore our wide range of food-related services.</p>
      </div>
      <div className='work-grid'>
        {services.map(service => (
          <div key={service.id} className='work-item'>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
