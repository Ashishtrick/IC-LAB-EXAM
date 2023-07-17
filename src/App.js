import './css/bootstrap.min.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
