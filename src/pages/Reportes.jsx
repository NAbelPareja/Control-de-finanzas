import { ResumenMovimientos } from "../components/ResumenMovimientos";
import { FiltrReportes } from "../components/FiltrReportes";
import { GraficoCategorias } from "../components/GraficoCategorias";
import { GraficoIngresoGasto } from "../components/GraficoIngresoGasto";
import { TablaResumenCategoria } from "../components/TablaResumenCategoria";
import { useMovimientos } from "../hooks/useMovimientos";
import { useState } from "react";
export const Reportes = () => {
  const Meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
  ]

  const { listaMovimientos } = useMovimientos();

  const [buscarFecha, setBuscarFecha] = useState("");
  const [buscarMes, setBuscarMes] = useState("")

  const listaFiltrada = listaMovimientos.filter((valor) => {
    const mes = Meses[new Date(valor.fecha).getMonth()].toLowerCase()
    const año = new Date(valor.fecha).getFullYear()
    const cumpleAño =
    !buscarFecha || año === Number(buscarFecha);

    const cumpleMes =
    !buscarMes || mes.includes(buscarMes.toLowerCase());

  return cumpleAño && cumpleMes;
  });

  const handleBuscarMes = (e) =>{
    setBuscarMes(e.target.value)
  } 
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
        handleBuscarMes = {handleBuscarMes}
        buscarMes={buscarMes}
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
