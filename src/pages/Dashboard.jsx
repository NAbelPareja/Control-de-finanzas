import { GraficoIngresoGasto } from "../components/GraficoIngresoGasto";
import { UltimosMovimientos } from "../components/UltimosMovimientos";
import { TarjetaResumen } from "../components/TarjetaResumen";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10 mx-10">
      <TarjetaResumen></TarjetaResumen>
      <div className="flex flex-row justify-between  w-full">
        <UltimosMovimientos></UltimosMovimientos>
        <GraficoIngresoGasto></GraficoIngresoGasto>
      </div>
    </div>
  );
};
