//Rutas de las paginas 
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Log from './componentes/Log';
import ProdMarca from './Pags/ProdMarca';
//import Marca from '../componentes/Marca.jsx';
//import Boton from '../componentes/Boton.jsx';
//npm start (en la carpeta del proyecto react)
export const App = () => {
    return (
      <div>
       <Router>
       <div>
         <Routes>
         <Route path='/' element={<ProdMarca/>} t/>
         <Route path='/Log' element={<Log/>}/>
         </Routes>
        </div>
       </Router>
       </div>
    );
}
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}
//Exportar para ser importado
export default AppWrapper; //Exportacion por defecto