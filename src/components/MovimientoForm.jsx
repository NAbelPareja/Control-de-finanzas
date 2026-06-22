import { FaSave } from "react-icons/fa";



export const MovimientoForm = ({
  form,
  handleGuardarDatos,
  handleInputChange,
  categorias
}) => {
  return (
    <div className="bg-zinc-800 w-fit py-5 px-2 border-solid border-1 border-zinc-600  rounded-md ">
      <h2 className="">Agregar movimiento</h2>
      <form onSubmit={handleGuardarDatos}>
        <div className="grid grid-cols-2 gap-2 my-5">
          <div className="flex flex-col">
            <label htmlFor="tipo" className="text-zinc-400 text-sm">
              Tipo
            </label>
            <select
              className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35 bg-zinc-800"
              name="tipo"
              value={form.tipo}
              onChange={handleInputChange}
            >
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="categorias" className="text-zinc-400 text-xm">
              Categorias
            </label>
            <select
              className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35 bg-zinc-800"
              name="categoria"
              value={form.categoria}
              onChange={handleInputChange}
              required
            >
              <option  value="">Seleccione </option>
              {categorias[form.tipo === "ingreso" ? "ingresos" : "gastos"].map(
                (categoria, index) => (
                  <option key={index} value={categoria}>
                    {categoria}
                  </option>
                ),
              )}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="descripcion" className="text-zinc-400 text-xm">
              Descripcion
            </label>
            <input
              className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35"
              type="text"
              name="descripcion"
              id="descripcion"
              value={form.descripcion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="monto" className="text-zinc-400 text-xm">
              Monto
            </label>
            <input
              className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35"
              type="number"
              name="monto"
              value={form.monto}
              onChange={handleInputChange}
              required
              min="0"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="fecha" className="text-zinc-400 text-xm">
              Fecha
            </label>
            <input
              className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35"
              type="date"
              name="fecha"
              id="fecha"
              value={form.fecha}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-full py-3  rounded-md hover:bg-blue-700 transition font-semibold"
        >
          <div className="flex items-center gap-2 px-25">
            <FaSave className="text-1xl" />
            Guardar
          </div>
        </button>
      </form>
    </div>
  );
};
