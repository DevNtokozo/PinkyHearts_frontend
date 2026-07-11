import React from 'react'

const DataTable = ({ columns, data, renderActions }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">

      <table className="w-full">

        <thead className="bg-pink-500 text-white">

          <tr>

            {columns.map((column) => (
              <th
                key={column}
                className="p-4 text-left"
              >
                {column}
              </th>
            ))}

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((row) => (

            <tr
              key={row.id}
              className="border-b hover:bg-pink-50"
            >

              <td className="p-4">{row.firstName}</td>

              <td className="p-4">{row.lastName}</td>

              <td className="p-4">{row.email}</td>

              <td className="p-4">{row.phone}</td>

              <td className="p-4">

                {renderActions(row)}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DataTable;
