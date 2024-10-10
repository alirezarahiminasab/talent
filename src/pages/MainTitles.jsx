import React from "react";
import Button from "../components/Button";
import { eventData } from "../data/eventData";
import { useNavigate } from "react-router-dom"; // Update useHistory to useNavigate

const MainTitles = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const handleSelectTitle = (index) => navigate(`/subtitles/${index}`); // Use navigate for route change

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Main Titles</h2>
      {eventData.map((item, index) => (
        <Button key={index} onClick={() => handleSelectTitle(index)}>
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default MainTitles;
