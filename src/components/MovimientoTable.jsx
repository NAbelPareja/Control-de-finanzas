export const MovimientoTable = ({eliminarMovimiento, handleEditarMovimiento, listaFiltrada}) => {
  return (
    <div className="overflow-x-auto bg-zinc-800 border-solid border-1 border-zinc-600  rounded-md  px-2 lg:px-2 xl:px-5 py-4 mt-5 max-h-75 overflow-y-auto">
      <table className="w-full min-w-[400px]">
        <thead className="text-zinc-400  border-b border-zinc-700">
          <tr>
            <th className=" text-left py-1 ">Descripcion</th>
            <th className=" text-left ">Categoria</th>
            <th className=" text-left ">Monto</th>
            <th className=" text-left ">Fecha</th>
            <th className=" w-40 text-cente ">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaFiltrada.map((value) => (
            <tr
              key={value.id}
              className="hover:bg-zinc-700 transition-colors duration-200"
            >
              <td className={`py-4 max-w-25 break-words  ${value.tipo == "ingreso" ? "text-green-400" : "text-red-400"  }`}>{value.descripcion}</td>
              <td>{value.categoria}</td>
              <td className="w-15 break-words text-right pr-3 font-semibold">{value.monto}</td>
              <td>{new Date(value.fecha).toLocaleDateString("es-PE")}</td>
              <td className="w-40 text-center">
                <button onClick={ () => handleEditarMovimiento(value.id)}
                  className="bg-green-700 px-2 py-1 rounded-md md:mr-2"
                >
                  Editar
                </button>
                <button onClick={() => eliminarMovimiento(value.id)}
                className="bg-red-700 px-2 py-1 rounded-md">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
