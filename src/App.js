import React from "react";
import "./App.css";
//import components
import Header from "./Header";
import ItemContainer from './ItemContainer'
import Rollers from './Rollers'
import {DatabaseProvider} from './Database';


function App() {
  
  return (
    <DatabaseProvider>
    <div className="App">
      <Header />
      <ItemContainer />
      <Rollers />
    </div>
    </DatabaseProvider>
  );
}

export default App;
