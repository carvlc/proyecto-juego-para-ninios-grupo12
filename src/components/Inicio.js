import React, { useState } from 'react';
import Juego from './Juego';
import Felicitaciones from './Felicitaciones';
import './Inicio.css'

function Inicio() {
    const [nombreJugador, setNombreJugador] = useState('');
    const [mostrarJuego, setMostrarJuego] = useState(false);
    const [puntaje, setPuntaje] = useState(0);
    const [mostrarFelicitaciones, setMostrarFelicitaciones] = useState(false);
    const [rondaActual, setRondaActual] = useState(1);

    const [jugadorActual, setJugadorActual] = useState(1);
    const [jugadores, setJugadores] = useState([]);

    const manejarClickJugar = (nombre) => {
        setNombreJugador(nombre);
        setMostrarJuego(true);
        setPuntaje(0);
        setMostrarFelicitaciones(false);
    };

    const alTerminar = (nombreJugador, puntaje, rondasTotales) => {
        if (jugadorActual === 1) {
            setJugadores([...jugadores, { nombreJugador, puntaje, rondasTotales }]);
            setJugadorActual(2);
            setMostrarJuego(false);
            setRondaActual(1)
        } else {
            setJugadores([...jugadores, { nombreJugador, puntaje, rondasTotales }]);
            setMostrarJuego(false);
            setMostrarFelicitaciones(true);
            setJugadorActual(1);
        }

    };

    if (!mostrarJuego && !mostrarFelicitaciones) {
        return (
            <div className='my-container'>
                <h1 className='titulo'>Put your name</h1>
                <input
                    className='input-name'
                    type="text"
                    placeholder="Child name"
                    onChange={(e) => setNombreJugador(e.target.value)}
                />
                <button className='btn-play' onClick={() => manejarClickJugar(nombreJugador)}>Play</button>
            </div>
        );
    } else if (mostrarJuego) {
        return (
            <div>
                <Juego
                    nombreJugador={nombreJugador}
                    puntaje={puntaje}
                    setPuntaje={setPuntaje}
                    alTerminar={alTerminar}
                    rondaActual={rondaActual}
                    setRondaActual={setRondaActual}
                />
            </div>
        );
    } else if (mostrarFelicitaciones) {
        return (
            <>
                <div className='grid'>{jugadores.map((jugador) => (
                    <Felicitaciones
                        key={jugador.nombreJugador}
                        nombreJugador={jugador.nombreJugador}
                        puntaje={jugador.puntaje}
                        rondasTotales={jugador.rondasTotales}
                    />
                ))}
                </div>
                {
                    jugadores[0].puntaje > jugadores[1].puntaje ?
                        <h1> Winner {jugadores[0].nombreJugador}</h1> : jugadores[0].puntaje < jugadores[1].puntaje ? <h1> Winner {jugadores[1].nombreJugador}</h1> : <h1>Tie</h1>
                }
            </>

        );
    }
}

export default Inicio;