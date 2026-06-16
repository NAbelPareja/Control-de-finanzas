import { ResumenMovimientos } from "../components/ResumenMovimientos"
import { FiltrReportes } from "../components/FiltrReportes"
import { GraficoCategorias } from "../components/GraficoCategorias"
import { GraficoIngresoGasto } from "../components/GraficoIngresoGasto"
import { TablaResumenCategoria } from "../components/TablaResumenCategoria"
export const Reportes = () => {
  return (
    <div className="flex flex-col gap-5">
      <ResumenMovimientos></ResumenMovimientos>
      <FiltrReportes></FiltrReportes>
      <div  className="flex flex-row mx-10 gap-5"> 
        <GraficoCategorias></GraficoCategorias>
        <GraficoIngresoGasto></GraficoIngresoGasto> 
      </div>
      <TablaResumenCategoria></TablaResumenCategoria>
    </div>
  )
}
