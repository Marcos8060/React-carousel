import "./App.css";
import data from "./data";
import React, { useState,useEffect } from "react";

function App() {
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() =>{
    const lastIndex = items.length - 1
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  },[index,items])

  return (
    <div className="app">
      <h2 className="title">Carousel</h2>
      <div className="section">
        <button onClick={()=> setIndex(index - 1)}>Prev</button>
        {items.map((item,itemIndex) => {

          let position = 'nextSlide'
          if(itemIndex === index){
            position = 'activeSlide'
          }
          if(itemIndex === index - 1 || (index === 0 && itemIndex === items.length - 1)){
            position = 'lastSlide'
          }
        return <article className={position} key={item.id}>
                <img className="img" src={item.img} alt="" />
                <p>{item.name}</p>
                <small>{item.desc}</small>
               </article>
        })}
        <button onClick={()=> setIndex(index + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
