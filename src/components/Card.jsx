import React from 'react';

const Card = ({ title, example }) => (
  <div className='border rounded-lg p-4 mb-4'>
    <h3 className='text-xl font-bold mb-2'>{title}</h3>
    <p>{example}</p>
  </div>
);

export default Card;