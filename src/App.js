import AppRouter from "./routers/AppRouter";
import AuthProvider from "./auth/AuthProvider";

//Con AuthProvider retornaremos a los hijos el valor global
//El authprovider aun NO lo implementaremos, tocara estudiar e indagar más de esto para hacer rutas publicas y privadas

function App() {
//  return (
//    <div>
//      <AuthProvider>
//          <AppRouter />
//      </AuthProvider>
//      
//    </div>
//  );

    return (
      <div>
        <AppRouter />
      </div>
    )
}

export default App;
