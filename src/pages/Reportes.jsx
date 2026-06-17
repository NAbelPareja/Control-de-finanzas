import { ResumenMovimientos } from "../components/ResumenMovimientos"
import { FiltrReportes } from "../components/FiltrReportes"
import { GraficoCategorias } from "../components/GraficoCategorias"
import { GraficoIngresoGasto } from "../components/GraficoIngresoGasto"
import { TablaResumenCategoria } from "../components/TablaResumenCategoria"
import { useMovimientos } from "../hooks/useMovimientos"
export const Reportes = () => {
  const {listaMovimientos}= useMovimientos()
  return (
    <div className="flex flex-col gap-5">
      <ResumenMovimientos listaMovimientos={listaMovimientos}></ResumenMovimientos>
      <FiltrReportes></FiltrReportes>
      <div  className="flex flex-row mx-10 gap-5"> 
        <GraficoCategorias></GraficoCategorias>
        <GraficoIngresoGasto></GraficoIngresoGasto> 
      </div>
      <TablaResumenCategoria></TablaResumenCategoria>
    </div>
  )
}
