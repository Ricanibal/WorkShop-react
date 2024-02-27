import '../style/BarraLateralStyle.css'
import consola from '../static/icon/consola.png'
import curriculum from '../static/icon/curriculum.png' 
export function Barra()
{
    let Piezas = [ 
                    {nombre:'Empleos', icono:curriculum, mensaje:'imgEmpleos'},
                    {nombre:'Postulaciones', icono:curriculum, mensaje:'imgPostulacion'},
                    {nombre:'CodeX', icono:consola, mensaje:'imgRetos'},
                    {nombre:'Preguntas', icono:curriculum, mensaje:'imgPreguntas'},
                    {nombre:'Bootcamp', icono:curriculum, mensaje:'imgBootcamp'},
                    {nombre:'Premios', icono:curriculum, mensaje:'imgPremios'},
                    {nombre:'Tu cv', icono:curriculum, mensaje:'imgCV'},
                ]
    return(
        <div className='barralaterla'>
            {Piezas.map((user) =>{
              return (
                <a className='pieza'>
                    <img className='imagenbarra' src={user.icono} alt={user.mensaje}/>
                    <p className='parrafobarra'>{user.nombre}</p>
                </a>
              )
            })}
        </div>
    )
}

