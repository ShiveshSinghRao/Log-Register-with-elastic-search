import React, { useState } from "react";
import axios from "../services/api.js";
import { useTable, DefaultColumnFilter } from "react-table";
import "../style/QueryInterfaceForm.css";

const QueryInterfaceForm = () => {
  const [queryParams, setQueryParams] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: "",
    traceId: "",
    spanId: "",
    commit: "",
    metadata: "",
  });

  const [logData, setLogData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleInputChange = (event) => {
    setQueryParams({
      ...queryParams,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let rParams = "?";
      for (const param in queryParams) {
        if (queryParams[param].length > 0) {
          rParams += `&${param}=${queryParams[param]}`;
        }
      }
      console.log(rParams);

      const response = await axios.get("/search" + rParams);
      if (response.data.hits.hits.length > 0) {
        setLogData(response.data.hits.hits);
        setShowTable(true);
      } else {
        setLogData([]);
        alert("No such logs exist!!");
        setShowTable(false);
      }
    } catch (error) {
      throw error;
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Level",
        accessor: "_source.level",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Message",
        accessor: "_source.message",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Resource ID",
        accessor: "_source.resourceId",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Timestamp",
        accessor: "_source.timestamp",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Trace ID",
        accessor: "_source.traceId",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Span ID",
        accessor: "_source.spanId",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Commit",
        accessor: "_source.commit",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Parent Resource ID",
        accessor: "_source.parentResourceId",
        Filter: DefaultColumnFilter,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: logData });

  return (
    <div className="gendivOuter">
      <div className="gendiv">
        <h1>Query Interface</h1>
        <form
          onSubmit={(e) => {
            handleSearch(e);
          }}
        >
          <input
            name="level"
            value={queryParams.level}
            onChange={handleInputChange}
            placeholder="Level"
          />
          <input
            name="message"
            value={queryParams.message}
            onChange={handleInputChange}
            placeholder="Message"
          />
          <input
            name="resourceId"
            value={queryParams.resourceId}
            onChange={handleInputChange}
            placeholder="Resource ID"
          />
          <input
            name="timestamp"
            value={queryParams.timestamp}
            onChange={handleInputChange}
            placeholder="Timestamp"
          />
          <input
            name="traceId"
            value={queryParams.traceId}
            onChange={handleInputChange}
            placeholder="Trace ID"
          />
          <input
            name="spanId"
            value={queryParams.spanId}
            onChange={handleInputChange}
            placeholder="Span ID"
          />
          <input
            name="commit"
            value={queryParams.commit}
            onChange={handleInputChange}
            placeholder="Commit"
          />
          <input
            name="metadata"
            value={queryParams.parentResourceId}
            onChange={handleInputChange}
            placeholder="Parent Resource ID"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {showTable && (
        <table {...getTableProps()} className="log-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QueryInterfaceForm;
