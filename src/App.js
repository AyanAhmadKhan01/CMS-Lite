import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/Home/Home';
import StoreRoutes from './Pages/Store/StoreRoutes';
import ContactRoutes from './Pages/Contact/ContactRoutes';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store/*' element={<StoreRoutes />} />
          <Route path='/contact/*' element={<ContactRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
