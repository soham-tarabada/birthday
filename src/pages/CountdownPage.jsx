import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountdownPage = () => {
  const navigate = useNavigate();
  const targetDate = new Date("May 02, 2025 15:55:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft(distance);
      if (distance <= 0) {
        clearInterval(interval);
        setButtonEnabled(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-pink-500 mb-6">
          Your Special Day is Almost Here<span className="ml-1">!</span>
        </h1>

        <div className="flex justify-center gap-4 mb-6">
          {[
            { label: "Days", value: days, icon: "❤️" },
            { label: "Hours", value: hours, icon: "🎁" },
            { label: "Minutes", value: minutes, icon: "🌷" },
            { label: "Seconds", value: seconds, icon: "⭐" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-pink-50 rounded-xl p-4 w-20 shadow"
            >
              <div className="text-lg font-bold text-pink-500">
                {item.value}
              </div>
              <div className="text-xs text-pink-400">{item.label}</div>
              <div className="text-sm">{item.icon}</div>
            </div>
          ))}
        </div>

        <div className="bg-pink-50 p-4 rounded-xl text-pink-500 text-sm mb-4">
          Just a little More... A Small Gift for My Favorite person...❤️
        </div>

        <button
          onClick={() => navigate("/birthday/card")}
          disabled={!buttonEnabled}
          className={`mt-2 px-6 py-3 rounded-lg text-white font-bold transition ${
            buttonEnabled
              ? "bg-pink-500 hover:bg-pink-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {buttonEnabled ? "Open Your Surprise" : "Waiting..."}
        </button>
      </div>
    </div>
  );
};

export default CountdownPage;