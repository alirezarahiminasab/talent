import React from "react";
import { useNavigate } from "react-router-dom"; // Update useHistory to useNavigate
import Button from "./Button";

const Cover = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const handleStart = () => navigate("/titles"); // navigate to the /titles route

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">سرفصل های رویداد استعدادسنجی</h1>
      <Button onClick={handleStart}>شروع</Button>
    </div>
  );
};

export default Cover;
