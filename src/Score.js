import React, {  useState } from "react";


const Score = ({count}) => {
 
    const [topScore,setTopScore] = useState(0)
if (count > topScore ){
  setTopScore(count)
} 

  return (
    <div className='scoreCard'>
      <div>Your Current Score = {count}</div>
      <div>Top Score = {topScore}</div>
    </div>
  );
 
};
export default Score;
