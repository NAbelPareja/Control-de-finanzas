import { ResumenMovimientos } from "../components/ResumenMovimientos";
import { MovimientoForm } from "../components/MovimientoForm";
import { BuscadorMovimiento } from "../components/BuscadorMovimiento";
import { MovimientoTable } from "../components/MovimientoTable";

export const Movimientos = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <ResumenMovimientos></ResumenMovimientos>
      <div className="flex flex-row  ">
        <MovimientoForm></MovimientoForm>
        <div className="flex flex-col flex-1 pr-10">
          <BuscadorMovimiento></BuscadorMovimiento>
          <MovimientoTable></MovimientoTable>
        </div>
      </div>
    </div>
  );
};
