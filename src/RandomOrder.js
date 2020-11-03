import React, {useContext} from 'react'
import { DatabaseContext } from "./Database";

const RandomOrder = ({thisOne}) => {
    const [Items] = useContext(DatabaseContext);
    shuffle(Items)
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
      
      
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
) 
}

export default RandomOrder