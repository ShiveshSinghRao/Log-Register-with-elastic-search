import React from "react";
import LogIngestionForm from "./components/LogIngestionForm.jsx";
import QueryInterfaceForm from "./components/QueryInterfaceForm.jsx";
import LogDisplay from "./components/LogDisplay.jsx";

function App() {
  return (
    <div>
      <LogIngestionForm />

      <QueryInterfaceForm />

      <LogDisplay />
    </div>
  );
}

export default App;
