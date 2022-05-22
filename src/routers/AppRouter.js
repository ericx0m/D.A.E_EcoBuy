import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../componentes/layout/Layout'
import UsersPage from '../paginas/admin/UsersPage'
import PaginaFavoritos from '../paginas/PaginaFavoritos'
import PaginaInicio from '../paginas/PaginaInicio'
import PaginaInvalida from '../paginas/PaginaInvalida'
import PaginaLogin from '../paginas/PaginaLogin'
import PaginaPerfil from '../paginas/PaginaPerfil'
import PaginaRegistro from '../paginas/PaginaRegistro'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
/* Importamos todas las rutas, esto podemos hacer rapidamente teniendo la correspondiente pestaña abierta, seleccionando el nombre
que aparece en component ctr + espacio y listo */

/* El switch nos ayudara a elegir entre algunas de las rutas, como lo son el inicio, login, etc.
todas estas rutas seran exactas e iran a un componente excepto PaginaInvalida dado que si una ruta no coincide con alguna de 
las ya definidas llegara a esta ruta final de error 404*/

/* Dejamos algunas rutas privadas mediante PrivateRout.js, en el cual si alguien intenta acceder a algunas rutas, sera re-dirigido al login */

export default function AppRouter() {
    return(
        <Router>
            <Layout>
            <Routes>
                <Route exact path='/' element={<PaginaInicio/>} /> 
                <Route exact path='/login' element={<PublicRoute><PaginaLogin/></PublicRoute>
                } /> 
                <Route exact path='/registro' element={<PublicRoute><PaginaRegistro/></PublicRoute>
                } /> 
                <Route exact path='/perfil' element={<PrivateRoute><PaginaPerfil /></PrivateRoute>
                } /> 
                <Route exact path='/favoritos' element={<PrivateRoute><PaginaFavoritos /></PrivateRoute>
                } /> 
                <Route exact path='/admin/users' element={<PrivateRoute><UsersPage /></PrivateRoute>
                } /> 

                <Route path='*' element={<PaginaInvalida/>} /> 
            </Routes>
            </Layout>
        </Router>
    )
}