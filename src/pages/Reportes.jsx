import { ResumenMovimientos } from "../components/ResumenMovimientos";
import { FiltrReportes } from "../components/FiltrReportes";
import { GraficoCategorias } from "../components/GraficoCategorias";
import { GraficoIngresoGasto } from "../components/GraficoIngresoGasto";
import { TablaResumenCategoria } from "../components/TablaResumenCategoria";
import { useMovimientos } from "../hooks/useMovimientos";
import { useState } from "react";
export const Reportes = () => {
  const { listaMovimientos } = useMovimientos();

  const [buscarFecha, setBuscarFecha] = useState("");

  const listaFiltrada = listaMovimientos.filter((valor) => {
    if (buscarFecha) {
      return new Date(valor.fecha).getFullYear == buscarFecha;
    }
    return valor
  });

  const handleBuscarFecha = (e) => {
    setBuscarFecha(e.target.value);
  };

  return (
    <div className="flex flex-col gap-5">
      <ResumenMovimientos
        listaMovimientos={listaMovimientos}
      ></ResumenMovimientos>
      <FiltrReportes
        handleBuscarFecha={handleBuscarFecha}
        buscarFecha={buscarFecha}
      ></FiltrReportes>
      <div className="flex flex-row mx-10 gap-5">
        <GraficoCategorias
          listaMovimientos={listaMovimientos}
          listaFiltrada={listaFiltrada}
        ></GraficoCategorias>
        <GraficoIngresoGasto
          listaMovimientos={listaMovimientos}
        ></GraficoIngresoGasto>
      </div>
      <TablaResumenCategoria></TablaResumenCategoria>
    </div>
  );
};
