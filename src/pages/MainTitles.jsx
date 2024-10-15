import React from "react";
import Button from "../components/Button";
import { eventData } from "../data/eventData";
import { useNavigate } from "react-router-dom"; // Update useHistory to useNavigate
import Card from "../components/Card";

const MainTitles = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const handleSelectTitle = (index) => navigate(`/titles/${index}`); // Use navigate for route change

  return (
    <div className="p-4 flex flex-col gap-2">
      <h2 className="text-xl font-bold mb-4 text-center">سرفصل های اصلی</h2>
      {eventData.map((item, index) => (
        <Card key={index} onClick={() => handleSelectTitle(index)}>
          {item.title}
        </Card>
      ))}
    </div>
  );
};

export default MainTitles;
