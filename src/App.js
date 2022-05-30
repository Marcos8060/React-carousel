import "./App.css";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <div className="app">
      <h2 className="title">Carousel</h2>
      <div className="section">
        <button>Prev</button>
        {items.map((item) => {
          return (
            <section key={item.id}>
              <img className="img" src={item.img} alt="" />
              <p>{item.name}</p>
              <small>{item.desc}</small>
            </section>
          );
        })}
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
