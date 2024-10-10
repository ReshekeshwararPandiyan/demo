import React from 'react';
import img from './b1.jpeg';
import img1 from './b2.jpeg';
import img2 from './b3.jpeg';

const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        <h1>Welcome To Food Paradise</h1>
        <p>Explore a variety of delicious Food items</p>
      </div>

      <div className='searchbar'>
        <input placeholder='Search for your favorite food'></input>
      </div>

      <div className='products'>
        <div className='box'>
          <img src={img} alt='i1' />
          <h3>Delicious Pizza</h3>
          <p>Our pizza is made with the finest ingredients and baked to perfection.</p>
        </div>

        <div className='box'>
          <img src={img1} alt='i2' />
          <h3>Fresh Burger</h3>
          <p>Juicy and freshly grilled burger with crispy fries on the side.</p>
        </div>

        <div className='box'>
          <img src={img2} alt='i3' />
          <h3>Exotic Desserts</h3>
          <p>Sweet and savory desserts to satisfy your cravings.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
