import React, { useState, useEffect } from "react";
import api from "../services/api.js";
import "../style/LogDisplay.css";

const LogDisplay = () => {
  const [logs, setLogs] = useState([]);
  const [showLogs, setShowLogs] = useState(false);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await api.get("/search");
        // Set logs state with received data from response
        console.log(response.data.hits.hits);
        setLogs(response.data.hits.hits);
      } catch (error) {
        // Handle error

        console.log(error);
        throw error;
      }
    };
    fetchLogs();
  }, []);

  const handleClick = () => {
    setShowLogs(!showLogs);
  };

  return (
    <div className="gendivOuter">
      <button onClick={handleClick}>
        {showLogs ? "Hide Logs" : "Show Logs"}
      </button>
      {showLogs && (
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Message</th>
              <th>Resource ID</th>
              <th>Timestamp</th>
              <th>Trace ID</th>
              <th>Span ID</th>
              <th>Commit</th>
              <th>Parent Resource ID</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log._source.level}</td>
                <td>{log._source.message}</td>
                <td>{log._source.resourceId}</td>

                <td>{log._source.timestamp}</td>
                <td>{log._source.traceId}</td>
                <td>{log._source.spanId}</td>
                <td>{log._source.commit}</td>
                <td>{log._source.parentResourceId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LogDisplay;
