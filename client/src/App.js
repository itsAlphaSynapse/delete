import './App.css';
import About from './pages/About'
import { Router, Route, Routes } from 'react-router-dom';
import Contactus from './pages/Contactus'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
