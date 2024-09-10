import { Route, Routes } from 'react-router-dom';
import Contact from "./Contact"
import NewsBlog from './NewsBlog';
import Support from './Support';


function ContactRoutes() {
    return (
        <>
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path='newsblog' element={<NewsBlog />} />
          <Route path='support' element={<Support />} />
          </Routes>
        </>
    )
}

export default ContactRoutes;