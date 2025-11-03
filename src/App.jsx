import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import AddContact from "./components/AddContact.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<AddContact />} />
    </Routes>
  </BrowserRouter>
);

export default App;