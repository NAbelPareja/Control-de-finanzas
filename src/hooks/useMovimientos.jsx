import { useReducer } from "react"
import { movimientoReducer } from "../reducers/movimientoReducer"
import { init } from "../data/initialState"


export const useMovimientos = () => {
    
    const [listaMovimientos, dispatch] = useReducer(movimientoReducer, [],init)

    const agregarMovimiento = (movimiento) => {
        const nuevaNota = {
            id: Date.now(),
            ...movimiento
        };
        
        const action = {
            type: "[MOVIMIENTO] agregar movimiento",
            payload: nuevaNota
        }; 
        dispatch(action)
    }

    const editarMovimiento = (movimiento) =>{
        const action = {
            type: "[MOVIMIENTO] editar movimiento",
            payload: movimiento    
        };
        dispatch(action)
    }

    const eliminarMovimiento = (id) =>{
        const action = {
            type: "[MOVIMEINTO] elimnar movimiento",
            payload: id

        };
        dispatch(action)
    }

    return {
        listaMovimientos, agregarMovimiento, editarMovimiento, eliminarMovimiento
    }


}


   

