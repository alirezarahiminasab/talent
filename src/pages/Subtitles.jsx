import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { eventData } from '../data/eventData';

const Subtitles = () => {
  const { id } = useParams();
  const title = eventData[id];
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>{title.title}</h2>
      {title.subtitles.map((subtitle, index) => (
        <Card key={index} title={subtitle.name} example={subtitle.example} />
      ))}
    </div>
  );
};

export default Subtitles;