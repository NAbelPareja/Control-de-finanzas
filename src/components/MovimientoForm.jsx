import { FaSave } from "react-icons/fa";

export const MovimientoForm = () => {
  return (
    <div className="bg-zinc-800 w-fit py-5 px-2 border-solid border-1 border-zinc-600 ml-10 mr-10 rounded-md ">
      <h2 className="">Agregar movimiento</h2>
      <div className="grid grid-cols-2 gap-2 my-5">
        <div className="flex flex-col">
          <label htmlFor="" className="text-zinc-400 text-xm">
            Tipo
          </label>
          <select
            className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35"
            name=""
            id=""
          >
            <option value="">Ingreso</option>
            <option value="">Gasto</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-zinc-400 text-xm">
            Categorias
          </label>
          <select
            className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35"
            name=""
            id=""
          >
            <option value="">Alimentos</option>
            <option value="">Vestimenta</option>
            <option value="">Hogar</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-zinc-400 text-xm">
            Descripcion
          </label>
          <input
            className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-zinc-400 text-xm">
            Monto
          </label>
          <input
            className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35"
            type="text"
            name=""
            id=""
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-zinc-400 text-xm">
            techa
          </label>
          <input
            className="border-solid border-1 border-zinc-600 rounded-md py-2 px-2 w-35"
            type="date"
            name=""
            id=""
          ></input>
        </div>
      </div>

      <button className="bg-blue-600 w-full py-3  rounded-md hover:bg-blue-700">
        <div className="flex items-center gap-2 px-25">
          <FaSave className="text-1xl" />
          Guardar
        </div>
      </button>
    </div>
  );
};
