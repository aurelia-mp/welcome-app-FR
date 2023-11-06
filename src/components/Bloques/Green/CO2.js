import React from 'react'
import { Link } from 'react-router-dom'

const CO2 = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/fachada.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/air" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>CO2</p>
        <p className='parrafo'>Contrôle des émissions de dioxyde de carbone:</p>
        <p className='parrafo'>Plus de 800 plantes à feuillage persistant absorbent le CO2</p>
        <p className='parrafo'>Les déchets générés lorsque nos plantes sont taillées sont valorisés, afin de ne pas générer de nouvelles émissions de CO2</p>
        <p className='parrafo'>Nous avons choisi des climatiseurs équipés d'un gaz sans danger pour la couche d'ozone</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default CO2