import React from "react";
import "./App.css";
//import components
import Header from "./Header";
import ItemContainer from './ItemContainer'

import {DatabaseProvider} from './Database';


function App() {
  
  return (
    <DatabaseProvider>
    <div className="App">
      <Header />
      <ItemContainer />
      
    </div>
    </DatabaseProvider>
  );
}

export default App;
