export const BuscadorMovimiento = ({
  buscarDescripcion,
  buscarcategoria,
  buscarFecha,
  handleBuscarDescripcion,
  handleBuscarcategoria,
  handleBuscarFecha,
  categorias
}) => {
  const todasCategorias = [
    ...categorias.ingresos,
    ...categorias.gastos
  ]

  return (
    <div className="flex flex-row bg-zinc-800 h-fit justify-between  border-solid border-1 border-zinc-600  rounded-md gap-10 px-5 py-4">
      <div className="flex flex-col ">
        <label className="text-zinc-400 text-xs " htmlFor="descripcion">
          Buscar descripcion
        </label>
        <input
          className="border-solid border-1 border-zinc-600  rounded-md mt-2 py-1 px-1"
          type="text"
          placeholder="🔎 Escribe para buscar"
          name="descripcion"
          value={buscarDescripcion}
          onChange={handleBuscarDescripcion}
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-zinc-400 text-xs" htmlFor="categoria">
          Categoria
        </label>
        <select
          className="border-solid border-1 border-zinc-600  rounded-md mt-2 py-1 w-35 bg-zinc-800"
          name="categoria"
          value={buscarcategoria}
          onChange={handleBuscarcategoria}
        >
          <option value="">Seleccione</option>
          {
            todasCategorias.map( valor => 
              <option value={valor}>{valor}</option>
            ) 
          }

        </select>
      </div>
      <div className="flex flex-col ">
        <label className="text-zinc-400 text-xs" htmlFor="fecha">
          Fecha
        </label>
        <input
          className="border-solid border-1 border-zinc-600  rounded-md mt-2 py-1 w-35"
          type="date"
          placeholder="Seleccionar"
          name="fecha"
          value={buscarFecha}
          onChange={handleBuscarFecha}
        />
      </div>
    </div>
  );
};
