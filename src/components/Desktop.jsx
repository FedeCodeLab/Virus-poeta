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
    <div className="pl-3 pt-2 text-white max-w-24">
      <div
        className={`flex flex-col items-center max-w-20 p-1 border  ${
          select ? "border-silver-400" : "border-transparent"
        }`}
        onClick={onClick}
      >
        <img src="../../img/bat.png" alt="Bat" className="w-10" />
        <p className="text-center text-sm">Apocalipsis, plis</p>
      </div>
    </div>
  );
}
