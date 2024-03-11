import React from "react";
import "../app.css";
function List(props) {
  const increase = () => {
    const newData = JSON.parse(localStorage.getItem("data")) || [];
    let newH = newData[props.index].hour++;
    props.updateHour(newH);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const decrease = () => {
    const newData = JSON.parse(localStorage.getItem("data")) || [];
    let newH = newData[props.index].hour > 0 ? newData[props.index].hour-- : 0;
    props.updateHour(newH);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <div>
      <ul className="list-container">
        <li className="list-item">
          <h3>{props.name}</h3>
          <h3> {props.hour}</h3>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </li>
      </ul>
    </div>
  );
}

export default List;
