

export const movimientoReducer = (state, action) =>{
    switch (action.type) {
        case "[MOVIMIENTO] agregar movimiento":
            return [...state, action.payload]
        case "[MOVIMIENTO] editar movimiento":
            return state.map((movimiento) =>{
                if(action.payload == movimiento.id)
                    return{ 
                        ...movimiento,
                        tipo: action. payload.tipo,
                        categorias: action.payload.categorias,
                        descripcion: action.payload.descripcion,
                        monto: action.payload.monto,
                        fecha: action.payload.fecha
                        }
                else{
                    return movimiento;
                }
            });
        case "[MOVIMEINTO] elimnar movimiento":
            return state.filter( movimiento => movimiento.id != action.payload)
        default:
            return state
    }

}
