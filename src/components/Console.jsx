export default function Console() {
  return (
    <div className="bg-silver-400  pb-3 max-w-xl mx-auto border-2">
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
      <div className="bg-black min-h-80 text-white py-2">
        <p>&gt;C:\Users\admin</p>
        <p>&gt;Hola</p>
      </div>
    </div>
  );
}
