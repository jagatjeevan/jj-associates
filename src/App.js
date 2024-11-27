import "./App.css";

import ShowData from "./ShowInvoice";
import readXlsxFile from "read-excel-file";
import { useState } from "react";

function App() {
  const [rows, setRows] = useState([]);
  const [month, setMonth] = useState("");

  const handleFileChange = (event) => {
    const input = document.getElementById("input");
    readXlsxFile(input.files[0]).then((rowsToAppend) => {
      setRows(rowsToAppend);
    });
  };

  if (!rows.length) {
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            placeholder="Month Name"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
          <input type="file" onChange={handleFileChange} id="input" />
        </header>
      </div>
    );
  }

  const rowsToPass = rows.slice(1, 10);

  return <ShowData rows={rowsToPass} month={month} />;
}

export default App;
