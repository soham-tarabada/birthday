import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/birthday/countdown");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0">
        {/* Floating hearts */}
        <span className="absolute scale-50 top-5 left-10 text-pink-300 text-2xl animate-pulse">
          💖
        </span>
        <span className="absolute scale-75 top-20 right-8 text-pink-400 text-xl animate-ping">
          💜
        </span>
        <span className="absolute scale-50 top-1/3 left-1/4 text-pink-300 text-lg animate-bounce">
          💖
        </span>
        <span className="absolute scale-75 top-1/2 right-20 text-pink-400 text-2xl animate-ping">
          💜
        </span>
        <span className="absolute scale-50 bottom-24 left-16 text-pink-300 text-xl animate-pulse">
          💖
        </span>
        <span className="absolute scale-75 bottom-10 right-16 text-pink-400 text-lg animate-bounce">
          💜
        </span>
        <span className="absolute scale-50 bottom-1/3 left-1/3 text-pink-300 text-xl animate-ping">
          💖
        </span>
        <span className="absolute scale-75 bottom-1/4 right-1/4 text-pink-400 text-2xl animate-pulse">
          💜
        </span>
      </div>

      {/* Main card */}
      <div className="relative size-fit p-8 text-center space-y-6 z-10">
        {/* Heart Loader */}
        <div
          className="text-pink-500 mb-2 text-6xl"
          style={{
            animation: "heartbeat 1.5s infinite",
            transformOrigin: "center",
            textShadow:
              "0 0 12px rgba(255, 105, 180, 0.9), 0 0 24px rgba(255, 105, 180, 0.7), 0 0 36px rgba(255, 105, 180, 0.5)",
          }}
        >
          ❤️
        </div>
      </div>
    </div>
  );
};

export default LandingPage;