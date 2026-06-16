
export const TablaResumenCategoria = () => {
  return (
    <div className="bg-zinc-800 h-fit border-solid border-1 border-zinc-600  rounded-md mx-10 justify-between px-5 py-3">
        <table className="w-full">
            <thead className="border-b border-zinc-700">
                <tr>
                    <th className="text-left py-1">Categoria</th>
                    <th className="text-left py-1">Total</th>
                    <th className="text-left py-1">Distribucion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-3">Alimentos </td>
                    <td className="py-3">$450</td>
                    <td className="py-3">grafica de barras azul </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
