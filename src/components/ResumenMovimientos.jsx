import { FaArrowDown, FaPiggyBank, FaWallet } from "react-icons/fa"


export const ResumenMovimientos = () => {
  return (
    <div className="h-fit flex flex-row  justify-between  px-10 gap-10">
        <div className="bg-zinc-800 pr-35 pl-5 py-2 rounded-md text-left border-solid border-1 border-zinc-600">
            <div className="flex items-center gap-2">
            <FaWallet className="text-green-400"/>
            <p className="text-zinc-400 ">Ingresos</p>
            </div>
            <h2 className="font-bold text-4xl px-auto ">$4.000</h2>
        </div>
        <div className="bg-zinc-800 pr-35 pl-5 py-2 rounded-md border-solid border-1 border-zinc-600">
            <div className="flex items-center gap-2">
            <FaArrowDown className="text-red-400" />
            <p className="text-zinc-400">Gastos</p>
            </div>
            <h2 className="font-bold text-4xl px-auto">$4.000</h2>
        </div>
        <div className="bg-zinc-800 pr-35 pl-5 py-2 rounded-md border-solid border-1 border-zinc-600">
            <div className="flex items-center gap-2">
            <FaPiggyBank className="text-blue-400" />
            <p className="text-zinc-400">Saldo</p>
            </div>
            <h2 className="font-bold text-4xl px-auto">$4.000</h2>
        </div>
    </div>
  )
}
