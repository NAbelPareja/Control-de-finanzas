
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
export const UltimosMovimientos = () => {
  return (
    <div className="bg-zinc-800 p-5 border-solid border-1 border-zinc-600 rounded-md ">
      <table>
        <thead className="py-3">
          <tr>
            <th className="pr-50 pb-5">Ultimos Movimientos</th>
            <th className="text-blue-500 pb-5">
              <a href="">Ver todas</a>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <td className="pr-5"><FaArrowUp className="text-green-400"/></td>
              <td>
                Supermercado <br />{" "}
                <span className="text-zinc-400">alimentacion</span>
              </td>
            </td>
            <td>
              -$85.00 <br /> <span className="text-zinc-400">20 jul</span>
            </td>
          </tr>

          <tr>
            <td>
              <td className="pr-5"><FaArrowDown className="text-red-400"/></td>
              <td>
                Supermercado <br />{" "}
                <span className="text-zinc-400">alimentacion</span>
              </td>
            </td>
            <td>
              -$85.00 <br /> <span className="text-zinc-400">20 jul</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
