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

          {data.length === 0 ? (

            <tr>

              <td
                colSpan={columns.length + 1}
                className="text-center py-8 text-gray-500"
              >
                No records found.
              </td>

            </tr>

          ) : (

            data.map((row) => (

              <tr
                key={row.id}
                className="border-b hover:bg-pink-50"
              >

                {Object.keys(row)
                  .filter(key => key !== "id")
                  .slice(0, columns.length)
                  .map((key) => (

                    <td
                      key={key}
                      className="p-4"
                    >

                      {typeof row[key] === "object"
                        ? row[key]?.firstName + " " + row[key]?.lastName
                        : row[key]}

                    </td>

                  ))}

                <td className="p-4">

                  {renderActions(row)}

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default DataTable;