import { TbPointFilled } from "react-icons/tb"


export const GraficoIngresoGasto = () => {
  return (
    <div className="bg-zinc-800 py-3 px-5 border-solid border-1 border-zinc-600 rounded-md">
          <div className="flex flex-row px-5">
            <h2 className="font-bold pr-10">Ingresos vs Gastos</h2>
            <div className="flex items-center">
            <TbPointFilled className="text-blue-500"  />
            <p className="text-blue-500 "> Ingresos</p>
            </div>
            <div className="flex items-center">
            <TbPointFilled className="text-yellow-500"  />
            <p className="text-yellow-500">Gastos</p>
            </div>
          </div>
          <h2>Grafico</h2>
        </div>
  )
}
