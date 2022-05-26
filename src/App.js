import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar';
import Inicio from './components/paginas/Inicio';
import Pajaros from './components/paginas/Pajaros';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Inicio />} />
        <Route path='/pajaros' element={<Pajaros />} />
      </Routes>
    </Router>
  );
}

export default App;
