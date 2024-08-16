import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label} className="px-4 py-2 text-left text-sm font-medium text-gray-700">{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td className="px-4 py-2 border-t text-sm text-gray-600" key={column.label}>{column.render(rowData)}</td>;
    });

    return (
      <tr className="hover:bg-gray-100" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>{renderedHeaders}</tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{renderedRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
