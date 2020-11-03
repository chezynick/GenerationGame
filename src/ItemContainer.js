import React, { useState,useContext } from "react";
import { DatabaseContext } from "./Database";
import Score from './Score'
import RandomOrder from'./RandomOrder'

const ItemContainer = () => {
  const [Items] = useContext(DatabaseContext);
  const [count, setCount] = useState(0)
  
  const thisOne = (e) => {
    Items.forEach((item) => {
      if (item.name === e.target.name) {
          if(item.clicked === false){
        item.clicked=true
        console.log(item.name)
        setCount(count + 1)
           } else {
            alert ('youve already chosen that one!! you scored '+ count + ' points')
            Items.forEach(item => item.clicked = false)
            setCount(0)
           };
      }
    });
  };

  return (
    <div >
        <Score count={count}/>
        <RandomOrder thisOne={thisOne}/>
    </div>
  );
};
export default ItemContainer;
