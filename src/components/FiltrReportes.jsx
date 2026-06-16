export const FiltrReportes = () => {
  return (
    <div className="flex flex-row  h-fit bg-zinc-800 border-solid border-1 border-zinc-600 px-5 py-2 rounded-md  mx-10">
      <div className="flex flex-row flex-1 justify-start">
        <div className="flex flex-col justify-center ">
          <h2 className="text-xs text-zinc-400">Periodo</h2>
        </div>
        <div className="flex flex-col px-5">
          <label className="text-xs text-zinc-400 py-1">Mes</label>
          <input
            className="border-solid border-1 border-zinc-600 rounded-md"
            type="month"
          />
        </div>
        <div className="flex flex-col ">
          <label for ="año" className="text-xs text-zinc-400 py-1">Año</label>
          <input
            className="border-solid border-1 border-zinc-600 rounded-md"
            type="number"
            name="año"
            id="año"
            min="2000"
            max="2030"
            step="1"
            value="2005"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 transition">Aplicar</button>
      </div>
    </div>
  );
};
