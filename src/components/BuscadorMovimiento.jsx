

export const BuscadorMovimiento = () => {
  return (
    <div className="flex flex-row bg-zinc-800 h-fit justify-between  border-solid border-1 border-zinc-600  rounded-md gap-10 px-5 py-4" >
      <div className="flex flex-col ">
        <label className="text-zinc-400 text-xs " htmlFor="">
          Buscar descripcion
        </label>
        <input className="border-solid border-1 border-zinc-600  rounded-md mt-2 py-1 px-1" type="text" placeholder="🔎 Escribe para buscar" />

      </div>
      <div className="flex flex-col ">
        <label className="text-zinc-400 text-xs" htmlFor="">
          Categoria
        </label>
        <select className="border-solid border-1 border-zinc-600  rounded-md mt-2 py-1 w-35" name="" id="">
          <option value="">Todas</option>
          <option value="">asdas</option>
          <option value="">adasd</option>
        </select>
      </div>
      <div className="flex flex-col ">
        <label className="text-zinc-400 text-xs" htmlFor="">
          Fecha
        </label>
        <input className="border-solid border-1 border-zinc-600  rounded-md mt-2 py-1 w-35" type="date" placeholder="Seleccionar" />
      </div>
    </div>
  );
};
