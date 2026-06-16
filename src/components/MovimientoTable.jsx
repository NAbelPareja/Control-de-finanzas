
export const MovimientoTable = () => {
  return (
    <div className=" bg-zinc-800 border-solid border-1 border-zinc-600  rounded-md  px-5 py-4 mt-5">
        <table className="w-full">
            <thead className="text-zinc-400  border-b border-zinc-700">
                <tr >
                    <th className=" text-left py-1">Descripcion</th>
                    <th className=" text-left ">Categoria</th>
                    <th className=" text-left ">Monto</th>
                    <th className=" text-left ">Fecha</th>
                    <th className=" w-40 text-cente ">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-zinc-700 transition-colors duration-200">
                    <td className="py-4">Mercadi</td>
                    <td>alimentps</td>
                    <td>$-150</td>
                    <td>Fecha</td>
                    <td className="w-40 text-center">
                    <button className="bg-green-700 px-2 py-1 rounded-md mr-2">Editar</button>
                    <button className="bg-red-700 px-2 py-1 rounded-md">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
