import React, { useState, useEffect, useRef } from "react";

export default function Console() {
  const [randomText, setRandomText] = useState("");
  const consoleRef = useRef(null);

  useEffect(() => {
    const generateRandomText = () => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < 10; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    const interval = setInterval(() => {
      const newText = generateRandomText() + " ";
      setRandomText((prevText) => prevText + newText);
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-silver-400 pb-3 max-w-xl mx-auto border-2">
      <div className="bg-silver-500 flex justify-between items-center px-2">
        <p className="text-white">Administrador: Apocalipsis, plis</p>
        <div className="flex gap-3 items-center p-1">
          <div className="bg-silver-500 bordes-top w-6 h-6 flex justify-center items-center">
            <p>-</p>
          </div>
          <div className="bg-silver-500 bordes-top w-6 h-6 flex justify-center items-center">
            <p className="square"></p>
          </div>
          <div className="bg-silver-500 bordes-top w-6 h-6 flex justify-center items-center">
            <p>X</p>
          </div>
        </div>
      </div>
      <div
        ref={consoleRef}
        className="bg-black min-h-80 max-h-80 text-green-700 py-2 overflow-y-auto"
      >
        <p>&gt;C:\Users\admin</p>
        <p>&gt;{randomText}</p>
      </div>
    </div>
  );
}
