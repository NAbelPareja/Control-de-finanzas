import { ResumenMovimientos } from "../components/ResumenMovimientos";
import { MovimientoForm } from "../components/MovimientoForm";
import { BuscadorMovimiento } from "../components/BuscadorMovimiento";
import { MovimientoTable } from "../components/MovimientoTable";
import { useMovimientos } from "../hooks/useMovimientos";
import { useEffect, useState } from "react";
import { useFormularioMovimiento } from "../hooks/useFormularioMovimiento";

export const Movimientos = () => {
  const {
    listaMovimientos,
    editarMovimiento,
    eliminarMovimiento,
    agregarMovimiento,
  } = useMovimientos();
  const { form, setForm, handleInputChange } = useFormularioMovimiento();

  const [idEditando, setIdEditando] = useState(null);

  const handleGuardarDatos = (e) => {
    e.preventDefault();
    console.log(form);
    if (idEditando) {
      editarMovimiento(form);
    } else {
      agregarMovimiento(form);
    }
    setIdEditando(null);
    setForm({
      tipo: "ingreso",
      categoria: "",
      descripcion: "",
      monto: "",
      fecha: "",
    });
  };

  const handleEditarMovimiento = (id) => {
    setIdEditando(id);
    const edit = listaMovimientos.find((valor) => valor.id === id);
    if (edit) {
      setForm(edit);
    }
  };

  useEffect(() => {
    localStorage.setItem("movimiento", JSON.stringify(listaMovimientos));
  }, [listaMovimientos]);

  return (
    <div className="flex flex-col gap-10 ">
      <ResumenMovimientos
        listaMovimientos={listaMovimientos}
      ></ResumenMovimientos>
      <div className="flex flex-row  ">
        <MovimientoForm
          form={form}
          handleGuardarDatos={handleGuardarDatos} 
          handleInputChange={handleInputChange}
        ></MovimientoForm>
        <div className="flex flex-col flex-1 pr-10">
          <BuscadorMovimiento></BuscadorMovimiento>
          <MovimientoTable
            listaMovimientos={listaMovimientos}
            editarMovimientos={editarMovimiento}
            eliminarMovimiento={eliminarMovimiento}
            handleEditarMovimiento = {handleEditarMovimiento}
          ></MovimientoTable>
        </div>
      </div>
    </div>
  );
};
