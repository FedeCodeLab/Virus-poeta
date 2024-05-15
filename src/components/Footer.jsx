export default function Footer() {
  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    return `${hours}:${minutes}`;
  };
  return (
    <footer className="absolute bottom-0 w-full bg-silver-500 min-h-10 p-1 flex justify-between border-t-2 border-white">
      <div className="flex gap-2 items-center justify-center max-w-24 p-1 bordes">
        <img src="../../img/windows.png" alt="windows" className="w-6 h-6 " />
        <p>Start</p>
      </div>
      <div className="flex items-center justify-center bordes-invertidos min-w-20 px-4">
        <img src="../../img/sound.png" alt="" className="max-w-7 h-8" />
        <p>{getCurrentTime()}</p>
      </div>
    </footer>
  );
}
