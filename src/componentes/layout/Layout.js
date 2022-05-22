import Navegador from "../Navegador";

//Si se le quiere agregar Layout, debajo de children se pueden escribir las etiquetas h1 o las que se estimen convenientes 

export default function Layout({ children }) {
    return (
        <div>
            <Navegador />
            {children}
            
        </div>
    )
}