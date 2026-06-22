import { GraficoIngresoGasto } from "../components/GraficoIngresoGasto";
import { ResumenMovimientos } from "../components/ResumenMovimientos";
import { UltimosMovimientos } from "../components/UltimosMovimientos";
import { useMovimientos } from "../hooks/useMovimientos";


export const Dashboard = () => {

  const {listaMovimientos} = useMovimientos()

  return (
    <div className="flex flex-col gap-10 mx-10 w-full ">
      <ResumenMovimientos listaMovimientos = {listaMovimientos}></ResumenMovimientos>
      <div className="flex flex-row justify-between  w-full">
        <UltimosMovimientos listaMovimientos={listaMovimientos}></UltimosMovimientos>
        <GraficoIngresoGasto listaMovimientos = {listaMovimientos}></GraficoIngresoGasto>
      </div>
    </div>
  );
};
