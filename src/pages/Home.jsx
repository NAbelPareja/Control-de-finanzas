import homeImg from "../assets/homeImg.jpg";
export const Home = () => {
  return (
    <>
      <div className="flex flex-row  mx-auto my-auto gap-20 px-10">
        <div className="flex flex-col b">
          <h5 className="w-fit text-xs bg-blue-950 text-blue-300 font-bold  py-1 px-2 rounded-3xl">FINANZAS PERSONALES</h5>
          <h2 className="text-5xl py-3 font-bold ">
            Controla tus finanzas
          </h2>
          <h2 className="text-5xl font-bold text-blue-700 ">
            de forma sencilla.
          </h2>
          <p className="text-zinc-400 py-5">Registra ingresos, gastos y metas 
            financieras en un solo lugar. Toma decisiones inteligentes con datos claros y en tiempo real.</p>
          <button className="bg-blue-600 w-fit text-xm py-1 px-3 rounded-md hover:bg-blue-700" > Comenzar ahora </button>
          <hr className="text-zinc-700 mt-6"/>
          <div className="flex flex-row my-2 gap-6">
            <div><h2 className="font-bold">+12k</h2><p className="text-xs text-zinc-400">Usuarios activos</p></div>
            <div><h2 className="font-bold">98%</h2> <p className="text-xs text-zinc-400">Satisfacción</p></div>
            <div><h2 className="font-bold">$0</h2>  <p className="text-xs text-zinc-400">Para empezar</p></div>
          </div>
        </div>
        <img className="h-90 w-200 px-15 rounded-md" src={homeImg} alt=""/>
      </div>
      <div>

      </div>
    </>
  );
};
