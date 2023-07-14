import { ContactDetails , Home, CreateContact, Navbar} from "./component/index";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="contact/:id" element={<ContactDetails />} />
      </Routes>
    </div>
  );
}

export default App;
