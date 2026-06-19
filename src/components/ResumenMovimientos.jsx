import { FaArrowDown, FaPiggyBank, FaWallet } from "react-icons/fa"


export const ResumenMovimientos = ({listaMovimientos}) => {
    const ingresosTotal = listaMovimientos.filter((mov) => mov.tipo === "ingreso").reduce((acumulador, valorActual)=>
        acumulador + Number(valorActual.monto),0)

    const gastosTotal = listaMovimientos.filter( (mov) => mov.tipo === "gasto").reduce((acumulador, valorActual) => 
        acumulador + Number(valorActual.monto), 0)

    const saldo = ingresosTotal - gastosTotal

    
  return (
    <div className="h-fit flex flex-row  justify-between  px-10 gap-10">
        <div className="bg-zinc-800 pr-35 pl-5 py-2 rounded-md text-left border-solid border-1 border-zinc-600">
            <div className="flex items-center gap-2">
            <FaWallet className="text-green-400"/>
            <p className="text-zinc-400 ">Ingresos</p>
            </div>
            <h2 className="font-bold text-4xl px-auto ">+${ingresosTotal}</h2>
        </div>
        <div className="bg-zinc-800 pr-35 pl-5 py-2 rounded-md border-solid border-1 border-zinc-600">
            <div className="flex items-center gap-2">
            <FaArrowDown className="text-red-400" />
            <p className="text-zinc-400">Gastos</p>
            </div>
            <h2 className="font-bold text-4xl px-auto">-${gastosTotal}</h2>
        </div>
        <div className="bg-zinc-800 pr-35 pl-5 py-2 rounded-md border-solid border-1 border-zinc-600">
            <div className="flex items-center gap-2">
            <FaPiggyBank className="text-blue-400" />
            <p className="text-zinc-400">Saldo</p>
            </div>
            <h2 className="font-bold text-4xl px-auto">${saldo}</h2>
        </div>
    </div>
  )
}
