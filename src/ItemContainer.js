import React, { useContext } from "react";
import { DatabaseContext } from "./Database";

const ItemContainer = () => {
  const [Items, setItems] = useContext(DatabaseContext);

  const thisOne = (e) => {
    Items.forEach((item) => {
      if (item.name === e.target.name) {
        setItems( item.clicked );
        console.log(item);
      }
    });
  };

  return (
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
  );
};
export default ItemContainer;
