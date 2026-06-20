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

  const [buscarDescripcion, setBuscarDescripcion] = useState("")
  const [buscarcategoria, setBuscarcategoria] = useState("")
  const [buscarFecha, setBuscarFecha] = useState("")
  const listaFiltrada = listaMovimientos.filter(valor =>{
    const descripcion = valor.descripcion.toLowerCase()
    const categoria = valor.categoria.toLowerCase()
    const fecha = valor.fecha


    console.log("valor local",typeof(descripcion), "valor input", typeof(buscarDescripcion))

    const cumpleDes = 
    !buscarDescripcion || descripcion.includes(buscarDescripcion.toLowerCase())
    
    const cumpleCat  =
    !buscarcategoria || categoria.includes(buscarcategoria.toLowerCase())
    
    const cumpleFecha = 
    !buscarFecha || fecha === buscarFecha
    return cumpleDes && cumpleCat && cumpleFecha
  })
  console.log("lsita filtrada",listaFiltrada)

  const handleBuscarDescripcion = (e) =>{
    setBuscarDescripcion(e.target.value)
  }
  const handleBuscarcategoria = (e) =>{
    setBuscarcategoria(e.target.value)
  }
  const handleBuscarFecha = (e) =>{
    setBuscarFecha(e.target.value)
  }
  

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
          <BuscadorMovimiento 
          buscarDescripcion= {buscarDescripcion}
          buscarcategoria = {buscarcategoria}
          buscarFecha = {buscarFecha}
          handleBuscarDescripcion= {handleBuscarDescripcion}
          handleBuscarcategoria = {handleBuscarcategoria}
          handleBuscarFecha = { handleBuscarFecha}
          listaFiltrada = {listaFiltrada}
          ></BuscadorMovimiento>
          <MovimientoTable
            listaMovimientos={listaMovimientos}
            editarMovimientos={editarMovimiento}
            eliminarMovimiento={eliminarMovimiento}
            handleEditarMovimiento = {handleEditarMovimiento}
            listaFiltrada = {listaFiltrada}
          ></MovimientoTable>
        </div>
      </div>
    </div>
  );
};
