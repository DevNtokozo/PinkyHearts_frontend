const DataTable = ({
  columns = [],
  fields = [],
  data = [],
  renderActions,
}) => {
  const getValue = (obj, path) => {
    return path.split(".").reduce((value, key) => value?.[key], obj);
  };
  console.log("Columns:", columns);
console.log("Fields:", fields);
console.log("Data:", data);

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">

      <table className="w-full">

        <thead className="bg-pink-500 text-white">
          <tr>

            {columns.map((column) => (
              <th key={column} className="p-4 text-left">
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

                {fields.map((field) => {
  let value = getValue(row, field);

  // Automatically display names for Parent or Child objects
  if (
    value &&
    typeof value === "object" &&
    value.firstName &&
    value.lastName
  ) {
    value = `${value.firstName} ${value.lastName}`;
  }

  return (
    <td key={field} className="p-4">
      {value ?? "-"}
    </td>
  );
})}

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