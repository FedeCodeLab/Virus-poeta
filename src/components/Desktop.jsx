import { useState, useEffect } from "react";

export default function Desktop() {
  const [select, setSelect] = useState(false);

  const onClick = () => {
    setSelect(true);
    console.log(select);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".pl-3.pt-2.text-white") === null) {
        setSelect(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="pl-2 pt-2 text-white max-w-24 select-none">
      <div
        className={`flex flex-col items-center max-w-20 p-1 border ${
          select ? "border-dotted border-silver-400" : "border-transparent"
        }`}
        onClick={onClick}
      >
        <img
          src="https://res.cloudinary.com/dpqpu4wjy/image/upload/v1715799169/virus%20poeta/bat_kwsih0.png"
          alt="Bat"
          className="w-10"
        />
        <p className="text-center text-sm">Apocalipsis, plis</p>
      </div>
    </div>
  );
}
