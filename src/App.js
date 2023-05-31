import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Menu from "./components/Menu";
import TablesArea from './components/TablesArea';
const App = () => {
  
  return (
    <Router>
      <div>
        <h1>Coffee Shop</h1>
        <Routes>
          <Route exact path="/" element={<TablesArea/>} />
          <Route exact path="/menu" element={<Menu/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
