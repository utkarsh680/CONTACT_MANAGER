import {Home, CreateContact, Navbar} from "./component/index";
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/create-contact" element={<CreateContact/>} />
      </Routes>
      <ToastContainer />
  
    </div>
  );
}

export default App;
