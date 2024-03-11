import React, { useState } from "react";
import List from "./components/List";
import "./app.css";

function App() {
  const [current, update] = useState([]);
  const [currSub, setSubject] = useState("");
  const [currHour, setHour] = useState(0);

  let addSubject = (e) => {
    setSubject(e.target.value);
  };

  let addHour = (e) => {
    setHour(e.target.value);
  };

  function add(e) {
    e.preventDefault();
    const newData = [...current, { name: currSub, hour: currHour }];
    update(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  let data = JSON.parse(localStorage.getItem("data")) || [];

  return (
    <div className="container">
      <h1>Geekster Education Planner</h1>
      <div>
        <form onSubmit={add} className="form input-container">
          <input
            type="text"
            placeholder="Subject"
            onChange={addSubject}
          ></input>
          <input
            type="number"
            placeholder="Hours"
            onChange={addHour}
            min={0}
          ></input>
          <button type="submit">ADD</button>
        </form>
      </div>
      <div>
        {data.map((item, index) => (
          <List
            key={index}
            index={index}
            name={item.name}
            hour={item.hour}
            updateHour={setHour}
          ></List>
        ))}
      </div>
    </div>
  );
}

export default App;
