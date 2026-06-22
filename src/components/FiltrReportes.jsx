export const FiltrReportes = ({buscarFecha, handleBuscarFecha, buscarMes, handleBuscarMes}) => {
  return (
    <div className="flex flex-row  h-fit bg-zinc-800 border-solid border-1 border-zinc-600 px-5 py-2 rounded-md">
      <div className="flex flex-row flex-1 justify-start">
        <div className="flex flex-col justify-center ">
          <h2 className="text-xs text-zinc-400">Periodo</h2>
        </div>
        <div className="flex flex-col px-5">
          <label htmlFor="mes" className="text-xs text-zinc-400 py-1">Mes</label>
          <select 
          className="border-solid border-1 border-zinc-600 rounded-md bg-zinc-800"
          name="mes" 
          type="text"
          value={buscarMes}
          onChange={handleBuscarMes}
          required
          >
            <option value="">Select</option>
            <option value="enero">Enero</option>
            <option value="febrero">Febrero</option>
            <option value="marzo">Marzo</option>
            <option value="abril">Abril</option>
            <option value="mayo">Mayo</option>
            <option value="junio">Junio</option>
            <option value="julio">Julio</option>
            <option value="agosto">Agosto</option>
            <option value="septiembre">Septiembre</option>
            <option value="octubre">Octubre</option>
            <option value="noviembre">Noviembre</option>
            <option value="diciembre">Diciembre</option>
          </select>
        </div>
        <div className="flex flex-col ">
          <label htmlFor ="año" className="text-xs text-zinc-400 py-1">Año</label>
          <input
            className="border-solid border-1 border-zinc-600 rounded-md"
            type="number"
            name="año"
            id="año"
            min="2000"
            max="2030"
            step="1"
            value={buscarFecha}
            onChange={handleBuscarFecha}
            
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 transition">Aplicar</button>
      </div>
    </div>
  );
};
