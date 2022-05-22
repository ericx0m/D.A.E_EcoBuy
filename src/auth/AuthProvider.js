import { Children, createContext, useState } from "react"; 

//Esta constante la exportamos dado que la utilizaremos en archivos externos

export const AuthContext = createContext();

//Creamos un componente
//ContextValue lo definimos como un objeto con la informacion que deseamos transmitir a los componentes hijos
//El usuario debe ser un estado que cambia conforme el usuario se autentique (useState)

export default function AuthProvider() {

    const [user, setUser] = useState(null);

    const contextValue = {
        user,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            { Children }
        </AuthContext.Provider>
    )
}