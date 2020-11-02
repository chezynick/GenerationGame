import React, { useState, useContext } from "react";
import {DatabaseContext} from './Database';

const Score = (isClicked) => {
    const [Items,setItems ] = useContext(DatabaseContext)
  const [count, setcount] = useState(0);
  if(isClicked === false) {
      setcount(count + 1)
  }
  return (
    <div>
      <div>Your Current Score = {count}</div>
    </div>
  );
 
};
export default Score;
