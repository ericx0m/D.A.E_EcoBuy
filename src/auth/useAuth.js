import { useContext } from "react"
import { AuthContext } from "./AuthProvider"


export default function useAuth() {
//Aca resivimos el context value que nos envia el componente AuthProvider, para eso utilizaremos el hook de React "useContext". De modo que es Provider quien nos envia la informacion
    const contextValue = useContext(AuthContext);
    return contextValue;
}