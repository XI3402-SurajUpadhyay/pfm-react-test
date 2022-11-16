import logo from "./logo.svg";
import "./App.css";
import { Sunburst } from "pfm-components-library";
import React, { useEffect, useState } from "react";

function App() {
  const [userId, setUserId] = useState(3019);

  const loadChart = () => {

    if (!userId || typeof Number(userId) !== "number") {
      alert("invalid user id");
      return;
    }

    Sunburst({
      endpoint: "https://api.xpsapps.xebia.com/api/v2/transaction/searchSA",
      payload: {
        filterList: [
          {
            filterType: "CustIdFilter",

            filterValues: [userId],
          },
        ],
      },
      width: 600,
      targetId: "myChart",
    });
  };

  useEffect(() => {
    loadChart();
  }, []);
  return (
    <div className="App">

      <h1> Spend Analyser  </h1>
      <div>

      <br /> <br />
        <input value={userId} onChange={(e) => setUserId(+e.target.value)} />
        <button type="button" onClick={loadChart}>
          Render Spend Analyser
        </button>

        <br /> <br />
        <hr/>
      </div>
     
     
     <div id="myChart"></div>
    
    </div>
  );
}

export default App;
