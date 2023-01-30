import React from "react";
import Covid from "./components/Covid";
// import Loading from './components/Loading';
import "./index.css";
function App() {
  let current_datetime = new Date();

  return (
    <div>
      <h1>COVID-19 TRACKER</h1>
      <h2>
        Last Updated on :{" "}
        {current_datetime.toLocaleDateString("en-US", { day: "numeric" }) +
          "-" +
          current_datetime.toLocaleDateString("en-US", { month: "short" }) +
          "-" +
          current_datetime.toLocaleDateString("en-US", { year: "numeric" })}
      </h2>
      {/* {load ? <Loading/> : null} */}

      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      {/* <Loading/> */}
      <Covid />
    </div>
  );
}

export default App;
