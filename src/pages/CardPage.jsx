import React, { useState } from "react";
import { FaGift } from "react-icons/fa";
import confetti from "canvas-confetti";

const CardPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [hasFired, setHasFired] = useState(false);

  const handleToggle = () => {
    if (!showMessage && !hasFired) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setHasFired(true);
    }

    setShowMessage(!showMessage);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-100 p-4 relative overflow-hidden">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center w-full max-w-md md:max-w-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-pink-500 mb-2 flex justify-center items-center gap-2">
          Happy Birthday
        </h1>
        <p className="text-pink-500 font-bold mb-4 text-2xl md:text-4xl flex items-center justify-center">
          Diyaa....!! 🩷
        </p>

        <div
          onClick={handleToggle}
          className="bg-gradient-to-r from-pink-400 to-purple-400 p-6 md:p-8 rounded-2xl shadow-xl cursor-pointer transition transform hover:scale-105"
        >
          <p className="text-white text-base md:text-lg font-bold text-center flex flex-col items-center gap-2">
            {showMessage ? (
              <>
                Wishing you Happy Birthday Love ! <br /> Enjoy your Day
                Sweet-Heart...! 🤍🤍🤍
              </>
            ) : (
              <>
                Tap to open your card
                <FaGift size={36} />
              </>
            )}
          </p>
        </div>

        {showMessage && (
          <p className="text-pink-400 text-sm md:text-base mt-6">
            May every wish you make today come true. You deserve It All! 💖💖💖💖
          </p>
        )}
      </div>
    </div>
  );
};

export default CardPage;