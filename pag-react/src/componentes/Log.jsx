//Componente de login o quiza se cambie a para ser una pagina
import '../estilo/Log.css';
import Botones from './Boton';
export function Log(){
    return (
      
        <div className='Login-Usuario'>
          <img class="avatar" src={require("../img/logo.png")} alt="logo EB"/>
          <h2>¿Quieres consultar ofertas? Pues, ¡Inicia sesión!</h2>
          <form action="">
            
            <div  className='nombre'>
              <label htmlFor="nombre" className='nom'>Usuario</label>
              <input type="text" id="nombre" name="nombre" />
            </div>
            <div  className='contrasena'>
            <label htmlFor="contrasena" className='con'>Contraseña</label>
              <input type="password" id="contrasena" name="contraseña" />
            </div>
            <div className='BotonAcceder'>
            <Botones 
              texto='Acceder'
              className='entr'
              onClick=''
            />
            </div>
          </form>
        </div>
    );
}

//Exportar para ser importado
export default Log; //Exportacion por defecto