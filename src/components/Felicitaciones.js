import React from 'react';
import './Felicitaciones.css'

function Felicitaciones({ nombreJugador, puntaje, rondasTotales }) {
    return (
        <div className='contenedor'>
            <h1 className='titulo'>¡Felicitaciones, {nombreJugador}!</h1>
            <p className='puntaje'>Tu puntaje total es: {puntaje}</p>
            <p className='rondas-totales'>Rondas Totales: {rondasTotales}</p>
        </div>
    );
}

export default Felicitaciones;