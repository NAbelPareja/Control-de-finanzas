export const init = () => {
  const datos = localStorage.getItem("movimiento");

  return datos ? JSON.parse(datos) : [];
};
