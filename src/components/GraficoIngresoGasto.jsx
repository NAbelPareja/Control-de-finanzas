import { TbPointFilled } from "react-icons/tb";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";

export const GraficoIngresoGasto = ({ listaMovimientos }) => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const resumenMeses = listaMovimientos.reduce((acc, mov) => {
    const indiceMes = new Date(mov.fecha).getMonth();
    const nombreMes = meses[indiceMes];
    
    let mes = acc.find((item) => item.mes === nombreMes);

    if (!mes) {
      mes = {
        mes: nombreMes,
        ingresos: 0,
        gastos: 0,
      };

      acc.push(mes);
    }

    if (mov.tipo === "ingreso") {
      mes.ingresos += Number(mov.monto);
    } else {
      mes.gastos += Number(mov.monto);
    }

    return acc;
  }, []);

  return (
    <div className="bg-zinc-800 py-3 px-5 border-solid border-1 border-zinc-600 rounded-md">
      <div className="flex flex-row px-5 justify-between">
        <h2 className="font-bold pr-10">Ingresos vs Gastos</h2>
        <div className="flex items-center">
          <TbPointFilled className="text-blue-500" />
          <p className="text-blue-500 "> Ingresos</p>
        </div>
        <div className="flex items-center">
          <TbPointFilled className="text-yellow-500" />
          <p className="text-yellow-500">Gastos</p>
        </div>
      </div>
      <div className="pt-5">
        <BarChart width={450} height={280} data={resumenMeses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis /> 
          <Tooltip />
          <Bar dataKey="ingresos" fill="oklch(42.4% 0.199 265.638)" radius={[8, 8, 0, 0]}/>
          <Bar dataKey="gastos" fill="oklch(68.1% 0.162 75.834)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </div>
    </div>
  );
};
