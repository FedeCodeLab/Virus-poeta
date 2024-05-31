import React, { useState, useEffect, useRef } from "react";

export default function Video({ onClose }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const windowRef = useRef(null);
  const offsetRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleClose = () => {
    onClose();
  };

  const handleCanPlayThrough = () => {
    videoRef.current.play().catch((error) => {
      console.error("Error reproduciendo el video:", error);
    });
  };

  return (
    <div
      ref={windowRef}
      className="bg-silver-400 pb-3 max-w-xl min-w-80 mx-auto border-2 select-none"
      style={{ left: position.x, top: position.y, position: "absolute" }}
    >
      <div
        className="bg-silver-500 flex justify-between items-center px-2"
        onMouseDown={handleMouseDown}
      >
        <p className="text-white">Reproductor de video: Apocalipsis, pls</p>
        <div className="flex gap-3 items-center p-1">
          <div className="bg-silver-500 bordes-top w-6 h-6 flex justify-center items-center">
            <p>-</p>
          </div>
          <div className="bg-silver-500 bordes-top w-6 h-6 flex justify-center items-center">
            <p className="square"></p>
          </div>
          <div
            className="bg-silver-500 bordes-top w-6 h-6 flex justify-center items-center"
            onClick={handleClose}
          >
            <p>X</p>
          </div>
        </div>
      </div>
      <div className="bg-black overflow-y-auto pb-6">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          autoPlay
          onCanPlayThrough={handleCanPlayThrough}
        >
          {/* <source src="../../img/virusasd.mp4" type="video/mp4" /> */}
          <source
            src="https://res.cloudinary.com/dpqpu4wjy/video/upload/v1/virus%20poeta/virusasd_xkvde5.mp4?_s=vp-2.0.2"
            type="video/mp4"
          />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
}
