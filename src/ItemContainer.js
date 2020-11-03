import React, { useState, useContext } from "react";
import { DatabaseContext } from "./Database";
import Score from "./Score";
import RandomOrder from "./RandomOrder";
import Winner from "./Winner";
const ItemContainer = () => {
  const [Items] = useContext(DatabaseContext);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState("none");

  const thisOne = (e) => {
    Items.forEach((item) => {
      if (item.name === e.target.name) {
        if (item.clicked === false) {
          item.clicked = true;

          setCount(count + 1);
        } else {
          setWinner("flex");
          Items.forEach((item) => (item.clicked = false));
        }
      }
    });
  };

  return (
    <div>
      <Score count={count} />
      <Winner
        winner={winner}
        setWinner={setWinner}
        count={count}
        setCount={setCount}
      />
      <RandomOrder thisOne={thisOne} />
    </div>
  );
};
export default ItemContainer;
