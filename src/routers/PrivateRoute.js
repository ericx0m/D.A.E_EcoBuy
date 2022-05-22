import { Navigate, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";

/* importamos route de react-router-dom y hacemos que los parametros de AppRouter como exact, path y element se les pase
a este archivo y este se los pase a AppRouter. Mediante props podremos hacer que todo lo que reciba, se lo pase a la ruta (Route). 
Si el usuario no esta autenticado lo redigira a registo, pero si lo esta, seguira la logica y retorna su contenido como corresponde*/

//export default function PrivateRoute(props) {

//   //const user = null;
//   //const user = { id: 1, role: 'regular'}

//    const { user } = useAuth();

//    if(!user) return <Navigate to='/Login' />
//    return (
//        <Route {...props}/> 
//    )
//}

/* Para volver a navegar por el resto de paginas, solo es necesario comentar la linea 2, de esa manera se vovlera a tener
acceso sin redirigir al login */

/* Moveremos el usuario a un punto alto con el fin de que sea global y consumirlo mediante un hook */

//const PrivateRoute = ({ children }) => {
//    //const user = false;
//    const user = useAuth();
//    if (!user)
//    //return <Navigate to='/Login' />
//    return children;
//};

//export default PrivateRoute; 

//----------------------------------------------------------------------------

const PrivateRoute = ({ children, user }) => {

    //if (!user) {
     //   return <Navigate to='/' />;
    //}
    return children;
}

export default PrivateRoute;