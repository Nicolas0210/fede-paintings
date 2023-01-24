import React from 'react';
import './Biocv.css'
import NavBar from '../NavBar/NavBar';
import screenFede1 from './screenFede1.jpeg'

export default function Biocv(){
    return(
        <div>
            <NavBar/>
            <div className="img-bio-container">
                <img src={screenFede1} alt="img not found" className="img-fede-bio"/>
                <h3 className="bio">Artista visual, nacida en Trelew, Chubut en 1999. Profesora de dibujo y pintura egresado del Conservatorio Fracassi, en el taller de Ana Capottosti. Asistió a talleres de artistas como Constanza Delfino, Federico Mesaroli. Actualmente vive y estudia en Córdoba, la Licenciatura de Artes Visuales en la UNC.</h3>
            </div>
        </div>
    )
}