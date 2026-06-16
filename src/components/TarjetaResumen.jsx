

export const TarjetaResumen = () => {
  return (
    <div className="flex flex-row justify-between gap-5">
        <div className="bg-zinc-800 border-solid border-1 border-zinc-600 py-5 px-8 rounded-md" >
          <p className="text-xm text-zinc-400 bg-blue-900 w-fit px-2 rounded-xl" >Saldo total</p>
          <h2 className="text-4xl py-2"> $ 8,000.00</h2>
          <p className="text-green-600">sdfsdf</p>
        </div>
        <div className="bg-zinc-800 border-solid border-1 border-zinc-600 py-5 px-8 rounded-md">
          <p className="text-xm text-zinc-400 bg-blue-900 w-fit px-2 rounded-xl">Ingresos</p>
          <h2 className="text-4xl py-2"> $ 8,000.00</h2>
          <p className="text-green-600">sdfds</p>
        </div>
        <div className="bg-zinc-800 border-solid border-1 border-zinc-600 py-5 px-8 rounded-md">
          <p className="text-xm text-zinc-400 bg-blue-900 w-fit px-2 rounded-xl">Gastos</p> 
          <h2 className="text-4xl py-2"> $ 8,000.00</h2> 
          <p className="text-red-600">sdfsdf</p>
        </div>
        <div className="bg-zinc-800 border-solid border-1 border-zinc-600 py-5 px-8 rounded-md">
          <p className="text-xm text-zinc-400 bg-blue-900 w-fit px-2 rounded-xl">Ahorro</p> 
          <h2 className="text-4xl py-2"> $ 8,000.00</h2> 
          <p className="text-green-600">sdfds</p>
        </div>
      </div>
  )
}
