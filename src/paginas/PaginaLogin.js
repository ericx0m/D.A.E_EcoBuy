import { useState, useEffect } from "react"; //useState es para agregar estado a un componente
import './css/PaginaLogin.css';
export default function PaginaLogin() {
  const iniVal = { nombre: "", contrasena: "" }; //Creamos los valores iniciales como un objeto que contendra nombre y contraseña
  const [formValues, setFormValues] = useState(iniVal); //Ahora creamos un estado y para esto usamos useState el nombre es formValues y el metodo setFormValues e inicia con el valor inicial que creamos
  const [formErrors, setFormErrors] = useState({});//Variable de estado para los errores y el valor inicial estara vacio
  const [isSubmit, setIsSubmit] = useState(false); //ahora crearemos una bandera para el envio del formulario y lo establecemos como falso


  const handleChange = (e) => {
    const { name, value } = e.target;//necesitamos aqui el nombre de el input y el valor que tiene 
    setFormValues({ ...formValues, [name]: value })//aqui le damos el estado tomando como inicial el form values para darle como llave el nombre del usuario con[] 
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //para que no se actualice despues del submit
    setFormErrors(validar(formValues));//aqui agregamos la funcion validar con los valores que tiene el formulario y lo que retorne esta funcion lo configuraremos con setFormErrors que es un objeto
    setIsSubmit(true);//Cuando se envie el form es true
  }


//Funcion para validar los datos del formulario tomando lo que este en los inputs
  const validar = (values) =>{
    const errores = {} //creamos un objeto para los errores
    if(!values.nombre){//si el nombre de usuario no esta escrito
      errores.nombre = "No puedes entrar sin tu Usuario"
    }
    if (!values.contrasena) {//si la contraseña no esta escrita
      errores.contrasena = "No puedes entrar sin tu contraseña";
    } else if (values.contrasena.length < 4) {//si la contraseña es mas corta que 4 caracteres
      errores.contrasena = "Tu contraseña es demasiado corta";
    } else if (values.contrasena.length > 10) {//si la contraseña es mas larga que 10 caracteres
      errores.contrasena = "Tu contraseña es demasiado larga";
    }
    return errores;
  }

  return (
    <div className='Contenedor-Login'>
      <img class="logo" src={require("./css/img/EcoBuyLogo.png")} alt="logo EB"></img>
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="Mensaje-Satisfactorio">Felicidades ahora si puedes encontrar tu producto</div>) : ("")}{/* para ver el json ---> <pre>{JSON.stringify(formValues, undefined, 2)}</pre>*/ }


      <form onSubmit={handleSubmit}> {/*Aqui creamos un envio para enviar el formulario con la funcion handleSubmit*/}
        <h1 className="text-center">Entra y encuentra lo que buscas</h1>
        <div className='espacio'></div>
        <div className='formu'>
          <div className='cam-texto'>
            <label>Nombre:</label>
            <input type='text' name='nombre' placeholder='Nombre' value={formValues.nombre} onChange={handleChange} /> 
            {/* con value vincularemos los valores de las entradas con los valores iniciales(formValues) en este caso nombre.
            Con onChange manejamos el cambio en el input, esto con la constante llamada handleChange
            */}
          </div>
          <p className="pErr">{formErrors.nombre}</p> {/*Para mostrar los mensajes de error*/}
          <div className='cam-texto'>
            <label>Contraseña:</label>
            <input type='password' name='contrasena' placeholder='Contraseña' value={formValues.contrasena} onChange={handleChange} />
            {/* con value vincularemos los valores de las entradas con los valores iniciales(formValues) en este caso contrasena.
            Con onChange manejamos el cambio en el input, esto con la constante llamada handleChange
            */}
          </div>
          <div>
            <p className="pErr">{formErrors.contrasena}</p>{/*Para mostrar los mensajes de error*/}
            <button className="fluid ui button blue submit ">Submit</button>
          </div>
        </div>
      </form >
    </div >
  )
}