import React, {  useContext } from "react";
import {DatabaseContext} from './Database';

const Score = ({count}) => {
    const [Items] = useContext(DatabaseContext)

  return (
    <div>
      <div>Your Current Score = {count}</div>
    </div>
  );
 
};
export default Score;
