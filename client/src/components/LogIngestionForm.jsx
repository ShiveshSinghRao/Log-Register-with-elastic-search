import React, { useState } from "react";
import api from "../services/api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/LogIngestionForm.css";

const LogIngestionForm = () => {
  const [logData, setLogData] = useState({});
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");
  const [resourceId, setResourceId] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [traceId, setTraceId] = useState("");
  const [spanId, setSpanId] = useState("");
  const [commit, setCommit] = useState("");
  const [parentResourceId, setParentResourceId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const logData = {
        level: level,
        message: message,
        resourceId: resourceId,
        timestamp: timestamp,
        traceId: traceId,
        spanId: spanId,
        commit: commit,
        metadata: {
          parentResourceId: parentResourceId,
        },
      };
      await api.post("/create", logData);

      // Handle success
      setLogData(logData);
      clearFormFields();

      // Show success toast notification
      toast.success("The logs are updated !!");
    } catch (error) {
      // Handle error
      console.error("Error updating logs:", error);
      // Show error toast notification if needed
      toast.error("Failed to update logs!");
    }
  };

  const clearFormFields = () => {
    setLevel("");
    setMessage("");
    setResourceId("");
    setTimestamp("");
    setTraceId("");
    setSpanId("");
    setCommit("");
    setParentResourceId("");
  };

  return (
    <div className="gendivOuter">
      <div className="gendiv">
        <h1>Log Ingestor</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="Level"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <input
            type="text"
            value={resourceId}
            onChange={(e) => setResourceId(e.target.value)}
            placeholder="Resource ID"
          />
          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="Timestamp"
          />
          <input
            type="text"
            value={traceId}
            onChange={(e) => setTraceId(e.target.value)}
            placeholder="Trace ID"
          />
          <input
            type="text"
            value={spanId}
            onChange={(e) => setSpanId(e.target.value)}
            placeholder="Span ID"
          />
          <input
            type="text"
            value={commit}
            onChange={(e) => setCommit(e.target.value)}
            placeholder="Commit"
          />
          <input
            type="text"
            value={parentResourceId}
            onChange={(e) => setParentResourceId(e.target.value)}
            placeholder="Parent Resource ID"
          />

          <button type="submit">Ingest Logs</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIngestionForm;
