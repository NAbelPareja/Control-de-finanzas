import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const UltimosMovimientos = ({ listaMovimientos }) => {
  const ultimosMovimientos = listaMovimientos.slice(0, 5).map((valor) => valor);

  //construimos un formateador

  const formateador = new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "short",
  });

  return (
    <div className="bg-zinc-800 p-5 border-solid border-1 border-zinc-600 rounded-md ">
      <div className="flex flex-row justify-between gap-40 mb-5">
        <h2>Ultimos Movimientos</h2>
        <h2>Detalles</h2>
      </div>
      {ultimosMovimientos.map((valor) => (
        <div key={valor.id} className="flex flex-row justify-between mb-2">
          <div className="flex flex-row items-center">
            <div className="p-2">
              {valor.tipo === "ingreso" ? (
                  <FaArrowUp className="text-green-400 " />
              ) : (
                  <FaArrowDown className="text-red-400" />
              )}
            </div>
            <div>
              <h2>
                {valor.descripcion} <br />
                <span className="text-zinc-400">{valor.categoria}</span>
              </h2>
            </div>
          </div>
          <h2>
            $ {valor.monto}.00
            <br />
            <span className="text-zinc-400">
              {formateador
                .format(new Date(valor.fecha + "T00:00:00"))
                .replace(".", "")}
            </span>
          </h2>
        </div>
      ))}
    </div>
  );
};
