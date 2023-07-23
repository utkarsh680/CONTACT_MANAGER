import {Home, CreateContact, Navbar} from "./component/index";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/create-contact" element={<CreateContact/>} />
      </Routes>
    </div>
  );
}

export default App;
