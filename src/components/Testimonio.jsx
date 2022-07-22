import React from 'react';
import '../styles/Testimonio.css'
const Testimonio = (props) => {
    return ( 
        <div className='contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={`${props.url}`}
            alt={props.alt} />
           <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'><strong>{props.name}</strong> en {props.country}</p>
            <p className='cargo-testimonio'>{props.job} en <strong>{props.business}</strong></p>
            <p className='texto-testimonio'>"<strong>{props.sarah}</strong>{props.testimony} <strong>{props.destacar}</strong>"</p>
           </div>


        </div>
     )
}
 
export default Testimonio;