import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/navbar";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;