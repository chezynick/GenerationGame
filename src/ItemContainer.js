import React, { useState,useContext } from "react";
import { DatabaseContext } from "./Database";
import Score from './Score'

const ItemContainer = () => {
  const [Items] = useContext(DatabaseContext);
  const [count, setCount] = useState(0)
  const thisOne = (e) => {
    Items.forEach((item) => {
      if (item.name === e.target.name) {
          if(item.clicked === false){
        item.clicked=true
        setCount(count + 1)
           } else {
            alert ('you lose! you scored '+ count + ' points')
            Items.forEach(item => item.clicked = false)
           };
      }
    });
  };

  return (
    <div >
        <Score count={count}/>
        <div className="container">
      {Items.map((item) => {
        return (
          <div key={item.key}>
            <img src={item.src} alt="pic" name={item.name} onClick={thisOne} />
            <div>{item.name}</div>
          </div>
        );
      })}
    
    </div>
    </div>
  );
};
export default ItemContainer;
