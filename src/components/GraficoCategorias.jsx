import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
export const GraficoCategorias = ({listaFiltrada }) => {
  
  const COLORS = [
    "oklch(48.8% 0.243 264.376)",
    "oklch(55.5% 0.163 48.998)",
    "oklch(52% 0.105 223.128)",
    "oklch(45.5% 0.188 13.697)",
    "oklch(44.4% 0.177 26.899)"
  ]
  const resumenCategorias = listaFiltrada.reduce((acc, mov) => {
    const nombreCat = mov.categoria;
    if(mov.tipo === "gasto"){
      let categoria = acc.find((valo) => valo.categoria === nombreCat);
      if (!categoria) {
      categoria = {
        categoria: nombreCat,    
        gastos: 0,
      };
      acc.push(categoria);
    }

    if(mov.tipo == "gasto"){
      categoria.gastos += Number(mov.monto);
    }
    } 
  
    return acc;
  }, []);

  return (
    <div className="bg-zinc-800 h-fit border-solid border-1 border-zinc-600  rounded-md px-4 py-2">
      <h2>Gasto por categoria</h2>
      <div >
        <PieChart width={350} height={300}>
          <Pie
            data={resumenCategorias}
            dataKey="gastos"
            nameKey="categoria"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {resumenCategorias.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};
