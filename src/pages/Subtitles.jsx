import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { eventData } from "../data/eventData";

const Subtitles = () => {
  const { id } = useParams();
  const data = eventData[id];
  return (
    <div className="p-4 bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        {data.title}
      </h2>
      {data.subtitles.map((subtitle, index) => (
        <div
          key={index}
          className="border bg-white rounded-lg p-4 mb-4 cursor-pointer "
        >
          <h3 className="text-xl font-bold mb-2 text-center text-red-800">
            {subtitle.title}
          </h3>
          <p>{subtitle.description}</p>
          <p>
            <span>مقال: </span>
            {subtitle.example}
          </p>
          <p>{subtitle.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Subtitles;
