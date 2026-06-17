import { useState } from "react"

export const useFormularioMovimiento = () => {
    
  const [form, setForm] = useState({
    tipo: "ingreso",
    categoria:"",
    descripcion: "",
    monto: "",
    fecha:""
  })

  const handleInputChange = (e) =>{
    e.preventDefault()
    setForm({
        ...form, 
        [e.target.name]: e.target.value,
    });
  }
  
  return {
    form, setForm, handleInputChange
  }
    
}
