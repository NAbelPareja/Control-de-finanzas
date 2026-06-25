import { GraficoIngresoGasto } from "../components/GraficoIngresoGasto";
import { ResumenMovimientos } from "../components/ResumenMovimientos";
import { UltimosMovimientos } from "../components/UltimosMovimientos";
import { useMovimientos } from "../hooks/useMovimientos";


export const Dashboard = () => {

  const {listaMovimientos} = useMovimientos()

  return (
    <div className="flex flex-col gap-10 md:mx-20 w-full ">
      <ResumenMovimientos listaMovimientos = {listaMovimientos}></ResumenMovimientos>
      <div className="flex  flex-col gap-5 lg:flex-row justify-between lg:gap-5 w-full ">
        <UltimosMovimientos listaMovimientos={listaMovimientos}></UltimosMovimientos>
        <GraficoIngresoGasto listaMovimientos = {listaMovimientos}></GraficoIngresoGasto>
      </div>
    </div>
  );
};
