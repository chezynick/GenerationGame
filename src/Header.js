import React, {useContext} from "react";
import {DatabaseContext} from './Database';


const Header = () => {
        const [Items, setItems] =useContext(DatabaseContext)
  return (
    <div className="header">
      <h1>The Generation Game! </h1>
     
      <h3>Covid Edition</h3>
      <h3>click each item only once, more than once and you lose!</h3>
      
    </div>
  );
};

export default Header;
